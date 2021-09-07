let searchBtn=document.querySelector('#search-btn'); 
let searchBar=document.querySelector('.search-bar-container'); 

let formBtn=document.querySelector('#login-btn'); 
let loginForm=document.querySelector('.login-form-container'); 
let formClose=document.querySelector('#form-close'); 

let menu=document.querySelector('#menu-bar'); 
let navbar=document.querySelector('.navbar'); 

let imageBtn=document.querySelectorAll('.img-btn'); 

window.onscroll=()=>{
    /* for search bar */
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');  
    /* for menu bar*/
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');  
}

/* to handle search bar */
searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

/* to handle form opening */
formBtn.addEventListener('click', ()=>{
    loginForm.classList.add('active');
});
/* to handle form closing */
formClose.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
});

/* to handle navbar bar */
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

/* for image slider */
imageBtn.forEach(btn=>{
     btn.addEventListener('click', ()=>{
         document.querySelector('.controls .active').classList.remove('active');
         btn.classList.add('active');
         let src=btn.getAttribute('data-src');
         document.querySelector('#image-slider').src=src;
     });
});

/* reviews slider */
var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay: 2500,
        disablOnInteraction: false,
    },
    breakpoints: {
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:4,
        },
    },
});








