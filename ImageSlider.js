const images = ["photo1.jpeg","photo2.jpeg","photo3.jpeg"];


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let slide = document.getElementById("slides");

let counter = 0;

btn1.addEventListener("click",()=>{
    counter = ( (counter - 1) + images.length ) % images.length;
    slide.src = images[counter];
})

btn2.addEventListener("click",()=>{
    counter = ((counter + 1) % images.length);
    slide.src = images[counter];
})

