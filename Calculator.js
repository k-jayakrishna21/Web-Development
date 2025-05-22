let display = document.getElementById("display");
let btns = document.querySelectorAll(".btnClass");

btns.forEach(btn => {
    btn.addEventListener("click",()=>{
        let val = btn.textContent;
        if(val === "="){
            try {
                display.value = eval(display.value);
            }
            catch {
                display.value = 'ERROR';
            }
        }
        else if(val === "C"){
            display.value = "";
        }
        else{
            display.value += val;
        }
    })
});