let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "0123456789";
let symbolSet = "`~!@#$%^&*()_-=+.";

let passBox = document.getElementById("passwordBox");
let lenBox = document.getElementById("length");
let upperBox = document.getElementById("upper");
let lowerBox = document.getElementById("lower");
let numBox = document.getElementById("num");
let symBox = document.getElementById("symbol");
let btn = document.getElementById("btn");


function givePassword(dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

function generatePassword(password = ""){
    if(upperBox.checked){
        password += givePassword(upperSet);
    }
    if(lowerBox.checked){
        password += givePassword(lowerSet);
    }
    if(numBox.checked){
        password += givePassword(numberSet);
    }
    if(symBox.checked){
        password += givePassword(symbolSet);
    }
    if(password.length < lenBox.value){
        return generatePassword(password);
    }
    passBox.innerText = trimString(password,lenBox.value);
}

btn.addEventListener("click",()=>{
    generatePassword();
})

function trimString(str,num) {
    if(str.length > num){
        str = str.substring(0,num);
    }
    return str;
}

generatePassword();


