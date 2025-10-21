// ======= COW RADIAL PARTS =======
const centralCow = document.getElementById('central-cow');
const wrappers = [
  document.getElementById('wrapper-hide'),
  document.getElementById('wrapper-muscle'),
  document.getElementById('wrapper-skeleton'),
  document.getElementById('wrapper-viscera'),
  document.getElementById('wrapper-fat')
];

// Radial spread
const radius = 200; // distance from center
const angleStep = (2 * Math.PI) / wrappers.length; // evenly spaced angles

centralCow.addEventListener('click', () => {
  centralCow.style.opacity = 0; // hide central cow

  wrappers.forEach((wrapper, i) => {
    const angle = i * angleStep - Math.PI / 2; // start top center
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    wrapper.style.opacity = 1;
    wrapper.style.pointerEvents = 'auto';
    wrapper.style.transform = `translate(${x}px, ${y}px)`;
  });
});
