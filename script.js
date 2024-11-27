/* POP OUT MENU FUNCTION */

const menuBtn = document.querySelector('.menu_btn');
const offScreenMenu = document.querySelector('.off-screen_menu');

// Declare menuWidth globally
let menuWidth = parseInt(getComputedStyle(offScreenMenu).width, 10);

// Update menuWidth whenever the window is resized
window.addEventListener('resize', () => {
    menuWidth = parseInt(getComputedStyle(offScreenMenu).width, 10);
});

menuBtn.addEventListener('click', () => {
    const isLargeScreen = window.matchMedia('(min-width: 1450px)').matches;

    // If viewport width is 1450px or greater, prevent off-screen menu from moving
    if (!isLargeScreen) {
        if (offScreenMenu.style.left === `-${menuWidth}px` || offScreenMenu.style.left === '') {
            offScreenMenu.style.left = '0';
        } else {
            offScreenMenu.style.left = `-${menuWidth}px`;
        }
        menuBtn.classList.toggle('active');
    }
});

/* SCROLL INTO VIEW FUNCTION */

const menuLinks = [
    { selector: 'a[href="#home"]', target: 'home' },
    { selector: 'a[href="#about"]', target: 'about' },
    { selector: 'a[href="#resume"]', target: 'resume' },
    { selector: 'a[href="#skills"]', target: 'skills' },
    { selector: 'a[href="#projects"]', target: 'projects' },
    { selector: 'a[href="#contact_info"]', target: 'contact_info' }
];

menuLinks.forEach(link => {
    const element = document.querySelector(link.selector);

    element.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById(link.target).scrollIntoView({ behavior: 'smooth' });

        const isLargeScreen = window.matchMedia('(min-width: 1450px)').matches;

        // Prevent the menu from closing on large screens
        if (!isLargeScreen) {
            offScreenMenu.style.left = `-${menuWidth}px`;
            menuBtn.classList.toggle('active');
        }
    });
});

/* AUTO TYPING FUNCTION */

/* SPLASH PAGE A TYPE FUNCTION */

const typingText = document.querySelector('.typing_words');
const words = ["...DESIGNER", "...CREATOR", "...PROBLEM-SOLVER"];
let wordIndex = 0, charIndex = 0, deleteChar = false;
const typeAni = document.querySelector('.type_animation');

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
    typeAni.style.animation = (charIndex === 0 || charIndex > currentWord.length - 1) ? "blink 0.7s infinite" : "none";
};

autoType();

/* SPLASH PAGE B TYPE FUNCTION */

const typingText_b = document.querySelector('.typing_words_b');
const words_b = ["...DESIGNER", "...CREATOR", "...PROBLEM-SOLVER"];
let wordIndex_b = 0, charIndex_b = 0, deleteChar_b = false;
const typeAni_b = document.querySelector('.type_animation_b');

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
    typeAni_b.style.animation = (charIndex_b === 0 || charIndex_b > currentWord.length - 1) ? "blink 0.7s infinite" : "none";
};

autoType_b();

/* BACK TO TOP FUNCTION */

const backToTop = document.querySelector('.back_to_top');

backToTop.onclick = function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}








