const input = document.querySelectorAll(".user-angle")
const button = document.querySelector("button")
const output = document.querySelector(".area-output")


function calulateArea() {
    const base = Number.parseInt(input[0].value,10)
    const height = Number.parseInt(input[1].value,10);

    if(base <=0 || height <=0) {
        output.textContent = "Please enter values greater than 0"
    }
    
    else if(base >0 && height >0) {

        output.textContent = `Area of Triangle is: ${(base * height)/2} m²`
    } else {
        output.textContent = "Please enter values greater than 0"
    }
}

button.addEventListener('click', calulateArea)

