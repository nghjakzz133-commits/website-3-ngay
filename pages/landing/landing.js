/* =========================
   LANDING.JS – HOME ONLY
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ===== SMOOTH SCROLL ===== */
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* ===== FUTURE EFFECTS ===== */
  // animation hero
  // pricing highlight
  // demo filter
  // (để sau, chưa cần làm gì thêm)

});
