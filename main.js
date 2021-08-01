console.log("Yipee!! We're in the main file")
// DRY - do not repeat yourself
// Object Literals - 
let car1 = {
    brand: "Toyota",
    model: "Venza",
    year: "2020",
    moveForward : function () {
        console.log("I am moving forward")
    },
    stop: function () {
        console.log("I have stopped")
    }
}

let car2 = {
    brand: "Benz",
    model: "GLk",
    year: "2019",
    moveForward: function () {
        console.log("I am moving forward")
    },
    stop: function () {
        console.log("I have stopped")
    }
}



// the .  []
// console.log(car1)
// console.log(car.brand)

// Class 
// this - represent the actual instance of the class. back tick ``
// constructor - 
function Car (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
Car.prototype.moveForward = function () {
    return `${this.brand} is moving forward`
}
Car.prototype.stop = function () {
    console.log(`${this.brand} is stopping`);
}
Car.prototype.setMilage = function(mileage) {
    this.mileage = mileage
}



// new 
let car3 = new Car("Toyota", "Venza", "2020");
let car4 = new Car ("Benz", "CLA", "2019");
car3.setMilage(200000)
car4.setMilage(150000)

console.log(car3.moveForward())
console.log(car4)

// Implement a class named Rectangle, which has 2 number fields a,b (add constructor to set the values)
// declare a method getArea() which will return the area of the rectangle and 
// declare a method getPerimeter()
// initialize four instances and display the areas and perimeters of the instances.

function Rectangle (a, b) {
    this.length = a
    this.breadth = b
}

Rectangle.prototype.getArea = function () {
    return this.length * this.breadth
}

Rectangle.prototype.getPerimeter = function() {
    return 2*(this.length + this.breadth)
}

let rect1 = new Rectangle(5, 6)
console.log(rect1);
// console.log(rect1.getArea(), rect1.getPerimeter());

let rect2 = new Rectangle(4,3)
// console.log(rect2.getArea(), rect2.getPerimeter());

let rect3 = new Rectangle(10, 5)
// console.log(rect3.getArea(), rect3.getPerimeter());

let rect4 = new Rectangle(2,6)
// console.log(rect4.getArea(), rect4.getPerimeter());

// Implement a class named Circle, which has a radius - assign in the constructor function
// declare a method getArea() - pi * r**2
// declare a method getCircumference() - 2*pi*r
// initialize 3 instances and display the areas and cirumference
//PS- do not copy and paste from previous examples


function Circle(radius) {
    this.radius = radius
}

Circle.prototype.getArea = function() {
    return Math.PI * this.radius**2
}

Circle.prototype.getCircumference = function () {
    return 2 * Math.PI * this.radius
}

let circle1 = new Circle(7);
// console.log(circle1.getArea(), circle1.getCircumference());

let circle2 = new Circle(14);
// console.log(circle2.getArea(), circle2.getCircumference());

let circle3 = new Circle(21);
// console.log(circle3.getArea(), circle3.getCircumference());


// implement a Student class in which it has some properties name and age,
// declare a method to add a series of scores to the students -- Rest operator (HINT)
// declare a method to return the average score 
// declare a method that returns details about the student (the name of the student, his/her age and average score)
// initialize 3 instances and return the details of the student


function Student (name, age) {
    this.name = name; 
    this.age = age;
}

Student.prototype.setScore = function(...scores) {
    this.scores = scores
    // it takes scores and assigns them to an array scores  [60,70,80,90,95]
}

Student.prototype.getAverageScores = function () {
    let total = 0;
    for(let i = 0; i<this.scores.length; i++) {
        total += this.scores[i] // total = total + 60
    }
    this.avgScore = total/this.scores.length
    return this.avgScore
}
Student.prototype.getDetails = function () {
    return `${this.name} who is ${this.age} years old has an average score of ${this.avgScore}`
}

let student1 =  new Student("David", 20)

student1.setScore(60,50,70,80,90,100)
student1.getAverageScores()
// console.log(student1.getDetails())

let student2 = new Student("Laura", 19)

student2.setScore(60,80,70,100,95)
student2.getAverageScores()
// console.log(student2.getDetails())

let student3 = new Student("Mike", 23)

student3.setScore(60,80,75, 85,90)
student3.getAverageScores()
// console.log(student3.getDetails())



// prototype method is an efficient way to handle class methods



// implement a class named Triangle  (right-angled triangle)
// Declare a method getArea
// Declare a method getPerimeter
// Declare a method that returns the details about the triangle (Area and the Perimeter)
// Instantiate 1 instance..
// Prototype method
// Do not copy and paste. 

function Triangle(a,b,c) {
    this.breadth = a
    this.height = b
    this.hypotenus = c
}

// 1/2 * base * height
Triangle.prototype.getArea = function() {
    return 0.5 * this.breadth * this.height
}

// add all the sides
Triangle.prototype.getPerimeter = function () {
    return this.breadth + this. height + this.hypotenus
}

Triangle.prototype.getDetails = function() {
    return `The triangle has an area of ${this.getArea()} and a perimeter of ${this.getPerimeter()}`
}

let triangle1 = new Triangle(10, 8, 12)
console.log(triangle1.getDetails())
