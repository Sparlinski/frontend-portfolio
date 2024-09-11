/* POP OUT MENU FUNCTION */

const menuBtn = document.querySelector('.menu_btn');
const offScreenMenu = document.querySelector('.off-screen_menu');

menuBtn.addEventListener('click', () => {
    // Check current left position of the menu
    if (offScreenMenu.style.left === '-250px' || offScreenMenu.style.left === '') {
        offScreenMenu.style.left = '0';
    } else {
        offScreenMenu.style.left = '-250px';
    }
});

/* AUTO TYPING FUNCTION */

const typingText = document.querySelector('h3 span')
const words = ["...design.", "...creating.", "...problem-solving", "...building functional, easy to use products that people find value in and enjoy."]

let wordIndex = 0;
let charIndex = 0;
let deleteChar = false;

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
        setTimeout(autoType, 1200);
    }
};

autoType();