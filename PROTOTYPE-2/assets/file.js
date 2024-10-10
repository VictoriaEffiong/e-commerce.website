const menuIcon = document.querySelector('.menu-icon');
const navUI = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a'); // Assuming your nav links are <a> tags inside <li>
const images = document.querySelectorAll('.slider img');

let currentIndexx = 0;

// Toggle the visibility of the navbar when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navUI.classList.toggle('show');
});

// Hide the navbar if clicking anywhere outside the menu icon or the nav
document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !navUI.contains(event.target)) {
        navUI.classList.remove('show');
    }
});

// Close the navbar after clicking a link for small screens
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close the navbar after clicking a link (suitable for small screens)
        navUI.classList.remove('show');
        // Allow the link to navigate to the linked page
    });
});


// Slider functionality to switch images

let slideIndex = 0;
      let timeoutId = null;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      showSlides();

      function currentSlide(index) {
        slideIndex = index;
        showSlides();
      }

      function plusSlides(step) {
        if (step < 0) {
          slideIndex -= 2;

          if (slideIndex < 0) {
            slideIndex = slides.length - 1;
          }
        }

        showSlides();
      }

      function showSlides() {
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dots[i].classList.remove('active');
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add('active');
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
      }

