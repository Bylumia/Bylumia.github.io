const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-links li')

burger.addEventListener('click', () => {
    //nav.style.animation = `navLinkFadeIn 0.5s ease forwards`;
    nav.classList.toggle('active') 
});


