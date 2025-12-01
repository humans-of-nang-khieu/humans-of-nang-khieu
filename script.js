"use strict";

// Biến global
var lastY = 0;
// Lấy khung chứa header (cái này có sẵn trong html chính nên lấy luôn được)
const header = document.getElementById("header");

document.addEventListener("DOMContentLoaded", function () {
  fetch("../header.html")
    .then((response) => response.text())
    .then((data) => {
      // 1. Chèn nội dung vào khung
      if (header) {
        header.innerHTML = data;
      }

      // --- BẮT ĐẦU: Code xử lý các phần tử VỪA ĐƯỢC CHÈN VÀO ---

      // 2. Lúc này mới đi tìm menu và headerElements
      const menu = document.getElementById("menu");
      const headerElements = document.getElementById("headerElements");

      // 3. Gắn sự kiện click
      if (menu && headerElements) {
        menu.addEventListener("click", function () {
          // Logic đóng/mở menu như cũ
          // Lưu ý: classList sẽ an toàn hơn className nếu bạn muốn giữ các class khác
          if (headerElements.classList.contains("headerElementsActive")) {
            headerElements.classList.remove("headerElementsActive");
            // Đảm bảo class gốc vẫn còn
            headerElements.className = "headerElements";
            menu.innerHTML = "menu"; // Icon 3 gạch (Material Icon text)
          } else {
            headerElements.classList.add("headerElementsActive");
            // Hoặc gán đè như code cũ của bạn:
            // headerElements.className = "headerElements headerElementsActive";
            menu.innerHTML = "close"; // Icon dấu X
          }
        });
      }

      // 4. Highlight mục đang active
      highlightCurrentPage();

      // --- KẾT THÚC ---
    })
    .catch((err) => console.error("Lỗi tải header:", err));
});

// Hàm này giữ nguyên
function highlightCurrentPage() {
  // Cần xử lý trường hợp ở trang chủ (pathname là /)
  const pathParts = window.location.pathname.split("/");
  // Lấy phần tử thứ 2 (index 1), nếu không có thì mặc định rỗng
  const pageName = pathParts[1] ? "../" + pathParts[1] : "../index.html";

  const headerLinks = document.querySelectorAll(".headerElements a");

  headerLinks.forEach((link) => {
    // So sánh tương đối hoặc tuyệt đối tùy vào cấu trúc link của bạn
    if (link.getAttribute("href") === pageName) {
      link.style.color = "var(--brown-theme)";
    }
  });
}

// Scroll giữ nguyên vì nó thao tác trên biến 'header' (đã lấy ở dòng đầu)
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (!header) return; // Kiểm tra an toàn

  var curPos = window.scrollY;
  if (curPos > 20) {
    lastY = curPos;
    // Dùng classList để không ghi đè các class khác nếu có
    if (!header.classList.contains("headerActive")) {
      header.classList.add("headerActive");
    }
  } else {
    lastY = curPos;
    header.classList.remove("headerActive");
  }
}

// Countdown Timer

const date = "30 Sep, 2025 23:59:59";
const countdownDate = new Date(date).getTime();
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {
  var now = new Date().getTime();

  var distance = countdownDate - now;

  var d = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  var h = Math.max(
    0,
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  var m = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var s = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

  function norm(a) {
    if (a < 10) {
      return "0" + a;
    } else {
      return "" + a;
    }
  }

  days.innerHTML = norm(d);
  hours.innerHTML = norm(h);
  minutes.innerHTML = norm(m);
  seconds.innerHTML = norm(s);
}

updateCountdown();
setInterval(updateCountdown, 1000);
