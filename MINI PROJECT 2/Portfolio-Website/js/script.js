document.addEventListener("DOMContentLoaded", function() {
    // Form validation
    const form = document.querySelector("#contactForm");
    form.addEventListener("submit", function(event) {
        let valid = true;
        const fields = ["name", "email", "subject", "message"];
        fields.forEach(function(field) {
            const input = document.getElementById(field);
            if (input.value.trim() === "") {
                valid = false;
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
            }
        });

        const email = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            valid = false;
            email.classList.add("is-invalid");
        } else {
            email.classList.remove("is-invalid");
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    // Back to top and bottom buttons
    const backToTopButton = document.getElementById("backToTop");
    const scrollToBottomButton = document.getElementById("scrollToBottom");

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    scrollToBottomButton.addEventListener("click", function() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Responsive menu toggle
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggler.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });
});
