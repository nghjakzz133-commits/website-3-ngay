// fade-in khi scroll
const items = document.querySelectorAll('.commit-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

items.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = 'translateY(30px)';
  item.style.transition = '0.5s ease';
  observer.observe(item);
});

document.addEventListener('scroll', () => {
  items.forEach(item => {
    if (item.classList.contains('show')) {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }
  });
});
