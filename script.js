const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Xử lý nút "Không" chạy trốn (Sửa lỗi không nhảy)
noBtn.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    noBtn.style.position = 'fixed'; // Dùng fixed để nhảy toàn màn hình
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Hiệu ứng khi bấm vào nút "Tha lỗi"
yesBtn.addEventListener('click', () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      // Bắn trái tim từ 2 bên màn hình
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, shapes: ['heart'], colors: ['#ff0000', '#ff69b4'] });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, shapes: ['heart'], colors: ['#ff0000', '#ff69b4'] });
    }, 250);

    alert("Cảm ơn bé yêu đã tha lỗi cho anh! Anh hứa sẽ không làm em buồn nữa ❤️");
});
