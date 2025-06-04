let body = document.getElementById("bd");
let btn = document.getElementById("btn");
let text = document.getElementById("colorCode");

function getColor() {
    let hexNumber = Math.floor(Math.random() * 16777215 );
    let hexCode = "#" + hexNumber.toString(16);
    body.style.backgroundColor = hexCode;
    text.innerText = hexCode;
}

btn.addEventListener("click",()=>{
   getColor()
});



getColor();