
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const overlay = document.getElementById('menuOverlay');
  const closeBtn = document.getElementById('menuClose');

  if (!toggleBtn || !overlay) return;

  // mở menu
  toggleBtn.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  // đóng menu khi click overlay
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });

  // đóng menu bằng nút X
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }
});
