document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     COMING SOON HANDLER
  ========================= */
  const comingSoonCards = document.querySelectorAll(".card.coming-soon");

  comingSoonCards.forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      showToast("Mẫu này đang được hoàn thiện, liên hệ Zalo để xem trước 👋");
    });
  });

  /* =========================
     RIPPLE CLICK EFFECT
  ========================= */
  const cards = document.querySelectorAll(".card:not(.coming-soon)");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.add("clicked");
      setTimeout(() => card.classList.remove("clicked"), 200);
    });
  });

  /* =========================
     TOAST FUNCTION
  ========================= */
  function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("show");
    }, 10);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 2600);
  }

  /* =========================
     TOAST STYLE (JS inject)
  ========================= */
  const style = document.createElement("style");
  style.innerHTML = `
    .toast {
      position: fixed;
      left: 50%;
      bottom: 28px;
      transform: translateX(-50%) translateY(20px);
      background: #fff;
      color: #000;
      padding: 14px 22px;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 600;
      opacity: 0;
      transition: all .35s ease;
      box-shadow: 0 12px 30px rgba(0,0,0,.35);
      z-index: 9999;
      pointer-events: none;
      white-space: nowrap;
    }

    .toast.show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    .card.clicked {
      transform: scale(0.98);
    }
  `;
  document.head.appendChild(style);
});
