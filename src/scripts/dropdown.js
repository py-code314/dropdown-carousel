// Import HTML elements
const menuButton = document.querySelector('#menu-button')
// console.log(menuButton)
// const closeButton = document.querySelector('#close-button')
const dropdown = document.querySelector('#dropdown')

// Event listeners for menu buttons
menuButton.addEventListener('click', () => {
  console.log('menu btn clicked')
  dropdown.classList.toggle('active')
})

// closeButton.addEventListener('click', () => {
//   menu.classList.add('hidden')
// })