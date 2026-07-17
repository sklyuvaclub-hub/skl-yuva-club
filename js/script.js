// ===========================
// SHAHEED KRISHAN LAL YUVA CLUB
// script.js
// ===========================

// Loader
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.style.display = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Scroll To Top Button
const topBtn = document.createElement("div");

topBtn.innerHTML = "↑";
topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Dark Mode Button

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.style.position = "fixed";
darkBtn.style.top = "20px";
darkBtn.style.right = "20px";
darkBtn.style.zIndex = "9999";
darkBtn.style.padding = "10px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "50%";
darkBtn.style.cursor = "pointer";

document.body.appendChild(darkBtn);

darkBtn.onclick = () => {

    document.body.classList.toggle("dark");

};

// Counter Animation

const counters = document.querySelectorAll(".counter h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const update = () => {

        count += Math.ceil(target / 80);

        if (count < target) {

            counter.innerText = count + "+";

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});

// Gallery Image Zoom

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.left = "0";
        popup.style.top = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,.9)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.cursor = "pointer";

        const image = document.createElement("img");

        image.src = img.src;

        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";

        popup.appendChild(image);

        document.body.appendChild(popup);

        popup.onclick = () => popup.remove();

    });

});

// Form Success

const forms = document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit", function () {

        alert("Thank You! Your form has been submitted successfully.");

    });

});

// Welcome Message

setTimeout(() => {

    console.log("Welcome to Shaheed Krishan Lal Yuva Club Website");

}, 1000);

// Sticky Header Shadow

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.boxShadow = "none";

    }

});

// End