const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

menuToggle?.addEventListener('click', () => {
  menuOverlay.classList.add('active');
});

menuClose?.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
});
