/* =========================
   LANDING.JS – HOME PAGE
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ===== HERO BUTTON SCROLL ===== */
  const heroBtns = document.querySelectorAll("[data-scroll]");

  heroBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-scroll");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ===== SIMPLE FADE-IN ON SCROLL ===== */
  const revealEls = document.querySelectorAll(
    ".process-item, .why-item"
  );

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealEls.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run lần đầu
});
