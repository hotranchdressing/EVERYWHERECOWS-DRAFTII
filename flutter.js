document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery img');

  images.forEach(img => {
    let paused = false;

    // Pause on hover
    img.addEventListener('mouseenter', () => paused = true);
    img.addEventListener('mouseleave', () => paused = false);

    function flutter() {
      if (!paused) {
        // Random small movement (increase for visibility)
        const x = (Math.random() - 0.5) * 10;  // -5px to +5px
        const y = (Math.random() - 0.5) * 10;  // -5px to +5px
        const rotate = (Math.random() - 0.5) * 5; // -2.5deg to +2.5deg

        img.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      }

      // Call again after random interval
      const interval = 100 + Math.random() * 200; // 100–300ms
      setTimeout(flutter, interval);
    }

    flutter();
  });
});
