const wrapper = document.querySelector('.img-wrapper');
const img = document.querySelector('.parallax-img');

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateY = ((x / rect.width) - 0.5) * 20;
  const rotateX = ((y / rect.height) - 0.5) * -20;

  img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

wrapper.addEventListener('mouseleave', () => {
  img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});
