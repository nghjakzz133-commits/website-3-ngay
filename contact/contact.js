const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !phone) {
      alert('Vui lòng nhập tên và số điện thoại');
      return;
    }

    alert('Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm.');
    form.reset();
  });
}
