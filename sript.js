const typingTextElement = document.querySelector(".typing-text");
const words = ["Web Developer", "Student", "Software Developer", "Content Creator", "Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingDelay = 150; // Typing speed
const erasingDelay = 80; // Erasing speed
const newWordDelay = 1500; // Delay before typing the next word

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        // Remove characters
        typingTextElement.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(type, erasingDelay);
        }
    } else {
        // Add characters
        typingTextElement.textContent = currentWord.substring(0, charIndex++);
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, newWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newWordDelay);
});
