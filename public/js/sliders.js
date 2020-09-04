
let images_1 ={
    images:'.slider__main_wrapper .slider .slider__item',
    next: '.slider__main_wrapper .slider .slider__arrow_right',
    prev: '.slider__main_wrapper .slider .slider__arrow_left',
    interval: '4000',
    indicator:'.slider__main_wrapper .slider-indicator .slider-indicator__item',
    flag: true
}

let slider = new Slider(images_1)