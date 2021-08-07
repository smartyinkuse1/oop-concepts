const companyName = "Global Company LTD";
const compnayAddress = "12, Ilasa Lagos Nigeria";

document.getElementById("welcome").innerHTML = companyName
document.getElementById("address").innerHTML = compnayAddress

const employees = []

let form = document.getElementById("myForm")

form.addEventListener("employeeForm", function (event) {
    event.preventDefault()
})