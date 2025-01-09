import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-products', {
    modules: [Autoplay],
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    autoplay: { delay: 3000, disableOnInteraction: false },
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
  });
});
