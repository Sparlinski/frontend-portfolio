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

/* AUTO TYPING FUNCTION */

/* SPLASH PAGE A TYPE FUNCTION */

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

/* SPLASH PAGE B TYPE FUNCTION */

const typingText_b = document.querySelector('.typing_words_b')
const words_b = [
    "...DESIGNER", 
    "...CREATOR", 
    "...PROBLEM-SOLVER"
];

let wordIndex_b = 0;
let charIndex_b = 0;
let deleteChar_b = false;
typeAni_b = document.querySelector('.type_animation_b');

const autoType_b = () => {
    const currentWord = words_b[wordIndex_b];
    const currentChar = currentWord.substring(0, charIndex_b);
    typingText_b.textContent = currentChar;

    if (!deleteChar_b && charIndex_b < currentWord.length) {
        charIndex_b++;
        setTimeout(autoType_b, 100);
    } else if (deleteChar_b && charIndex_b > 0) {
        charIndex_b--;
        setTimeout(autoType_b, 50);
    } else {
        deleteChar_b = !deleteChar_b;
        wordIndex_b = !deleteChar_b ? (wordIndex_b + 1) % words_b.length : wordIndex_b;
        setTimeout(autoType_b, 2000);
    }
    if (charIndex_b === 0 || charIndex_b > currentWord.length - 1) {
        typeAni_b.style.animation = "blink 0.7s infinite";
    } else {
        typeAni_b.style.animation = "none"};
};

autoType_b();

/* BACK TO TOP FUNCTION */

const backToTop = document.querySelector('.back_to_top');

backToTop.onclick = function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
}