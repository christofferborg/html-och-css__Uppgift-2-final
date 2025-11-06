const menuIcon = document.querySelector('.header__menuIcon');
const mobileMenu = document.querySelector('.header__mobile-menu');
const closeIcon = document.querySelector('.header__closeIcon');

menuIcon.addEventListener('click', () => {
document.body.classList.add('menu-open');
mobileMenu.classList.add('is-open');
closeIcon.classList.add('is-open');
menuIcon.classList.add('is-open');
})

closeIcon.addEventListener('click', () => {
document.body.classList.remove('menu-open');
mobileMenu.classList.remove('is-open');
closeIcon.classList.remove('is-open');
menuIcon.classList.remove('is-open');
})