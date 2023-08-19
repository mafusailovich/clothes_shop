'use strict'

const slideItems = document.querySelectorAll('.slide-item');
const sliderMenu = document.querySelector('.slider-menu');
const sliderMenuItems = document.querySelectorAll(`[class*="slider-menu__item"]`);


//определение активного слайда
function searchActiveSlide() {
    for (let slide = 0; slide < slideItems.length; slide++) {
        if (slideItems[slide].classList.contains('slide-item__active')) {
            return slide;
        };
    };
};

//определение номера активной кнопки меню
function searchActiveBtn() {
    for (let i = 1; i < sliderMenuItems.length - 1; i++) {
        if (sliderMenuItems[i].classList.contains('_active')) {
            return i;
        };
    };
};

//синхронизация слайдов по номеру слайда
function syncSlideMenu() {
    let numSlide = searchActiveSlide() + 1; //значение слайда для меню (+1 потому что в меню есть ещё стрелки)
    let numActive = searchActiveBtn();//значение активного пункта меню
    if (numSlide !== numActive) {
        //если номера отличаются, то по пункту меню выставляем слайд
        slideItems[numSlide - 1].classList.remove('slide-item__active');
        slideItems[numActive - 1].classList.add('slide-item__active');
    };
};

syncSlideMenu();

function changeSlide(numActive, numNext) {
    //делаем его неактивным
    sliderMenuItems[numActive].classList.remove('_active');
    let slideImgs = sliderMenuItems[numActive].querySelectorAll('img');
    //меняем видимость изображений
    slideImgs[0].className = 'slider-menu__item-active';
    slideImgs[1].className = 'slider-menu__passive';

    //делаем новый класс активный
    sliderMenuItems[numNext].classList.add('_active');
    slideImgs = sliderMenuItems[numNext].querySelectorAll('img');
    //меняем видимость
    slideImgs[0].className = 'slider-menu__passive';
    slideImgs[1].className = 'slider-menu__item-active';
    syncSlideMenu();
}


sliderMenu.addEventListener('click', (event) => {
    //получаем номер активного слайда в данный момен
    let numActive = searchActiveBtn();

    //если кликнули по стрелке влево
    if (event.target.closest('.slider-menu__item_0')) {
        if (1 < numActive && numActive < sliderMenuItems.length-1) {
            changeSlide(numActive,numActive-1);
        } else  {
            changeSlide(numActive,sliderMenuItems.length-2);
        };
    };

    //если кликнули по стрелке вправо
    if (event.target.closest(`.slider-menu__item_${sliderMenuItems.length-1}`)) {
        if (1 <= numActive && numActive < sliderMenuItems.length-2) {
            changeSlide(numActive, numActive+1);
        } else if (numActive == sliderMenuItems.length-2) {
            changeSlide(numActive, 1);
        }
    };

    //при клике на кружок
    for (let i = 1; i < sliderMenuItems.length - 1; i++) {
        if (event.target.closest(`.slider-menu__item_${i}`)) {
            changeSlide(numActive,i);
        };
    };
});
