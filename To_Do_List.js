let inputText = document.getElementById("ip");
let btn = document.getElementById("btn");
let list = document.getElementById("list-box");

btn.addEventListener("click",()=>{
    let text = inputText.value.trim();

    if(text === ""){
        alert("Please Enter Your Idea");
        return;
    }

    let li = document.createElement("li");
    let del = document.createElement("button");

    li.innerText = text;
    li.style.listStyleType = "none";
    // li.style.backgroundColor = "rgb(220, 83, 244)";
    del.innerText = "Delete";
    del.style.marginLeft = "5%";
    del.style.backgroundColor = "red";
    del.style.borderRadius = "5px"
    list.style.position = "relative";
    del.style.position = "absolute";
    li.style.marginBottom = "10px";
    del.style.marginBottom = "10px";
    del.style.right = "20px";

    li.appendChild(del);
    list.appendChild(li);

    del.addEventListener("click",()=>{
        list.removeChild(li);
        // li.style.textDecorationLine = "line-through";
    })

    inputText.value = "";
})

