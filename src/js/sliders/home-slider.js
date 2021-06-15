import $ from 'jquery'
import 'slick-carousel'

$('.intro__slider').slick({
  arrows: false,
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
