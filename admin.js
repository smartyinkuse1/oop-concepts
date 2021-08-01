class Employee {
    constructor(staffId, name, salary, position, age) {
        this.staffId = staffId
        this.name = name
        this.salary = salary
        this.position = position
        this.age = age
    }
}

class Company {
    constructor (name, address) {
        this.name = name
        this.address = address
        this.employees = []
    }

    addEmployees(employee) {
        this.employees.push(employee)
    }

    getTotalSalaries() {
        let total = 0
        for(let i = 0; i < this.employees.length; i++) {
            total += this.employees[i].salary
        }
        return total
    }

    getAllEmployees() {
        return this.employees
    }
}

let company = new Company("Global World PLC", "Plot 50, Lincoln road Lagos Nigeria")
document.getElementById("welcome").innerHTML = `Welcome to ${company.name} Admin`
document.getElementById("address").innerHTML = `Address - ${company.address}`;

let form = document.getElementById("employeeForm");
// console.log(form)

// EventListener that listens to the submit event..
let addEmployee = (event) => {
    console.log("You clicked the submit Button", event)
    event.preventDefault()

    // Take the values from the Inputs


    // add the employee details to the company
}


form.addEventListener("submit", addEmployee )