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
