document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = navMenu ? navMenu.querySelectorAll(".nav-link") : [];

  if (!navToggle || !navMenu) return;

  // Toggle menu
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navToggle.classList.toggle("active");
  });

  // Click link -> auto close menu (UX chuẩn agency)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      navToggle.classList.remove("active");
    });
  });

  // Click ngoài menu -> đóng
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove("show");
      navToggle.classList.remove("active");
    }
  });
});
