document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const overlay = document.getElementById('menuOverlay');
  const closeBtn = document.getElementById('menuClose');
  const menuBox = overlay?.querySelector('.menu-box');

  if (!toggleBtn || !overlay || !menuBox) return;

  // mở menu
  toggleBtn.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  // chặn click trong menu box (QUAN TRỌNG)
  menuBox.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // đóng menu khi click overlay
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  // đóng menu bằng nút X
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // ⭐ DÒNG QUAN TRỌNG
      overlay.classList.remove('active');
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('menuOverlay');
  const close = document.getElementById('menuClose');
  const box = overlay.querySelector('.menu-box');

  toggle.addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', (e) => {
    e.stopPropagation();
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  box.addEventListener('click', e => e.stopPropagation());
});

