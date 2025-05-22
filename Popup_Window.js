let dot = document.getElementById("three");
let cross = document.getElementById("cross");
let box = document.getElementById("pop-box");
let check = "false";

dot.addEventListener("click",()=>{
    box.style.left = "5px";
})

cross.addEventListener("click",()=>{
    box.style.left = "-500px";
})