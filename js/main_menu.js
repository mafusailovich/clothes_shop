'use strict'

const burgerMenu = document.querySelector('.burger-menu');
const authForm = document.querySelector('.auth-form');
const footerCustomers = document.querySelector('.footer__customers-links');
const footerAbout = document.querySelector('.footer__about-links');
const searchForm = document.querySelector('.search-form');
const cartPop = document.querySelector('.cart-pop');
const rmCart = document.querySelector('.right-menu__cart');
const cartClose = document.querySelector('.cart-close');


document.addEventListener('click', function (event) {

    //выезжающее меню
    if (event.target.closest('.burger-btn')){
        burgerMenu.classList.toggle('burger-menu__active');
    } else {
        burgerMenu.classList.remove('burger-menu__active');
    };
    //всплывающая форма аутентификации
    if (event.target.closest('.right-menu__account')) {
        authForm.classList.toggle('auth-form__active');
    } else {
        if (!event.target.closest('.auth-form__body')){
            authForm.classList.remove('auth-form__active');
        }
    };
    //два меню внизу страницы
    if (event.target.closest('.footer__customers')) {
        footerCustomers.classList.toggle('footer__customers-links_active');
    } else {
        footerCustomers.classList.remove('footer__customers-links_active');
    };

    if (event.target.closest('.footer__about')) {
        footerAbout.classList.toggle('footer__about-links_active');
    } else {
        footerAbout.classList.remove('footer__about-links_active');
    };

    //вызов меню поиска
    if (event.target.closest('.right-menu__search')){
        searchForm.classList.toggle('search-form_active');
    } else {
        if (!event.target.closest('.search-form')){
            searchForm.classList.remove('search-form_active');
        };
    };

    //закрываем быструю форму заказа
    if (event.target.closest('.cart-close') || !event.target.closest('.cart-pop')) {
        cartPop.classList.remove('cart-pop__active');
    };


});

rmCart.addEventListener(`mouseover`, () => {
    cartPop.classList.add('cart-pop__active');
});
