const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list ");
const header = document.querySelector("header");
const body = document.querySelector("body");

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

//H2 effect
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

//NAV MENU JS
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
   body.classList.toggle("active");
  //header.style.backgroundColor = "#B2A799";
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("active");
  //header.style.backgroundColor = "white !important";
}))






//Parallax effect for mobile images
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var parallaxElements = document.querySelectorAll('.project1-mobile, .project2-mobile, .project3-mobile');
  for (var i = 0; i < parallaxElements.length; i++) {
    var parallaxElement = parallaxElements[i];
    var parallaxSpeed = parallaxElement.getAttribute('data-parallax-speed');
    var elementTop = parallaxElement.getBoundingClientRect().top;
    var elementHeight = parallaxElement.offsetHeight;
    var viewportHeight = window.innerHeight;
    var scrollTrigger;

    // Check if screen width is at least 1024 pixels
    if (window.matchMedia("(min-width: 1024px)").matches) {
      if (i == 0) {
        scrollTrigger = elementTop + elementHeight + (viewportHeight * 0.1);
      } else if (i == 1) {
        scrollTrigger = elementTop + elementHeight + (viewportHeight * 1.3);
      } else {
        scrollTrigger = elementTop + elementHeight + (viewportHeight * 2.2);
      }
    } else {
      if (i == 0) {
        scrollTrigger = elementTop + elementHeight + (viewportHeight * 0.05);
      } else if (i == 1) {
        scrollTrigger = elementTop + elementHeight + (viewportHeight * 1);
      } else {
        scrollTrigger = elementTop + elementHeight + (viewportHeight * 1.5);
      }
    }

    if (scrollTop > scrollTrigger) {
      parallaxElement.style.transform = 'translateY(' + ((scrollTop - scrollTrigger) * parallaxSpeed) + 'px)';
    }
  }
})