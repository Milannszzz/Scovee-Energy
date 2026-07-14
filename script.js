// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===========================
// NAVBAR SHADOW
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.18)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===========================
// SCROLL REVEAL
// ===========================

const reveals = document.querySelectorAll(".card, .about-text, .cta, .contact-box");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .15

});

reveals.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = "all .8s ease";

    observer.observe(item);

});

// ===========================
// HERO FADE IN
// ===========================

window.addEventListener("load", () => {

    const heroText = document.querySelector(".hero-text");

    heroText.style.opacity = "0";

    heroText.style.transform = "translateY(40px)";

    heroText.style.transition = "all 1s ease";

    setTimeout(() => {

        heroText.style.opacity = "1";

        heroText.style.transform = "translateY(0)";

    }, 300);

});

// ===========================
// BUTTON HOVER RIPPLE
// ===========================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// ===========================
// ACTIVE NAV LINK
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
