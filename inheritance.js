//ES5 syntax

//Declaring the constructor function - this
// Base class or Parent class

// - The constructor methods and the prototype methods 
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
}

Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}
Book.prototype.getAge = function() {
    return `${this.title} is ${new Date().getFullYear() - this.year} years old`
}

// create the object -- new keyword
const book1 = new Book("Shades of brown", "Mike Dean", 2007)
const book2 = new Book("Garfield", "Frank John", 2006)

// console.log(book1)
// console.log(book2)
// console.log(book1.getSummary())
// console.log(book1.getAge())
// console.log(book2.getSummary())
// console.log(book2.getAge())




// Sub class or Child class
function Magazine(title, author, year, month, models) {
    Book.call(this, title, author, year);
    this.month = month
    this.models = models
}

Magazine.prototype = Object.create(Book.prototype)

const mag1 = new Magazine("Lifestyle Mag", "John Phillips", 2019, "January", ["Joseph", "Lionel"])

console.log(mag1.getSummary())
console.log(mag1.getAge())



// Think about objects that can inherit from another object, 
// Implement inheritance , (create both classes and use the child object to acces methods in the parent object)
 
// Base class is the House
// Child class is the Skyscraper

function House(color, address) {
    this.color = color;
    this.address = address;
}

House.prototype.getSummary = function() {
    return `This house is painted ${this.color} and is located in ${this.address}`
}


function Skyscraper(color, address, floors, elevators) {
    House.call(this, color, address)
    this.floors = floors;
    this.elevators = elevators
}

Skyscraper.prototype = Object.create(House.prototype)

const babelTowers = new Skyscraper("Red", "Block 15, Lagos Nigeria", 20, 3)

console.log(babelTowers.getSummary())
