// Object - literals
const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2015,
  moveForward: function () {
    console.log("I am moving forward");
  },
  stop: function () {
    console.log("I have stopped");
  },
};

const car2 = {
  brand: "Benz",
  model: "CLA",
  year: 2019,
  moveForward: function () {
    console.log("I am moving forward");
  },
  stop: function () {
    console.log("I have stopped");
  },
};

// console.log(car1);
// console.log(car2);

// classes

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  moveForward() {
    return "i am moving Forwrad";
  }
}

const car = new Car("Honda", "Accord", 2017);
// console.log(car);

// Object create ( Object of prototypes)
//Get all methods available in the class and place them in an an object literals

const bookPrototypes = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    return `${this.title} is ${new Date().getFullYear() - this.year} years old`;
  },
};

const book1 = Object.create(bookPrototypes);
(book1.title = "Forbes"), (book1.author = "James Willis");
book1.year = 2015;

// console.log(book1);
// console.log(book1.getSummary())

const rectanglePrototypes = {
  getArea: function () {
    return this.length * this.breadth;
  },
  getPerimeter: function () {
    return 2 * (this.length + this.breadth);
  },
};

const rectangle1 = Object.create(rectanglePrototypes);
rectangle1.length = 3;
rectangle1.breadth = 5;

// console.log(rectangle1.getArea())
// console.log(rectangle1.getPerimeter())

const circleProtoTypes = {
  getArea: function () {
    return Math.PI * this.radius ** 2;
  },
  getCircumference: function () {
    return 2 * Math.PI * this.radius;
  },
};

const circle1 = Object.create(circleProtoTypes);
circle1.radius = 7;

console.log(circle1.getArea());
console.log(circle1.getCircumference());




const studentPrototypes = {
  setScores: function (...scores) {
    this.scores = scores;
  },
  getAverageScores: function () {
    let total = 0;
    for (let i = 0; i < this.scores.length; i++) {
      total += this.scores[i]; // total = total + 60
    }
    this.avgScore = total / this.scores.length;
    return this.avgScore;
  },
  getDetails: function() {
    return `${this.name} who is ${this.age} years old has an average score of ${this.avgScore}`
  }
};

const student1 = Object.create(studentPrototypes) 
student1.name = "Micheal King"
student1.age = 23

student1.setScores(10,20,25,30, 35)
console.log(student1);
console.log(student1.getAverageScores())
console.log(student1.getDetails())
