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


let formSubmitted = false;

function submitForm(event) {
  // Check if the form has already been submitted
  if (formSubmitted) {
    event.preventDefault();
    return;
  }

  event.preventDefault();
  const form = event.target;
  const button = document.getElementById('submitButton');
  const statusMessage = document.getElementById('statusMessage');

  // Disable the button to prevent multiple submissions
  button.disabled = true;
  button.innerText = 'Sending...';

  // Perform form submission (you can add your form submission code here)
  // For demonstration purposes, we'll use a delay to simulate the submission process.
  setTimeout(function () {
    // Update button and status message after the form is submitted (simulated here with a delay)
    button.innerText = 'Message sent';
    statusMessage.innerText = 'Thank you! Your message has been sent.';
    formSubmitted = true;

    // Clear the status message and re-enable the button after 3 seconds
    setTimeout(function () {
      statusMessage.innerText = '';
      button.disabled = false;
      button.innerText = 'SEND';
      formSubmitted = false;
    }, 3000); // 3 seconds (adjust this time as needed)
  }, 2000); // 2 seconds (adjust this time to match the actual submission process)
}



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