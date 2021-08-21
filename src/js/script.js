const menu = document.querySelector('.header__nav'),
      menuClose = document.querySelector('.close'),
      hamburger = document.querySelector('.hamburger');

menuClose.addEventListener('click', () => {
    if (menu.classList.contains('header__nav--active')) {
        menu.classList.remove('header__nav--active');
        hamburger.classList.remove('hamburger--open');
    }
})

hamburger.addEventListener('click', () => {
    menu.classList.toggle('header__nav--active');
    hamburger.classList.toggle('hamburger--open');
});

