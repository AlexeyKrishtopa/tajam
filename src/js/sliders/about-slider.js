import $ from 'jquery'
import 'slick-carousel'

$('.about__slider').slick({
  arrows: true,
  dots: true,
  draggable: true,
  // adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 400,
  easing: 'ease',
  // infinite: true,
  // initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2500,
  centerMode: true,
  responsive: [{ breakpoint: 768, settings: { draggable: true } }],
})
