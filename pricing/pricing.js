// Nhấn mạnh gói phổ biến khi load
const highlightCard = document.querySelector('.price-card.highlight');

if (highlightCard) {
  highlightCard.style.transform = 'scale(1.03)';
  setTimeout(() => {
    highlightCard.style.transform = 'scale(1)';
  }, 600);
}
