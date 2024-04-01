class Person {

    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    getFullName() {
        return `Hello my fullname is ${this.firstname} ${this.lastname}`;
    }

    greet() {
        return `${this.getFullName()} and i am ${this.age} years old.`;
    }
}

const p1 = new Person('jaimin', 'koladiya', 21);
console.log(p1.greet());