document.getElementById('year').textContent = new Date().getFullYear();
const starsContainer = document.createElement('div');
starsContainer.id = 'stars';
document.body.prepend(starsContainer);
for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 5 + 's';
  star.style.animationDuration = (Math.random() * 4 + 3) + 's';
  starsContainer.appendChild(star);
}