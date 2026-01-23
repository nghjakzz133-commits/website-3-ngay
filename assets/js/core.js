/* =========================
   CORE.JS – GLOBAL SCRIPT
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ===== MOBILE MENU ===== */
  const menuToggle = document.getElementById("menuToggle");
  const menuOverlay = document.getElementById("menuOverlay");
  const menuClose = document.getElementById("menuClose");

  if (menuToggle && menuOverlay) {
    menuToggle.addEventListener("click", () => {
      menuOverlay.classList.add("active");
    });
  }

  if (menuClose && menuOverlay) {
    menuClose.addEventListener("click", () => {
      menuOverlay.classList.remove("active");
    });
  }

  // click ra ngoài để đóng menu
  if (menuOverlay) {
    menuOverlay.addEventListener("click", (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove("active");
      }
    });
  }

  /* ===== HEADER SCROLL EFFECT (OPTIONAL) ===== */
  const header = document.querySelector("header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  /* ===== SAFE GUARD ===== */
  // core.js KHÔNG được phép query element chỉ tồn tại ở 1 trang
  // nếu thêm code mới → luôn check if (element)
});
