"use strict";
// tuple
// let age: [number, string] = [123, "a"];
Object.defineProperty(exports, "__esModule", { value: true });
// enum
// const small = 1;
// const medium = 2;
// const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
// functions
function calculateTax(income, taxYear = 2025) {
    if (taxYear < 2025) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(1, 2024);
// object
let student = {
    id: 1,
    name: "ali",
    retire: (date) => console.log(date),
};
student.fax = 98921456985;
console.log(student.fax);
// union
function kgToPu(weight) {
    // narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.5;
    }
}
console.log(kgToPu(10));
console.log(kgToPu("10kg"));
//# sourceMappingURL=index.js.map