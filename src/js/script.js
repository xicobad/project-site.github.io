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

  if (window.innerWidth >= 1120) {
    menu.classList.add('open');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let readMoreBtn = document.getElementById('readMoreBtn');
  let hiddenSlides = document.querySelectorAll('.swiper-slide.hidden');
  let readMoreImage = readMoreBtn.querySelector('img');

  readMoreBtn.addEventListener('click', function () {
    if (readMoreBtn.classList.contains('expanded')) {
      hiddenSlides.forEach((slide) => slide.classList.add('hidden'));
      readMoreBtn.querySelector('span').textContent = 'Читать далее';
      readMoreBtn.classList.remove('expanded');
      readMoreImage.src = '/images/readmore/icon.svg';
    } else {
      hiddenSlides.forEach((slide) => slide.classList.remove('hidden'));
      readMoreBtn.querySelector('span').textContent = 'Спрятать';
      readMoreBtn.classList.add('expanded');
      readMoreImage.src = '/images/readmore/expand.svg';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const showMoreBtn = document.getElementById('showMoreBtn2');
  const hiddenItems = document.querySelectorAll('.repair-types__item.hidden');

  showMoreBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (showMoreBtn.classList.contains('repair-types__more--open')) {
      hiddenItems.forEach(function (item) {
        item.classList.add('hidden');
      });
      showMoreBtn.querySelector('span').textContent = 'Показать все';
      showMoreBtn.classList.remove('repair-types__more--open');
    } else {
      hiddenItems.forEach(function (item) {
        item.classList.remove('hidden');
      });
      showMoreBtn.querySelector('span').textContent = 'Скрыть';
      showMoreBtn.classList.add('repair-types__more--open');
    }
  });
});
