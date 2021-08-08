class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    } 

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge() {
        return `${this.title} is ${new Date().getFullYear() - this.year} years old`
    }
}


class Magazine extends Book {
    constructor(title, author, year, month, models){
        super(title, author, year)
        this.month = month
        this.models = models
    }
}

const mag1 = new Magazine("Forbes", "Mike Will", 2019, "May", ["Elon Musk", "Olayinka"])
console.log(mag1.getSummary())
console.log(mag1.getAge())

const book1 = new Book("Sherlock Holmes", "James Willis", 2012)

// console.log(book1)
// console.log(book1.getSummary())
// console.log(book1.getAge())