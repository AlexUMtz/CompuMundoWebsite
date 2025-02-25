import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-brands', {
    modules: [Autoplay],
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    speed: 3000,
    autoplay: { delay: 0, disableOnInteraction: false },
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    allowTouchMove: false,
    breakpoints: {
      // Cuando el viewport es de al menos 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // Cuando el viewport es de al menos 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // Cuando el viewport es de al menos 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  console.log('SwiperBrands');
});
