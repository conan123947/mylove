const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Hiệu ứng nút "Không" chạy trốn
noBtn.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Khi bấm vào nút "Tha lỗi"
yesBtn.addEventListener('click', () => {
    // Hiệu ứng trái tim bay
    var count = 200;
    var defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
        shapes: ['heart'], // Chỉ tạo hình trái tim
        colors: ['#ff0000', '#ff69b4', '#ff1493']
      }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    alert("Cảm ơn bé yêu đã tha lỗi cho anh! Anh hứa sẽ không làm em buồn nữa ❤️");
});