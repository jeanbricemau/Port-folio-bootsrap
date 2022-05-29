let navBoutton = document.querySelector('.nav-button');
let nav = document.querySelector('nav');
let body = document.querySelector('body');

let navUl = document.querySelector('nav ul');


navUl.addEventListener('mouseleave', () => {
        nav.classList.toggle('translate-nav');
        // cursorinner.classList.remove('hover2');
      });

//quitte le menu lorsque le menu perd le focus de la souris



navBoutton.addEventListener('click', function () {
    nav.classList.toggle('translate-nav');
    
    console.log('click');
})