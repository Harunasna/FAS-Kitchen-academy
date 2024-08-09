$(document).ready(function() {
    // owl carousel script
    $('.carousel').owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeOut: 1000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          300:{
              items: 2,
              nav: false
          },
          400:{
            items: 3,
            nav: false
          },
          600:{
          items: 4,
          nav: false
          },
          800:{
              items: 5,
              nav: false
          }
      }
  });


      // owl carousel script
      $('.carousel-2').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
          0:{
            items: 1,
            nav: false
          },
            500:{
              items: 1,
              nav: false
            },
            1000:{
                items: 2,
                nav: false
            }
        }
    });


  // Typing text animation script
const typed = new Typed(".typing", {
  strings: [
    "Catering School",
    "Catering School",
    "Events Planner",
    "Birthday Parties",
    "And More..."
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});




// button scroll-to-login/sign behaviour;
const scrollToTopBtn = document.getElementById("scroll-to-top");
const header = document.querySelector("home_container");

function handleScroll() {
  if ((document.documentElement.scrollTop || document.body.scrollTop) > 500) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  header.style.transition = "all 0.3s ease";
  header.style.transform = "translateY(-100px)";
  setTimeout(() => {
    header.style.transform = "translateY(0)";
  }, 300);
}

scrollToTopBtn.addEventListener("click", scrollToTop);
window.addEventListener("scroll", handleScroll);




});
// background slide show behaviour;
const slides = document.querySelectorAll('.mySlides');
let currentSlide = 0;

function changeSlide(direction) {
slides[currentSlide].style.display = "none";
currentSlide += direction;
if (currentSlide < 0) {
    currentSlide = slides.length - 1;
} else if (currentSlide >= slides.length) {
    currentSlide = 0;
}
slides[currentSlide].style.display = "block";
}

setInterval(() => {
changeSlide(1);
}, 5000);

changeSlide(0);











// FAS story image behaviour;
const slideshow = document.querySelector('.row_1');
const images = slideshow.querySelectorAll('img');
let currentImage = 0;

setInterval(() => {
  images[currentImage].classList.remove('story_pic');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('story_pic');
}, 3000);
























// hambuger menur behaviour;
const hamburgerMenu = document.querySelector('.hamburger-menu');
const headerBar = document.querySelector('.navbar');
const homeInfo = document.querySelector('.home_info');

hamburgerMenu.addEventListener('click', () => {
hamburgerMenu.classList.toggle('open');
headerBar.classList.toggle('open');
homeInfo.classList.toggle('open');

});
// header menur behaviour;
const homeHeader = document.querySelector('.home_header');
const navIcon = document.querySelector('.nav_icon');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    homeHeader.classList.add('sticky');
    navIcon.classList.add('sticky');
  } else {
    homeHeader.classList.remove('sticky');
    navIcon.classList.remove('sticky');
  }
});

// Get the menu list and its children
const menuList = document.getElementById("menuList");
const menuItems = Array.from(menuList.children);
let currentItem = 0;

/**
 * Slide the menu in the specified direction.
 * @param {50px} direction - The direction to slide the menu (1 for next, -1 for previous)
 */
function slideMenu(direction) {
  const menuWidth = menuList.offsetWidth;
  const itemWidth = menuItems[0].offsetWidth;
  const newPosition = (currentItem + direction + menuItems.length) % menuItems.length;

  // Update the transform property with the new position
  menuList.style.transform = `translateX(${newPosition * -itemWidth}px)`;
  // Update the current item index
  currentItem = newPosition;
}












// haeder text behaviour;
function changeStyle() {
  const textElement = document.getElementsByClassName('text_nav');
  textElement.classList.toggle('changed');
}

