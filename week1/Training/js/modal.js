const openBtn = document.getElementById('btn');
const closeBtn = document.getElementById('modalBtn');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', function () {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});
