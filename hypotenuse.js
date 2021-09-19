const input = document.querySelectorAll(".user-angle")
const button = document.querySelector("button")
const output = document.querySelector(".area-output")


function calulateSquare(a,b) {
    const square = a*a + b*b;
    return square;
}

function calculateHypotenuse() {
    const sumofSquare = calulateSquare(Number.parseInt(input[0].value,10),
    Number.parseInt(input[1].value,10))

    if(Number(input[0].value <=0 || Number(input[1].value <=0))) {
        output.textContent = "Enter values greater than 0"
    }
    
    
    else if(sumofSquare >0) {
        const answer = Math.round(Math.sqrt(sumofSquare))
        output.textContent = `The length of hypotenuse is ${answer} unit.`

    } else {
        output.textContent = "Enter values greater than 0"
    }
}

button.addEventListener('click', calculateHypotenuse)

