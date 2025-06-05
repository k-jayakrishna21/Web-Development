const questions = [
    {
        que : "What is HTML",
        a : "Markup Language",
        b : "Programming Language",
        c : "Style Sheet Language",
        d : "None",
        correct : "a"
    },

     {
        que : "What is CSS",
        a : "Markup Language",
        b : "Programming Language",
        c : "Style Sheet Language",
        d : "None",
        correct : "c"
    },

    {
        que : "What is JAVA",
        a : "Markup Language",
        b : "Programming Language",
        c : "Style Sheet Language",
        d : "None",
        correct : "b"
    },

    {
        que : "What is JAVA SCRIPT",
        a : "Markup Language",
        b : "Scripting Language",
        c : "Style Sheet Language",
        d : "None",
        correct : "b"
    }
]

let index = 0;
let totalQues = questions.length;
let right = 0;
let wrong = 0;
let qb = document.getElementById("quesBox");
let btn = document.getElementById("btn");
let options = document.querySelectorAll(".options");

function quizApp() {
    if(index == totalQues){
        return endQuiz();
    }

    resetQuiz();
    let data = questions[index];
    qb.innerText = ` ${index+1}) ${data.que}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}


function submitQuiz() {
    let ans = getAnswer();
    let data = questions[index];
    if(ans == data.correct){
        right++;
    }
    else {
        wrong--;
    }
    index++;
    quizApp();
    return;
}

function getAnswer() {
    let answer;
    options.forEach((val)=>{
        if(val.checked){
            answer = val.value;
        }
    })

    return answer;
}


btn.addEventListener("click",()=>{
    quizApp();
})

function resetQuiz() {
    options.forEach((option)=>{
        option.checked = false;
    })
}

function endQuiz() {
    document.querySelector(".main-box").innerHTML = `<div style="text-align : center"> <h2>Thanks for playing quiz<h2/>
                    <h3> ${right} out of ${totalQues} are correct </h3> </div>
    `
}

quizApp();     




