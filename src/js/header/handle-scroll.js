const header = document.querySelector('.header')
const sections = document.querySelectorAll('section')
const menuLinks = document.querySelectorAll('.header__nav-link')
const makeActive = (link) => menuLinks[link].classList.add('active')
const removeActive = (link) => menuLinks[link].classList.remove('active')
const removeAllActive = () =>
  [...Array(sections.length).keys()].forEach((link) => removeActive(link))
const sectionMargin = 200
let currentActive = 0

const handleScroll = () => {
  document.addEventListener('scroll', () => {
    const scroll = window.scrollY
    if (scroll === 0) {
      header.classList.remove('_is_scrolling')
    } else {
      header.classList.add('_is_scrolling')
    }

    const current =
      sections.length -
      [...sections]
        .reverse()
        .findIndex(
          (section) => window.scrollY >= section.offsetTop - sectionMargin
        ) -
      1
    if (current !== currentActive) {
      removeAllActive()
      currentActive = current
      makeActive(current)
    }
  })
}

export default handleScroll
