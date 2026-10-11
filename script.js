/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

  const isOpen = mobileMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);

});


/* Close mobile menu when link is clicked */

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

  });

});


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header = document.getElementById("header");

function updateHeader() {

  if (window.scrollY > 40) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
  ".section-heading, .service-item, .project, .process-item, .testimonial, .contact-inner"
);

revealElements.forEach((element) => {

  element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =====================================================
   SMOOTH ANCHOR
===================================================== */

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =====================================================
   REDUCED MOTION
===================================================== */

const prefersReducedMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;


if (prefersReducedMotion) {

  document.documentElement.style.scrollBehavior = "auto";

  revealElements.forEach((element) => {

    element.classList.add("visible");

  });

}