const headerBurger = document.querySelector('.header__burger')
const headerNavigation = document.querySelector('.header__nav')
const headerNavigationLinks = document.querySelectorAll('.header__nav-link')

const handelBurger = () => {
  headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active')
    headerNavigation.classList.toggle('active')
    document.body.classList.toggle('lock')
  })
  headerNavigationLinks.forEach((element) => {
    element.addEventListener('click', () => {
      headerBurger.classList.toggle('active')
      headerNavigation.classList.toggle('active')
      document.body.classList.toggle('lock')
    })
  })
}

export default handelBurger
