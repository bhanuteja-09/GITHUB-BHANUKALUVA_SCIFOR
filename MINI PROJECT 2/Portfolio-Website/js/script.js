document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");

    // Smooth scrolling to top when back to top button is clicked
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Show or hide back to top button based on scroll position
    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Smooth scrolling for navigation links
    // const navbarLinks = document.querySelectorAll('.navbar-nav a');
    // navbarLinks.forEach(navbarLink => {
    //     navbarLink.addEventListener('click', function(event) {
    //         event.preventDefault();
    //         const hash = this.hash;
    //         const offset = document.querySelector('.navbar').offsetHeight;

    //         window.scrollTo({
    //             top: document.querySelector(hash).offsetTop - offset,
    //             behavior: 'smooth'
    //         });
    //     });
    // });

    // Form validation
    // const form = document.querySelector("#contactForm");
    // form.addEventListener("submit", function(event) {
    //     let valid = true;
    //     const fields = ["name", "email", "subject", "message"];
    //     fields.forEach(function(field) {
    //         const input = document.getElementById(field);
    //         if (input.value.trim() === "") {
    //             valid = false;
    //             input.classList.add("is-invalid");
    //         } else {
    //             input.classList.remove("is-invalid");
    //         }
    //     });

    //     const email = document.getElementById("email");
    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailPattern.test(email.value.trim())) {
    //         valid = false;
    //         email.classList.add("is-invalid");
    //     } else {
    //         email.classList.remove("is-invalid");
    //     }

    //     if (!valid) {
    //         event.preventDefault();
    //     }
    // });

    // Responsive menu toggle
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggler.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });

    // Animate navigation items on load
    function animateNav() {
        const navItems = document.querySelectorAll('.navbar-nav li');
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 0;
                setTimeout(() => {
                    item.style.opacity = 1;
                }, 300);
            }, index * 100);
        });
    }

    animateNav(); // Trigger animation on initial load
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
for (tablink of tablinks) {
tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents) {
tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}

// Function to validate the contact form
function validateForm() {
    // Selecting form elements by their IDs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Selecting error message elements
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');

    // Resetting previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Simple validation checks
    if (name.trim() === '') {
        nameError.textContent = 'Please enter your name';
        return false;
    }
    
    if (email.trim() === '') {
        emailError.textContent = 'Please enter your email';
        return false;
    }

    // Email validation with regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }

    if (message.trim() === '') {
        messageError.textContent = 'Please enter your message';
        return false;
    }

    // If all validations pass, the form will submit
    return true;
}

