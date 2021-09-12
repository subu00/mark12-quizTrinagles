const input = document.querySelectorAll(".user-angle")
const button = document.querySelector("button")
const output = document.querySelector(".area-output")


function calulateSum(angle1,angle2,angle3) {
    const sumofAngles = angle1 + angle2 + angle3
    return sumofAngles;
}

function tringle() {
    const sumofAngles = calulateSum(Number.parseInt(input[0].value,10),
    Number.parseInt(input[1].value,10), Number.parseInt(input[2].value,10))
    if (sumofAngles === 180) {
        output.textContent = "Yay, the angles form a triangle!"
    } else {
        output.textContent = "Oh Oh! The angle doesn't form a triangle"
    }

}

button.addEventListener('click', tringle)

