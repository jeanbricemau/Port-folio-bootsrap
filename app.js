let body = document.querySelector('body');
let navBoutton = document.querySelector('.nav-button');
let buttonSpan = document.querySelector('.nav-button span');
let nav = document.querySelector('nav');
let navUl = document.querySelector('nav ul');
let footer = document.querySelector('footer');



navUl.addEventListener('mouseleave', () => {
        nav.classList.toggle('translate-nav');
        // cursorinner.classList.remove('hover2');
      });

//quitte le menu lorsque le menu perd le focus de la souris



navBoutton.addEventListener('click', function () {
    nav.classList.toggle('translate-nav');
    body.classList.add('lock');
})


footer.addEventListener('mouseenter', () => {
buttonSpan.classList.add('btnNavChangeColor');
 });

      footer.addEventListener('mouseleave', () => {
        buttonSpan.classList.remove('btnNavChangeColor');
        
              });
