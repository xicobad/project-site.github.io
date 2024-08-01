if (window.innerWidth < 768 || window.innerWidth > 1119) {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
}