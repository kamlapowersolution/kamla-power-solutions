// ==========================================
// Kamla Power Solutions
// script.js
// ==========================================

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const target=document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// Reveal animation

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{
    threshold:.15
});

document.querySelectorAll('.section,.service-card,.review-card,.gallery img,.stat-card').forEach(el=>{
    observer.observe(el);
});

// Counter Animation

document.querySelectorAll('.stat-card h3').forEach(counter=>{

const finalValue=counter.innerText;

if(!isNaN(parseInt(finalValue))){

let count=0;

const end=parseInt(finalValue);

const timer=setInterval(()=>{

count+=Math.ceil(end/40);

if(count>=end){

counter.innerText=finalValue;

clearInterval(timer);

}else{

counter.innerText=count+"+";

}

},40);

}

});

// Auto Review Highlight

const reviews=document.querySelectorAll(".review-card");

let reviewIndex=0;

setInterval(()=>{

reviews.forEach(card=>card.style.transform="scale(1)");

reviews[reviewIndex].style.transform="scale(1.05)";

reviewIndex++;

if(reviewIndex>=reviews.length){

reviewIndex=0;

}

},2500);

// Gallery Hover Effect

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});

console.log("Kamla Power Solutions Website Loaded Successfully.");
