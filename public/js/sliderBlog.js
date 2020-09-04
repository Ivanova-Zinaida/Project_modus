let images_1 ={
    images:'.slider-blog__wrapper .slider .slider__item',
    next: '.slider-blog__wrapper .slider .slider__arrow_right',
    prev: '.slider-blog__wrapper .slider .slider__arrow_left',
    interval: '4000',
    indicator:'.slider-blog__wrapper .slider-indicator .slider-indicator__item',
    flag: false
}


let sliderBlog = new Slider(images_1);
