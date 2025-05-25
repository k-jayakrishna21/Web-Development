let box = document.getElementById("box");

box.addEventListener("mouseenter",(e)=>{
    let x = e.pageX - box.offsetLeft;
    let y = e.pageY - box.offsetTop;
    box.style.setProperty("--xPos",x+"px");
    box.style.setProperty("--yPos",y+"px");
})