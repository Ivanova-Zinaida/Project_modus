
let images_1 ={
    images:'.slider__wrapper_portfolio .slider .slider__item',
    next: '.slider__wrapper_portfolio .slider .slider__arrow_right',
    prev: '.slider__wrapper_portfolio .slider .slider__arrow_left',
    interval: '4000',
    indicator:'.slider__wrapper_portfolio .slider-indicator .slider-indicator__item',
    flag: true
}
let img_gallery = {
     images:'.slider__prew_gallery .slider .slider__item',
    next: '.slider__prew_gallery .slider .slider__arrow_right',
    prev: '.slider__prew_gallery .slider .slider__arrow_left',
    interval: '4000',
    indicator:'.slider__prew_gallery .slider-indicator .slider-indicator__item',
    flag: false 
}
let imgGallerySmall = {
     images:'.slider_small .slider .slider__item',
    next: '.slider_small .slider .slider__arrow_right',
    prev: '.slider_small .slider .slider__arrow_left',
    interval: '4000',
    indicator:'.slider_small .slider-indicator .slider-indicator__item',
    flag: false 
}

let sliderPortfolio = new Slider(images_1);
let sliderGallery = new Slider(img_gallery);
let sliderGallerySmall = new Slider(imgGallerySmall);