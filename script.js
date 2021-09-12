const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("button");
const output = document.querySelector(".area-output");

const rightAnswer = ["yes","yes","True","yes","equilateral triangle","2"];


function calculateScore(){
    var i = 0;
    var score = 0;
    const formResults = new FormData(quizForm);
    for(let entry of formResults.entries()){ 
        var index = Number(entry[0]);  //due to this i am free to answer of question i like and get my marks
        if(entry[1] === rightAnswer[index-1]){ 
            score = score + 1;
        }
        i = i + 1;
    }
    console.log(score);
    output.innerText = "your score is:" + score;
}



submitBtn.addEventListener("click", calculateScore);