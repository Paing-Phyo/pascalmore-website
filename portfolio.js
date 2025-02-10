//creating the year of web!
const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear


let menu = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menu.onclick = () => {
    menu.classList.toggle(`bx-x`);
    navbar.classList.toggle(`active`);
}

window.onscroll = () => {
    menu.classList.remove(`bx-x`);
    navbar.classList.remove(`active`);
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer.', 'Software Developer.', 'Web Designer.'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1200,
    loop: true,
  });