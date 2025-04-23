// Import HTML elements
const slides = document.querySelectorAll('.slide__container')
const previousButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')
const dots = document.querySelectorAll('.dot__container')

let slideIndex = 0

/* Shows a slide given an index */
function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = 'none'))
  dots.forEach((dot) => dot.classList.remove('active'))
  // If the index is greater than the number of slides, set it to 0
  if (index > slides.length - 1) {
    console.log('index 0')
    slideIndex = 0
  }
  // If the index is less than 0, set it to the last slide
  if (index < 0) {
    slideIndex = slides.length - 1
  }

  slides[slideIndex].style.display = 'block'
  dots[slideIndex].classList.add('active')
}

/* Shows the next slide in the slideshow */
function showNextSlide() {
  showSlide((slideIndex += 1))
}

/* Shows the previous slide in the slideshow */
function showPreviousSlide() {
  showSlide((slideIndex -= 1))
}

/* Event listeners for previous and next buttons */
nextButton.addEventListener('click', showNextSlide)
previousButton.addEventListener('click', showPreviousSlide)

/* Event listeners for dot clicks */
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index
    showSlide(slideIndex)
  })
})

// Show first slide
showSlide(slideIndex)

// Show next slide every 5 seconds
setInterval(showNextSlide, 5000)
