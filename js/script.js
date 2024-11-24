let burger = document.querySelector('.menu-burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let tabsBtn = document.querySelectorAll('.stages__btn');
let tabsItem = document.querySelectorAll('.stages-card');

burger.addEventListener('click',
function() {

    burger.classList.toggle('menu-burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el) {
    el.addEventListener('click', 
    
    function() {
        burger.classList.remove('menu-burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    })
    
})

const searchOpen = document.querySelector('.search__btn');
const search = document.querySelector('.search__form');
const searchClose = document.querySelector('.search__close');


searchOpen.addEventListener('click', function () {
  search.classList.add('search__show')
})

searchClose.addEventListener('click', function () {
  search.classList.remove('search__show')
})

tabsBtn.forEach(function(item){
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-path');
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function(item) {
            item.classList.remove('stages__btn--active');
        });

        tabsItem.forEach(function(item) {
            item.classList.remove('stages-card--active');
        });

        currentBtn.classList.add('stages__btn--active');
        currentTab.classList.add('stages-card--active');


    });
});

let swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'fade',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
});

const accordion = document.querySelectorAll('.accordion');

accordion.forEach(function(el){
    el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        const control = self.querySelector('.accordion__control');
        const content = self.querySelector('.accordion__content');

        self.classList.toggle('open');

        if (self.classList.contains('open')) {
            control.setAttribute('aria-expanded', true);
            control.setAttribute('aria-hiden', false);
        } else {
            control.setAttribute('aria-expanded', false);
            control.setAttribute('aria-hiden', true);
        }

    });
});