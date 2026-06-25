// =========================
// KAMLA POWER SOLUTIONS
// Premium JavaScript
// =========================

// LOADER

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.transition = "0.8s";

setTimeout(() => {
loader.style.display = "none";
}, 800);

}, 1500);

});

// =========================
// ANIMATED STATISTICS
// =========================

const counters = document.querySelectorAll("[data-target]");

const startCounter = (counter) => {

const target = +counter.getAttribute("data-target");

let count = 0;

const speed = target / 100;

const update = () => {

if (count < target) {

count += speed;

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

}

else {

counter.innerText = target + "+";

}

};

update();

};

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

startCounter(entry.target);

observer.unobserve(entry.target);

}

});

},

{

threshold:0.5

}

);

counters.forEach(counter => {

observer.observe(counter);

});

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(

".stat-card, .service-card, .contact-box"

);

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

}

);

revealElements.forEach(el => {

revealObserver.observe(el);

});

// =========================
// STICKY NAVBAR EFFECT
// =========================

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if (window.scrollY > 50) {

header.style.background =
"rgba(10,10,20,0.85)";

header.style.backdropFilter =
"blur(15px)";

}

else {

header.style.background =
"rgba(0,0,0,0.25)";

}

});

// =========================
// SMOOTH SCROLL LINKS
// =========================

document.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

anchor.addEventListener("click",

function(e){

e.preventDefault();

const target = document.querySelector(

this.getAttribute("href")

);

target.scrollIntoView({

behavior:"smooth"

});

});

});

// =========================
// REVIEW CAROUSEL
// =========================

const reviews = [

{
name:"Customer",
text:"Excellent service and genuine products."
},

{
name:"Customer",
text:"Quick installation and professional support."
},

{
name:"Customer",
text:"Best place for batteries and inverters in Naini."
}

];

let currentReview = 0;

function changeReview(){

const reviewBox =
document.getElementById("review-text");

if(!reviewBox) return;

reviewBox.innerText =
reviews[currentReview].text;

currentReview++;

if(currentReview >= reviews.length){

currentReview = 0;

}

}

setInterval(changeReview,4000);

// =========================
// GALLERY LIGHTBOX
// =========================

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

const overlay =
document.createElement("div");

overlay.style.position = "fixed";

overlay.style.top = "0";

overlay.style.left = "0";

overlay.style.width = "100%";

overlay.style.height = "100%";

overlay.style.background =
"rgba(0,0,0,0.95)";

overlay.style.display = "flex";

overlay.style.justifyContent =
"center";

overlay.style.alignItems =
"center";

overlay.style.zIndex = "99999";

const image =
document.createElement("img");

image.src = img.src;

image.style.maxWidth = "90%";

image.style.maxHeight = "90%";

image.style.borderRadius = "15px";

overlay.appendChild(image);

overlay.addEventListener("click", () => {

overlay.remove();

});

document.body.appendChild(overlay);

});

});

// =========================
// YEAR AUTO UPDATE
// =========================

const year =
document.getElementById("year");

if(year){

year.textContent =
new Date().getFullYear();

}

// =========================
// CONSOLE SIGNATURE
// =========================

console.log(
"Kamla Power Solutions Website Loaded"
);
