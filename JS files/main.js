// This is the for the scrolling navigation shadow
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 50)
})

//This is to show/hide the FAQ when clicked on the q

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
        //change icon

        const icon = faq.querySelector('.faq-icon i');

        if(icon.className === 'uil uil-plus-square' ){
            icon.className = "uil uil-minus-circle";
            
        }else{
            icon.className = "uil uil-plus-square";
        }
    })
})

const menu = document.querySelector(".nav__menu");
const open_menu = document.querySelector(".open-menu-navigation");
const close_menu = document.querySelector(".close-menu-navigation");

open_menu.addEventListener('click',()=>{
    menu.style.display = "flex";
    close_menu.style.display ='inline-block';
    open_menu.style.display = "none";

})

//close nav menu for tablets

const closemenu = ()=> {
    menu.style.display ='none';
    close_menu.style.display ='none';
    open_menu.style.display = 'inline-block'
}

close_menu.addEventListener('click',closemenu)

