/* =========================
   CORE.JS – GLOBAL
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
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

  // click ra ngoài để đóng
  if (menuOverlay) {
    menuOverlay.addEventListener("click", (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove("active");
      }
    });
  }
});
