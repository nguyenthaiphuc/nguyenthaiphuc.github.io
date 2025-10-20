document.querySelector('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const status = document.querySelector('#status');
  status.textContent = "Cảm ơn bạn! Tin nhắn của bạn đã được gửi (demo).";
  status.style.color = "green";
  e.target.reset();
});
