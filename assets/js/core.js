/* ==========================================
   CORE.JS – FOUNDATION SCRIPTS
========================================== */

/* ======================
   SMOOTH SCROLL
====================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

/* ======================
   HEADER SHADOW ON SCROLL
====================== */
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (!header) return;

  if (window.scrollY > 60) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});

/* ======================
   MOBILE MENU TOGGLE
====================== */
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

if (menuToggle && menuOverlay) {
  menuToggle.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

if (menuClose && menuOverlay) {
  menuClose.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
}

/* ======================
   CLOSE MENU WHEN CLICK LINK
====================== */
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (menuOverlay) {
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
