// tuple
// let age: [number, string] = [123, "a"];

// enum
// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {
  Small = 0,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// functions
function calculateTax(income: number, taxYear = 2025): number {
  if (taxYear < 2025) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(1, 2024);

// object
let student: Student = {
  id: 1,
  name: "ali",
  retire: (date: Date) => console.log(date),
};
student.fax = 98921456985;

console.log(student.fax);

// aliases
type Student = {
  readonly id: number;
  name: string;
  fax?: number;
  retire: (date: Date) => void;
};

// union
function kgToPu(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.5;
  }
}

console.log(kgToPu(10));
console.log(kgToPu("10kg"));

// literal type
type Quantity = 50 | 100;
let quantity: Quantity = 100;

// nullable
function greet(name: string | null|undefined) {
  if (name) console.log(name.toLocaleUpperCase());
  else console.log("Hola!");
}

greet(null);
greet(undefined);
