const quiz = document.querySelector(".quiz");
const button = document.querySelector("button");
const output = document.querySelector(".area-output")

const answers =['Yes','Yes','No','30°','75°','equilateral','0','acute','scalene','3'];

function calculateScore()
{
    var index=0;
    var count=0;
    const formResults=new FormData(quiz);
    for(let value of formResults.values()){
        if(value === answers[index])
        {
        count=count + 1;
    }
    index=index + 1;
}
    output.textContent = `Your Score is ${count}.`

}


button.addEventListener("click", calculateScore)