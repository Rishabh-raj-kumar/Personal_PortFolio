let header = document.querySelector('header');
let menu = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');
let navLi = document.querySelectorAll(' ul li')
menu.onclick = () =>{
    navbar.classList.toggle('active');
}

document.onclick = function(e){
    if(e.target.id != 'navbar' && e.target.id != 'menu-icon')
    {
        navbar.classList.remove('active');
    }
}

let darkmode = document.getElementById('darkmode');

darkmode.onclick = () =>{
    if(darkmode.classList.contains('bx-moon'))
    {
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}