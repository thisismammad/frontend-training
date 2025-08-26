"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    _name;
    _balance;
    //   readonly id: number;
    //   name: string;
    nickname;
    //   private _balance: number;
    constructor(id, _name, _balance) {
        this.id = id;
        this._name = _name;
        this._balance = _balance;
        // this.id = id;
        // this.name = name;
        // this.nickname = nickname;
        // this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    //   getBalance(): number {
    //     return this._balance;
    //   }
    get balance() {
        return this._balance;
    }
    set name(name) {
        if (name.length < 3)
            throw new Error("Invalid name");
        this._name = name;
    }
    calculateTax() { }
}
const account = new Account(1, "mohammad", 0);
class SeatAssignment {
}
const seats = new SeatAssignment();
seats.A1 = "mohammad";
seats.A2 = "ali";
// static
class Ride {
    static _activeRides = 0;
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
// verasat
class Persion {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Student extends Persion {
    studentId;
    constructor(studentId, fistName, lastName) {
        super(fistName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("takeing a test");
    }
}
const newStudent = new Student(1, "Monammad", "Davari");
console.log(newStudent.fullName);
// method overwrite
class Teacher extends Persion {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
const teacher = new Teacher("Amin", "Rezaei");
console.log(teacher.fullName);
function printNames(people) {
    for (let p of people) {
        console.log(p.fullName);
    }
}
console.log("/////////////////");
printNames([new Student(1, "mohammad", "davari"), new Teacher("ali", "rezai")]);
//# sourceMappingURL=index.js.map