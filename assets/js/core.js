document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const overlay = document.getElementById('menuOverlay');
  const closeBtn = document.getElementById('menuClose');
  const menuBox = overlay?.querySelector('.menu-box');

  if (!toggleBtn || !overlay || !menuBox) return;

  // MỞ MENU
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // ĐÓNG MENU
  const closeMenu = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  // CLICK OVERLAY → ĐÓNG
  overlay.addEventListener('click', closeMenu);

  // CLICK NÚT X → ĐÓNG
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  // CLICK TRONG MENU → KHÔNG ĐÓNG
  menuBox.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
