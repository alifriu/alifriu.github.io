// * toggle icon bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active')
}

//* scroll section active link

let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a');

window.scroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    //* sticky navbar
     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 100);

    //* remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark'); 
    navbar.classList.remove('active');
}

//* scroll reveal 
ScrollReveal({ 
    distace: '80px',
    duration: 1000,
    delay: 100,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portofolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

//* Typed reveal JS
const typed = new Typed('.multiple-text', {
    strings: ['College Student' ,'Programmer', 'Data Scientist'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});