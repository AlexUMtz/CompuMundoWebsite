import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
    modules: [Autoplay, Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: { delay: 4000, disableOnInteraction: false },
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
  });
});
