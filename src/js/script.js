const menu = document.querySelector('.header__nav'),
      hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('header__nav--active');
    hamburger.classList.toggle('hamburger--open');
});