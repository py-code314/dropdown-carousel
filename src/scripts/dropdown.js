// Import HTML elements
const dropdowns = document.querySelectorAll('.dropdown')
const dropdownButtons = document.querySelectorAll('.button__dropdown')



function openMenu() {
  const currentDropdown = this.nextElementSibling
  const isOpen = currentDropdown.classList.contains('open')

  dropdowns.forEach((dropdown) => dropdown.classList.remove('open'))
  if (!isOpen) {
    currentDropdown.classList.add('open')
  }
}

dropdownButtons.forEach((button) => {
  button.addEventListener('click', openMenu)
})

