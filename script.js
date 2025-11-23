"use strict";

const menu = document.getElementById("menu");
const navElements = document.getElementById("navElements");
const navBar = document.getElementById("navBar");

var lastY = 0;

menu.addEventListener("click", function(){
    if(navElements.className === "navElements"){
        navElements.className = "navElements navElementsActive";
        menu.innerHTML = "close";
    } else {
        navElements.className = "navElements";
        menu.innerHTML = "menu";
    }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var curPos = window.scrollY;
    if (curPos > 20) {
        lastY = curPos;
        navBar.className = "navBar navBarActive";
    } else {
        lastY = curPos;
        navBar.className = "navBar";
    }
}

const date = "30 Sep, 2025 23:59:59"
const countdownDate = new Date(date).getTime();
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {
    var now = new Date().getTime();

    var distance = countdownDate - now;

    var d = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
    var h = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var m = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var s = Math.max(0, Math.floor((distance % (1000 * 60) / 1000)));

    function norm(a){
        if(a < 10){
            return '0' + a;
        } else {
            return '' + a;
        }
    }

    days.innerHTML = norm(d);
    hours.innerHTML = norm(h);
    minutes.innerHTML = norm(m);
    seconds.innerHTML = norm(s)
}

updateCountdown();
setInterval(updateCountdown, 1000);