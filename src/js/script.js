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
  document
    .getElementById('showMoreBtn2')
    .addEventListener('click', function () {
      const hiddenItems = document.querySelectorAll(
        '.repair-types__item.hidden',
      );
      hiddenItems.forEach(function (item) {
        item.classList.remove('hidden');
      });

      const moreButton = document.getElementById('showMoreBtn2');
      const moreText = moreButton.querySelector('span');
      const isOpen = moreButton.classList.contains('repair-types__more--open');

      if (isOpen) {
        moreText.textContent = 'Показать все';
        moreButton.classList.remove('repair-types__more--open');
      } else {
        moreText.textContent = 'Скрыть';
        moreButton.classList.add('repair-types__more--open');
      }
    });
});
