document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleDemo");
  const moreDemos = document.getElementById("moreDemos");

  if (!btn || !moreDemos) return;

  btn.addEventListener("click", () => {
    const isOpen = moreDemos.style.display === "grid";

    moreDemos.style.display = isOpen ? "none" : "grid";
    btn.textContent = isOpen ? "xem thêm" : "thu gọn";
  });
});
 // mobile menu
const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");

if (menuToggle && menuOverlay) {
  menuToggle.addEventListener("click", () => {
    menuOverlay.classList.add("active");
  });
}

if (menuClose) {
  menuClose.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
  });
}

