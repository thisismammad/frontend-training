class Account {
  //   readonly id: number;
  //   name: string;
  nickname?: string;
  //   private _balance: number;

  constructor(
    public readonly id: number,
    private _name: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.name = name;
    // this.nickname = nickname;
    // this._balance = balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");

    this._balance += amount;
  }
  //   getBalance(): number {
  //     return this._balance;
  //   }
  get balance(): number {
    return this._balance;
  }
  set name(name: string) {
    if (name.length < 3) throw new Error("Invalid name");
    this._name = name;
  }
  private calculateTax() {}
}

const account = new Account(1, "mohammad", 0);

class SeatAssignment {
  [seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats.A1 = "mohammad";
seats.A2 = "ali";

// static
class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
  static get activeRides(): number {
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
  constructor(public firstName: string, public lastName: string) {}
  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends Persion {
  constructor(public studentId: number, fistName: string, lastName: string) {
    super(fistName, lastName);
  }
  takeTest() {
    console.log("takeing a test");
  }
}

const newStudent = new Student(1, "Monammad", "Davari");
console.log(newStudent.fullName);

// method overwrite
class Teacher extends Persion {
  override get fullName(): string {
    return "Professor " + super.fullName;
  }
}
const teacher = new Teacher("Amin", "Rezaei");
console.log(teacher.fullName);

function printNames(people: Persion[]) {
  for (let p of people) {
    console.log(p.fullName);
  }
}
console.log("/////////////////");
printNames([new Student(1, "mohammad", "davari"), new Teacher("ali", "rezai")]);
