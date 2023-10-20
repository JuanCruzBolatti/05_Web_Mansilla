// Header Animation
const header = document.querySelector(".header");

header.onmousemove = e => {
    const headerBorder = document.querySelector(".header-border");
    const rect = headerBorder.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
    
    headerBorder.style.setProperty("--mouse-x", `${x}px`);
    headerBorder.style.setProperty("--mouse-y", `${y}px`);       
}

window.onscroll = () => {
    if(window.scrollY > 100) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
}

// Sidebar Display
const sidebar = document.querySelector('.sidebar');

function changeBars(x) {
    x.classList.toggle('bar-active');
    sidebar.classList.toggle('display-menu');
}

// 
const aboutSection = document.querySelector('#secondAboutSection');

if(window.innerWidth <= 768) {
    aboutSection.classList.remove('home-about-reverse');
}




