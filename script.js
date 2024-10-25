/* POP OUT MENU FUNCTION */

const menuBtn = document.querySelector('.menu_btn');
const offScreenMenu = document.querySelector('.off-screen_menu');

menuBtn.addEventListener('click', () => {
    const menuWidth = parseInt(getComputedStyle(offScreenMenu).width, 10);

    if (offScreenMenu.style.left === `-${menuWidth}px` || offScreenMenu.style.left === '') {
        offScreenMenu.style.left = '0';
    } else {
        offScreenMenu.style.left = `-${menuWidth}px`;
    }
    menuBtn.classList.toggle('active');
});

/* SCROLL INTO VIEW FUNCTION */

const home = document.querySelector('a[href="#home"]');
const about = document.querySelector('a[href="#about"]');
const resume = document.querySelector('a[href="#resume"]');
const skills = document.querySelector('a[href="#skills"]');
const projects = document.querySelector('a[href="#projects"]');
const contactInfo = document.querySelector('a[href="#contact_info"]');

home.addEventListener('click', () => {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    offScreenMenu.style.left = `-${menuWidth}px`;
    menuBtn.classList.toggle('active');
});

about.addEventListener('click', () => {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    offScreenMenu.style.left = `-${menuWidth}px`;
    menuBtn.classList.toggle('active');
});

resume.addEventListener('click', () => {
    event.preventDefault();
    document.getElementById('resume').scrollIntoView({ behavior: 'smooth' });
    offScreenMenu.style.left = `-${menuWidth}px`;
    menuBtn.classList.toggle('active');
});

skills.addEventListener('click', () => {
    event.preventDefault();
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    offScreenMenu.style.left = `-${menuWidth}px`;
    menuBtn.classList.toggle('active');
});

projects.addEventListener('click', () => {
    event.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    offScreenMenu.style.left = `-${menuWidth}px`;
    menuBtn.classList.toggle('active');
});

contactInfo.addEventListener('click', () => {
    event.preventDefault();
    document.getElementById('contact_info').scrollIntoView({ behavior: 'smooth' });
    offScreenMenu.style.left = `-${menuWidth}px`;
    menuBtn.classList.toggle('active');
});

/* const menuItems = [
    { selector: 'a[href="#home"]', target: 'home' },
    { selector: 'a[href="#about"]', target: 'about' },
    { selector: 'a[href="#resume"]', target: 'resume' },
    { selector: 'a[href="#skills"]', target: 'skills' },
    { selector: 'a[href="#projects"]', target: 'projects' },
    { selector: 'a[href="#contact_info"]', target: 'contact_info' },
];

const handleMenuClick = (event, targetId) => {
    event.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    offScreenMenu.style.left = `-${menuWidth}px`;
    menuBtn.classList.toggle('active');
};

menuItems.forEach(item => {
    const link = document.querySelector(item.selector);
    link.addEventListener('click', (event) => handleMenuClick(event, item.target));
}); */

/* AUTO TYPING FUNCTION */

const typingText = document.querySelector('.typing_words')
const words = [
    "...DESIGNER", 
    "...CREATOR", 
    "...PROBLEM-SOLVER"
];

let wordIndex = 0;
let charIndex = 0;
let deleteChar = false;
typeAni = document.querySelector('.type_animation');

const autoType = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    typingText.textContent = currentChar;

    if (!deleteChar && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(autoType, 100);
    } else if (deleteChar && charIndex > 0) {
        charIndex--;
        setTimeout(autoType, 50);
    } else {
        deleteChar = !deleteChar;
        wordIndex = !deleteChar ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(autoType, 2000);
    }
    if (charIndex === 0 || charIndex > currentWord.length - 1) {
        typeAni.style.animation = "blink 0.7s infinite";
    } else {
        typeAni.style.animation = "none"};
};

autoType();

/* BACK TO TOP FUNCTION */

const backToTop = document.querySelector('.back_to_top');

backToTop.onclick = function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
}