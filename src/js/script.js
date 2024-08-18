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

document.addEventListener('DOMContentLoaded', function () {
  const feedbackModal = document.getElementById('feedbackModal');
  const openModalButton = document.querySelector('.checkstatus__link');
  const closeModalButton = document.getElementById('feedbackModalClose');

  openModalButton.addEventListener('click', function (event) {
    event.preventDefault();
    feedbackModal.classList.add('feedback-modal--show');
  });

  closeModalButton.addEventListener('click', function () {
    feedbackModal.classList.remove('feedback-modal--show');
  });

  // Закрытие модального окна при клике вне его
  window.addEventListener('click', function (event) {
    if (event.target === feedbackModal) {
      feedbackModal.classList.remove('feedback-modal--show');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const feedbackModal = document.getElementById('feedbackModal');
  const feedbackOverlay = document.createElement('div');
  feedbackOverlay.classList.add('feedback-modal-overlay');
  document.body.appendChild(feedbackOverlay);

  const openModalButton = document.querySelector('.checkstatus__link');
  const closeModalButton = document.getElementById('feedbackModalClose');
  const content = document.querySelector('.content');

  openModalButton.addEventListener('click', function () {
    feedbackModal.classList.add('feedback-modal--show');
    feedbackOverlay.classList.add('feedback-modal-overlay--show');
    content.classList.add('content-blur');
  });

  closeModalButton.addEventListener('click', function () {
    feedbackModal.classList.remove('feedback-modal--show');
    feedbackOverlay.classList.remove('feedback-modal-overlay--show');
    content.classList.remove('content-blur');
  });

  feedbackOverlay.addEventListener('click', function () {
    feedbackModal.classList.remove('feedback-modal--show');
    feedbackOverlay.classList.remove('feedback-modal-overlay--show');
    content.classList.remove('content-blur');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const callModal = document.getElementById('callModal');
  const openCallModalButton = document.querySelector('.repair__link'); // Кнопка "Оставить заявку"
  const closeCallModalButton = document.getElementById('callModalClose');
  const content = document.querySelector('.content');

  openCallModalButton.addEventListener('click', function () {
    callModal.classList.add('call-modal--show');
    content.classList.add('content-blur');
  });

  closeCallModalButton.addEventListener('click', function () {
    callModal.classList.remove('call-modal--show');
    content.classList.remove('content-blur');
  });

  callModal.addEventListener('click', function (event) {
    if (event.target === callModal) {
      callModal.classList.remove('call-modal--show');
      content.classList.remove('content-blur');
    }
  });
});
