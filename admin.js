//OOP
class Employee {
  constructor(employeeId, name, salary, position, age) {
    this.employeeId = employeeId;
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.age = age;
  }

  getEmployeeDetails() {
    return `${this.employeeId} -- ${this.name} -- ${this.salary} -- ${this.position} -- ${this.age}`;
  }
}

class Company {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.employees = [];
  }

  addEmployees(employee) {
    this.employees.push(employee);
  }

  getTotalSalaries() {
    let total = 0;
    for (let i = 0; i < this.employees.length; i++) {
      total += this.employees[i].salary;
    }
    return total;
  }

  // getAllEmployees() {
  //     return this.employees
  // }
}

let company = new Company(
  "Global World PLC",
  "Plot 50, Lincoln road Lagos Nigeria"
);
document.getElementById(
  "welcome"
).innerHTML = `Welcome to ${company.name} Admin`;
document.getElementById("address").innerHTML = `Address - ${company.address}`;

console.log(company.employees);

let form = document.getElementById("employeeForm");
// console.log(form)

let employeeId = 0;
// EventListener that listens to the submit event..
let addEmployee = (event) => {
  // console.log("You clicked the submit Button", event)
  event.preventDefault();
  employeeId++;
  // Take the element of the Inputs
  const fullNameElement = form.elements["fullName"];
  const salaryElement = form.elements["salary"];
  const positionElement = form.elements["position"];
  const ageElement = form.elements["age"];

  // Get the element's value
  const fullNameValue = fullNameElement.value;
  const salaryValue = parseInt(salaryElement.value);
  const postionValue = positionElement.value;
  const ageValue = parseInt(ageElement.value);

  console.log(fullNameValue, salaryValue, postionValue, ageValue);
  let employee = new Employee(
    employeeId,
    fullNameValue,
    salaryValue,
    postionValue,
    ageValue
  );
  console.log(employee);

  company.addEmployees(employee);

  console.log(company);
  
  let detailText = "";
  for (let i = 0; i < company.employees.length; i++) {
    detailText += company.employees[i].getEmployeeDetails() + "<br>";
  }

  document.getElementById("employeeDetails").innerHTML = detailText;
  document.getElementById("totalSalary").innerHTML = `The total salary for all employees is - ${company.getTotalSalaries()}`
  form.reset()

  // add the employee details to the company
};
form.addEventListener("submit", addEmployee);

// let welcomeText = document.getElementById("welcome");
// welcomeText.addEventListener("mouseenter", ()=> {
//     console.log("You have entered this element")
// } )
