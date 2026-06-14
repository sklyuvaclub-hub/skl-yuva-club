// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Smooth Scroll Effect

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Scroll Animation

const cards = document.querySelectorAll(
    ".card, .activity-card, .team-card, .gallery-item"
);

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

// Initial Style

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
});

// Current Year in Footer (Optional)

const year = new Date().getFullYear();

document.querySelectorAll("footer p").forEach(item => {
    item.innerHTML =
    `© ${year} Shaheed Krishan Lal Yuva Club Barog. All Rights Reserved.`;
});