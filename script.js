"use strict";

const menu = document.getElementById("menu");
const headerElements = document.getElementById("headerElements");
const header = document.getElementById("header");

var lastY = 0;

document.addEventListener("DOMContentLoaded", function () {
  fetch("../header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // (Tuỳ chọn) Highlight mục đang active
      highlightCurrentPage();
    });
});

function highlightCurrentPage() {
  const currentPath = "../" + window.location.pathname.split("/")[1];
  const headerLinks = document.querySelectorAll(".headerElements a");

  headerLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.style.color = "var(--brown-theme)"; // Ví dụ: đổi màu chữ mục đang chọn
    }
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var curPos = window.scrollY;
  if (curPos > 20) {
    lastY = curPos;
    header.className = "header headerActive";
  } else {
    lastY = curPos;
    header.className = "header";
  }
}

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
