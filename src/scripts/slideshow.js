// Import HTML elements
const slides = document.querySelectorAll('.slide__container')
const previousButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')
const dots = document.querySelectorAll('.dot__container')

let slideIndex = 0

function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = 'none'))
  dots.forEach((dot) => dot.classList.remove('active'))
  if (index > slides.length - 1) {
    console.log('index 0')
    slideIndex = 0
  }
  if (index < 0) {
    slideIndex = slides.length - 1
  }

  slides[slideIndex].style.display = 'block'
  dots[slideIndex].classList.add('active')
}

function showNextSlide() {
  showSlide((slideIndex += 1))
}

function showPreviousSlide() {
  showSlide((slideIndex -= 1))
}

nextButton.addEventListener('click', showNextSlide)
previousButton.addEventListener('click', showPreviousSlide)

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index
    showSlide(slideIndex)
  })
})

showSlide(slideIndex)
