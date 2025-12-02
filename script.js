"use strict";

// Biến global
var lastY = 0;
const header = document.getElementById("header");

document.addEventListener("DOMContentLoaded", function () {
  fetch("../header.html")
    .then((response) => response.text())
    .then((data) => {
      if (header) {
        header.innerHTML = data;
      }

      const menu = document.getElementById("menu");
      const headerElements = document.getElementById("headerElements");

      if (menu && headerElements) {
        menu.addEventListener("click", function () {
          if (headerElements.classList.contains("headerElementsActive")) {
            headerElements.classList.remove("headerElementsActive");
            headerElements.className = "headerElements";
            menu.innerHTML = "menu"; // Icon 3 gạch (Material Icon text)
          } else {
            headerElements.classList.add("headerElementsActive");
            menu.innerHTML = "close"; // Icon dấu X
          }
        });
      }

      highlightCurrentPage();
    })
    .catch((err) => console.error("Lỗi tải header:", err));
});

function highlightCurrentPage() {
  const pathParts = window.location.pathname.split("/");
  const pageName = pathParts[1] ? "../" + pathParts[1] : "../index.html";

  const headerLinks = document.querySelectorAll(".headerElements a");

  headerLinks.forEach((link) => {
    if (link.getAttribute("href") === pageName) {
      link.style.color = "var(--brown-theme)";
    }
  });
}

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
