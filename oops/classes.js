class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${this.years} years old`;
    }

    revised(newYear) {
        this.year = newYear;
        this.revised = true;
    }
}
const book1 = new Book('book one', 'john doe', '2013');
console.log(book1);
book1.revised('2018');
console.log(book1);