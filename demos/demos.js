// Chặn click các demo "sắp có"
document.querySelectorAll(".coming-soon").forEach(card => {
  card.addEventListener("click", e => {
    e.preventDefault();
    alert("Demo này đang hoàn thiện, liên hệ để xem trước 😉");
  });
});
