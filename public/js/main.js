let btnOpenMenu = document.querySelector('.menu__opnen_btn');
let menu = document.querySelector('.menu__list');
let serchBtnOpen = document.querySelector('.link__search_open');
let portfolioBtnOpen = document.querySelector('.link__portfolio_open');
let portfolioMenu = document.querySelector('.menu-portfolio__list');
let serchForm = document.querySelector('.form-search');
let accordionContainer = document.querySelectorAll('.acordion__item_big');
let accordionContainerSmall = document.querySelectorAll('.acordion__item_small');
let accordionTitle = document.querySelectorAll('.accorfion__link_big');
let accordionTitleSmall = document.querySelectorAll('.accorfion__link_small');
let classActive = 'active-tabs';
let menuActive = 'active-menu';
let classMenuActive = 'active';

// slick slider

openMenu(btnOpenMenu, menu, classMenuActive);
openMenu(serchBtnOpen, serchForm, menuActive)
openMenu(portfolioBtnOpen, portfolioMenu, menuActive)

openAccordion(accordionTitle, accordionContainer, classActive, true);
openAccordion(accordionTitleSmall, accordionContainerSmall , classActive, false);


function openMenu(btn, hidenMenu, activClass){
    btn.addEventListener('click', function(e){
    e.preventDefault();
    hidenMenu.classList.toggle(activClass);
    });
};

function openAccordion(titles, body, classActive, flag){
    body.forEach(function(item, accordionTitle){
    item.addEventListener('click', function(e) {
        e.preventDefault();          
        if(flag){
            body.forEach(function(item){
                item.classList.remove(classActive);
            }); 
         }
        
        
         if(e.target.tagName =='I' || e.target.tagName=='A'){
                item.classList.toggle(classActive);
            }

         console.log(e.target)
        });
        
    });
   
}

