document.addEventListener('DOMContentLoaded', () => {
  const angryMom = document.getElementById('angryMom');
  const overlay = document.getElementById('overlay');

  // Нажатие на «Мать злая»
  angryMom.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  // Нажатие на чёрный экран — закрыть
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
});