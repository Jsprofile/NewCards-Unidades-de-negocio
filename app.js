var bx = document.querySelector('.bx')
var mobileMenu = document.querySelector('.mobileNav')

bx.addEventListener('click', ()=>{
    bx.classList.toggle('active-bx')
    mobileMenu.classList.toggle('active-nav')
})


var header = document.querySelector('.header')

window.onscroll = ()=>{
    if(window.pageYOffset >= 100){
        header.classList.add('activeHeader')
    }else{
        header.classList.remove('activeHeader')
    }
}