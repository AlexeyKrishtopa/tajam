import 'lightgallery/css/lightgallery-bundle.min.css'
import './styles/main.scss'
import './index.html'
import './js/sliders/home-slider'
import './js/sliders/about-slider'
import handleScroll from './js/header/handle-scroll'
import handelBurger from './js/burger/handle-burger'
import './js/gallery/our-works-gallery'

window.onload = () => {
  handleScroll()
  handelBurger()
}
