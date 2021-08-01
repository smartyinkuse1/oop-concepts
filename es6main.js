// let name = "Olayinka";
// const year  = 2010;

// function Student(name) {
//     this.name = name;
//     let score = 100;
// }

// let student1 = new Student("Olayinka")
// console.log(student1);

// class - keyword 
// constructor - main method of the class,
class Car {

    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }

    moveForward(){
        return `${this.brand} is moving forward`;
    }

    stop() {
        return `${this.brand} is stopping`;
    }

    setMileage(mileage){
        this.mileage = mileage
    }
}

let car1 = new Car("Toyota", "Venza");
console.log(car1.setMileage(1000000));
console.log(car1);


// B