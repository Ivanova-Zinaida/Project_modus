let form = document.querySelector('.form-contacts');
let numberComment = document.querySelector('.number__comment');
let ulComment = document.querySelector('.comments__list');
let date = new Date();
let day = date.getDate();
let mounth = date.getMonth();
let mounths = ['January','February','March','April', 'May','June','July','August','September','October','November','December'];
let year = date.getFullYear();
let fulDate = `${day} ${mounths[mounth]} ${year}`
let url = 'footer-img-1.jpg';

let count = 1;

form.addEventListener('click', function(e){
    e.preventDefault();
    let elemTarget = e.target;
    let textArae = document.querySelector('.form__textarea').value;
    let author = document.querySelector('.fotm__input-name').value;
    if(elemTarget.classList.contains('form__btn')){
        if(textArae!=0){
            numberComment.innerText = count++;
            let li = document.createElement('li');
            li.classList.add('comments__item');
            
            let img = document.createElement('img');
            img.classList.add('comments__img');
            img.setAttribute("src", "img/footer/" + url);
            
            let containerAuthor = document.createElement('p');
            containerAuthor.classList.add('comments__text');
            
            let spanAuthor = document.createElement('span');
            
            author = author || 'Аноним'
            spanAuthor.innerText = author+ '. ';
            
            let spanDate = document.createElement('span');
            spanDate.innerText = fulDate;
            
            containerAuthor.appendChild(spanAuthor);
            containerAuthor.appendChild(spanDate);
            
            let textComment = document.createElement('p');
            textComment.classList.add('comments__text');
            textComment.innerText = textArae;
            li.appendChild(img);
            li.appendChild(containerAuthor);
            li.appendChild(textComment)
            ulComment.appendChild(li)
        }
         
    } 
   
});