

const scroll = new LocomotiveScroll(
    {
        el: document.querySelector('[data-scroll-body]'),
        smooth: true,
        multiplier : 1.2,
        lerp:0.03,        

    }

);



// function backgroundDynamique{
//     const scrollFixed = new LocomotiveScroll(
//         {
//             el: document.querySelector('[data-scroll-body]'),
//             smooth: false,
//             multiplier : 0.1,
//             lerp:0,        
    
//         }
//     );
// }

// const scrollWorks = new LocomotiveScroll(
//     {
//         el: document.querySelector('#Works'),
//         smooth: true,
//         // getSpeed: true,
//         multiplier  : 1, 
//     }
// ); 


let toHomePage = document.querySelector('#toHomePage');
let toAbout = document.querySelector('#toAbout');
let toWorks = document.querySelector('#toWorks');
let toContact = document.querySelector('#toContact');


toHomePage.addEventListener('click', () => {
    scroll.scrollTo(document.querySelector('#homePages'));
}
);
toAbout.addEventListener('click', () => {
    scroll.scrollTo(document.querySelector('#about'));
}
);


toWorks.addEventListener('click', () => {
    scroll.scrollTo(document.querySelector('#Works'));
}
);


toContact.addEventListener('click', () => {
    scroll.scrollTo(document.querySelector('#Contact'));
    
}
);



