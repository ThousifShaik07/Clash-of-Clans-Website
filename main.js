let menu = document.querySelector('#menu-icon');
let navlink = document.querySelector('.navlink');


menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlink.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration : 2600,
    delay:450,
    reset: true,

});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});