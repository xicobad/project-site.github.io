document.addEventListener('DOMContentLoaded', function () {
   const menuButton = document.querySelector('.menu-img');
   const menu = document.querySelector('.menu');
   const closeButton = document.querySelector('.close-menu');

   menuButton.addEventListener('click', function (e) {
      e.preventDefault()
      menu.classList.toggle('open');
   });

   closeButton.addEventListener('click', function () {
      menu.classList.remove('open');
   });
});