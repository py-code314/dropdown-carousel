// Import HTML elements
const dropdowns = document.querySelectorAll('.dropdown')
const dropdownButtons = document.querySelectorAll('.button__dropdown')



/* Toggle the open state of the dropdown menu associated with the given button */
function toggleDropdown() {
  const dropdown = this.nextElementSibling;
  const isDropdownOpen = dropdown.classList.contains('open');

  dropdowns.forEach((dropdown) => dropdown.classList.remove('open'));
  if (!isDropdownOpen) {
    dropdown.classList.add('open');
  }
}

/* Event listener for button clicks */
dropdownButtons.forEach((button) => {
  button.addEventListener('click', toggleDropdown)
})

