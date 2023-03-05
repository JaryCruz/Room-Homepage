const btnPrev = document.querySelector('[data-btn-prev]')
const btnNext = document.querySelector('[data-btn-next]')
const navElement = document.querySelector('[data-nav]')
let imgLength = 3
let currentImg = 1

btnPrev.addEventListener('click', () => {
  if (currentImg === 1) {
    currentImg = imgLength
  } else {
    currentImg--
  }

  navElement.style.backgroundImage = `url(../images/desktop-image-hero-${currentImg}.jpg)` 
})

btnNext.addEventListener('click', () => {
  if (currentImg === imgLength) {
    currentImg = 1
  } else {
    currentImg++
  }

  navElement.style.backgroundImage = `url(../images/desktop-image-hero-${currentImg}.jpg)`
})