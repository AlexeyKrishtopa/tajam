const header = document.querySelector('.header')
const anchors = document.querySelectorAll('.header__nav-link')

const handleScroll = () => {
  document.addEventListener('scroll', () => {
    const scroll = window.scrollY
    if (scroll === 0) {
      header.classList.remove('_is_scrolling')
    } else {
      header.classList.add('_is_scrolling')
    }
  })

  // eslint-disable-next-line no-restricted-syntax
  for (const anchor of anchors) {
    anchor.addEventListener('click', (event) => {
      event.preventDefault()
      const blockId = anchor.getAttribute('href')
      window.scrollTo({
        top: +document.querySelector(`${blockId}`).offsetTop - 70,
        behavior: 'smooth',
      })
    })
  }
}

export default handleScroll
