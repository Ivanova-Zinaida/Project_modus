/* slider*/
;(function(){
    window.Slider = class {
        constructor({...galery}){
            this.images = document.querySelectorAll(galery.images);
            this.btPrev = document.querySelector(galery.prev);
            this.btNext = document.querySelector(galery.next);
            this.indicator = document.querySelectorAll(galery.indicator)
            this.interval = galery.interval; 
            this.flag = galery.flag
            
            this.i = 0;
            this.btPrev.addEventListener('click', function(e){
                e.preventDefault()
                this.showPrevSlide()
            }.bind(this));
            this.btNext.addEventListener('click', function(e){
                e.preventDefault()
                this.showNextSlide()
            }.bind(this));

            if(this.flag){
                setInterval(this.showNextSlide.bind(this), this.interval);
            }           
        }
        
        showPrevSlide(){
            
            this.images[this.i].classList.remove('slider__item_main_active');
            this.indicator[this.i].classList.remove('slider-indicator_active');
            
            this.i--;
            if( this.i < 0){
                this.i = this.images.length - 1;
            }
            this.images[this.i].classList.add('slider__item_main_active');
            this.indicator[this.i].classList.add('slider-indicator_active');
            return this.i
        }
    
        showNextSlide() {
            
            this.images[this.i].classList.remove('slider__item_main_active');
            this.indicator[this.i].classList.remove('slider-indicator_active')
            this.i++;
            if( this.i >= this.images.length){
            this.i = 0;
            }
            this.images[this.i].classList.add('slider__item_main_active');
            this.indicator[this.i].classList.add('slider-indicator_active');
            return this.i
        }
    }
}());
/*window.onload = function(e){

  new Slider({
    images: '.gallery-1 .photo img',
    next: '.gallery-1 .tabs .next',
    prev: '.gallery-1 .tabs .prev',
    indicator:'';
    interval: '2000'
  });

  function Slider(images){

    this.images = document.querySelectorAll(images.images);
    this.btPrev = document.querySelector(images.prev);
    this.btNext = document.querySelector(images.next);
    this.interval = images.interval;

    
   let i = 0;
    this.prev = function() {
      this.images[i].className = "";
       i--;
       if( i < 0){
         i = this.images.length - 1;
       }
       this.images[i].className = "shown";
      },

    this.next = function() {
      this.images[i].className = "";
      i++;
      if( i >= this.images.length){
        i = 0;
      }
      this.images[i].className = "shown";
    }

    this.btPrev.addEventListener('click', this.prev.bind(this));
    this.btNext.addEventListener('click', this.next.bind(this));

    setInterval(this.next.bind(this), this.interval);

   }

}*/



