"use strict";

// Biến global
var lastY = 0;
const header = document.getElementById("header");

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const headerElements = document.getElementById("headerElements");

  if (menu && headerElements) {
    menu.addEventListener("click", function () {
      if (headerElements.classList.contains("headerElementsActive")) {
        headerElements.classList.remove("headerElementsActive");
        headerElements.className = "headerElements";
        menu.innerHTML = "menu"; // Icon 3 gạch (Material Icon text)
        document.body.classList.remove("no-scroll");
      } else {
        headerElements.classList.add("headerElementsActive");
        menu.innerHTML = "close"; // Icon dấu X
        document.body.classList.add("no-scroll");
      }
    });
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (!header) return;

  var curPos = window.scrollY;
  if (curPos > 20) {
    lastY = curPos;
    if (!header.classList.contains("headerActive")) {
      header.classList.add("headerActive");
    }
  } else {
    lastY = curPos;
    header.classList.remove("headerActive");
  }
}

/* Đặt trong thẻ <script> hoặc file .js */

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  // Random ký tự tuyết hoặc dấu chấm tròn
  const chars = ["❄", "❅", "❆", "•"];
  snowflake.innerText = chars[Math.floor(Math.random() * chars.length)];

  // Random vị trí
  snowflake.style.left = Math.random() * 100 + "vw";

  // Random kích thước
  const size = Math.random() * 15 + 10; // 10px - 25px
  snowflake.style.fontSize = size + "px";

  // Random độ mờ
  snowflake.style.opacity = Math.random();

  // Random tốc độ rơi (3s - 8s)
  const duration = Math.random() * 5 + 3;
  snowflake.style.animationDuration = duration + "s";

  document.body.appendChild(snowflake);

  // Xóa sau khi rơi xong
  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}

// Tạo tuyết mỗi 100ms
setInterval(createSnowflake, 100);

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

  if (days) days.innerHTML = norm(d);
  if (hours) hours.innerHTML = norm(h);
  if (minutes) minutes.innerHTML = norm(m);
  if (seconds) seconds.innerHTML = norm(s);
}

updateCountdown();
setInterval(updateCountdown, 1000);
