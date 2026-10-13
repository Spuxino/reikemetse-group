/* =========================================================
   REIKEMETSE GROUP
   WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


/* Close mobile menu when link is clicked */

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".desktop-nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                document.querySelector(
                    ".site-header"
                ).offsetHeight;

            const targetPosition =
                target.offsetTop - headerHeight;

            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .testimonial-card, .project-card, .about-content, .why-content"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("revealed");

            observer.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}