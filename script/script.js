const menuToggle = document.querySelector ('.menu-toggle input');
const nav = document.querySelector ('nav .daftar');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});