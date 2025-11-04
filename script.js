const menuCheckbox = document.querySelector('#menuCheckbox');

menuCheckbox.addEventListener('change', () => {
document.body.classList.toggle('menu-open', menuCheckbox.checked);
})