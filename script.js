
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs';

const menuBar = document.querySelector(".navbar-menu");
const navLinks = document.querySelector("#nav-links");
const nav = document.querySelector("nav");
const contactBtn = document.getElementById("sendBtn");
const text = document.getElementById("inner-text");


menuBar.addEventListener("click", ()=>{
  navLinks.classList.toggle("active");
  menuBar.classList.toggle('active');

});

window.addEventListener("scroll" , ()=>{
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    
  }
})


const swipper = new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }

});



