const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const menuMenu = document.getElementById('menu-items');

AOS.init();


menuOpen.addEventListener('click', () => {
  menuMenu.classList.add('open'); 
});

menuClose.addEventListener('click', () => {
  menuMenu.classList.remove('open');
});
