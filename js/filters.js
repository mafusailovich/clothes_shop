'use strict'

const filterMenu = document.querySelector('.filter__menu');

document.addEventListener('click', (event) => {
    if (event.target.closest('.filter-btn')) {
        filterMenu.classList.toggle('filter__menu-active');
    } else {
        filterMenu.classList.remove('filter__menu-active');
    };
});
