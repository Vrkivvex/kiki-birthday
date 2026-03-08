const container = document.getElementById("hearts-container");

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤";

heart.style.left = Math.random()*100+"vw";

heart.style.animationDuration = 3 + Math.random()*3 + "s";

container.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,300);

const text = "Happy Birthday Kiki 💗";

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,80);

}

}

typeWriter();

/* PHOTO LIGHTBOX */

document.addEventListener("DOMContentLoaded", () => {

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (!lightbox || !lightboxImg) return;

document.querySelectorAll(".gallery-grid img").forEach(img => {

img.onclick = () => {
lightbox.style.display = "flex";
lightboxImg.src = img.src;
};

});

lightbox.onclick = () => {
lightbox.style.display = "none";
};

});