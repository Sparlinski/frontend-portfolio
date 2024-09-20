/* POP OUT MENU FUNCTION */

const menuBtn = document.querySelector('.menu_btn');
const offScreenMenu = document.querySelector('.off-screen_menu');
const resume = document.querySelector('a[href="#resume"]')

menuBtn.addEventListener('click', () => {
    // Check current left position of the menu
    if (offScreenMenu.style.left === '-250px' || offScreenMenu.style.left === '') {
        offScreenMenu.style.left = '0';
    } else {
        offScreenMenu.style.left = '-250px';
    }
    menuBtn.classList.toggle('active');
});

resume.addEventListener('click', () => {
    console.log('this fired');
    event.preventDefault();
    document.getElementById('resume').scrollIntoView({ behavior: 'smooth' });
    offScreenMenu.style.left = '-250px';
    menuBtn.classList.toggle('active');
});

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