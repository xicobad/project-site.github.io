document.addEventListener('DOMContentLoaded', function () {
   let menuButton = document.querySelector('.menu-img');
   let menu = document.querySelector('.menu');
   let closeButton = document.querySelector('.close-menu');

   menuButton.addEventListener('click', function () {
      menu.classList.toggle('open');
   });

   closeButton.addEventListener('click', function () {
      menu.classList.remove('open');
   });
});


document.addEventListener('DOMContentLoaded', function () {
   let readMoreBtn = document.getElementById('readMoreBtn');
   let hiddenSlides = document.querySelectorAll('.swiper-slide.hidden');
   let readMoreImage = readMoreBtn.querySelector('img');

   readMoreBtn.addEventListener('click', function () {
      if (readMoreBtn.classList.contains('expanded')) {
         hiddenSlides.forEach(slide => slide.classList.add('hidden'));
         readMoreBtn.querySelector('span').textContent = 'Читать далее';
         readMoreBtn.classList.remove('expanded');
         readMoreImage.src = '/img/readmore/icon.svg';
      } else {
         hiddenSlides.forEach(slide => slide.classList.remove('hidden'));
         readMoreBtn.querySelector('span').textContent = 'Спрятать';
         readMoreBtn.classList.add('expanded');
         readMoreImage.src = '/img/readmore/expand.svg';
      }
   });
});