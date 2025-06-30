
const openIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-menu-icon');

  openIcon.addEventListener('click', function () {
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  });

  closeIcon.addEventListener('click', function () {
    closeIcon.classList.add('hidden');
    openIcon.classList.remove('hidden');
  });