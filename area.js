const input = document.querySelectorAll(".user-angle")
const button = document.querySelector("button")
const output = document.querySelector(".area-output")


function calulateArea() {
    const base = Number.parseInt(input[0].value,10)
    const height = Number.parseInt(input[1].value,10);

    output.textContent = `Area of Triangle is: ${(base * height)/2} m²`
}

button.addEventListener('click', calulateArea)

