function animatePhoto(element, messageText) {
    element.style.transform = "scale(1.2) rotate(5deg)";
    element.style.transition = "transform 0.5s ease";
    
    setTimeout(() => {
        element.style.transform = "scale(1) rotate(0deg)";
    }, 500);
    
    let message = document.createElement("div");
    message.className = "photo-message";
    message.innerText = messageText;
    document.body.appendChild(message);
    
    let rect = element.getBoundingClientRect();
    message.style.position = "absolute";
    message.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    message.style.top = `${rect.top + window.scrollY - 30}px`;
    message.style.transform = "translateX(-50%)";
    message.style.background = "rgba(255, 182, 193, 0.9)";
    message.style.color = "#d63384";
    message.style.padding = "5px 10px";
    message.style.borderRadius = "5px";
    message.style.fontSize = "14px";
    message.style.fontWeight = "bold";
    message.style.transition = "opacity 1s ease";
    
    setTimeout(() => {
        message.style.opacity = "0";
        setTimeout(() => message.remove(), 1000);
    }, 2000);
}

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);

window.onload = function() {
    document.querySelectorAll('.photo').forEach((img, index) => {
        const messages = [
            "This was such a beautiful day! 💖",
            "Our laughter here was priceless! 😊",
            "A moment I will never forget! 💕",
            "You looked so stunning here! 🌸",
            "This trip was the best! ✨",
            "Forever grateful for this memory! 💜",
            "Can't wait to make more memories with you! 💑"
        ];
        img.addEventListener("click", function() {
            animatePhoto(this, messages[index % messages.length]);
        });
    });
};

function filterLetters(category) {
    let letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
        if (category === 'all' || letter.classList.contains(category)) {
            letter.style.display = 'block';
        } else {
            letter.style.display = 'none';
        }
    });
}