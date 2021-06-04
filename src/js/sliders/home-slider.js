import $ from 'jquery'
import 'slick-carousel'

$('.header__slider').slick({
  arrows: false,
  dots: true,
  // adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  easing: 'ease',
  // infinite: true,
  // initialSlide: 0,
  centerMode: true,
  // responsive: [
  //  { breakpoint: 768, settings: { slidesToShow: 2 } },
  //  { breakpoint: 576, settings: { slidesToShow: 2 } },
  //  { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  // ],
})
