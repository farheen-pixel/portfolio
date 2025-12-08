/* ============================
   MOBILE NAV TOGGLE
=============================== */
const navBtn = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navBtn.classList.toggle("active");
});

/* ============================
   ACTIVE NAV LINK ON SCROLL
=============================== */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 150;

  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navItems.forEach((a) => a.classList.remove("active"));
      const current = document.querySelector(
        `.nav-links a[href*=${section.id}]`
      );
      if (current) current.classList.add("active");
    }
  });
});

/* ============================
   SMOOTH FADE-IN ON SCROLL
=============================== */
const revealElements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => observer.observe(el));

/* ============================
   CURSOR GLOW FOLLOW EFFECT
   (Soft Pastel Neon Aura)
=============================== */

const glowCursor = document.createElement("div");
glowCursor.className = "cursor-glow";
document.body.appendChild(glowCursor);

document.addEventListener("mousemove", (e) => {
  glowCursor.style.left = e.pageX + "px";
  glowCursor.style.top = e.pageY + "px";
});

/* ============================
   BUTTON NEON RIPPLE EFFECT
=============================== */

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function (e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 500);
  });
});

/* ============================
   HERO GLOW LAYER MOVEMENT
=============================== */

const glowLayers = document.querySelectorAll(".bg-glow");

document.addEventListener("mousemove", (e) => {
  glowLayers.forEach((layer, i) => {
    const speed = (i + 1) * 0.02;
    const x = (window.innerWidth - e.pageX * speed) / 80;
    const y = (window.innerHeight - e.pageY * speed) / 80;
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});

/* ============================
   CARD FLOAT ANIMATION
=============================== */
const cards = document.querySelectorAll(".project-card, .service-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `translateY(-6px) rotateX(${y / 25}deg) rotateY(${
      -x / 25
    }deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
  });
});

/* ============================
   CONTACT FORM – SIMPLE MESSAGE
=============================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been sent! I will get back to you soon 💙✨");
    contactForm.reset();
  });
}
