// Task 1: Variables and Data Types

let employeeName = "Marie Curie";
const employeeID = 9;
var isActive = true;

console.log(employeeName,typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive,typeof(isActive));


//Task 2: Compound Data Types

let products = ["Iphone", "Charger", "Headphones"]
const productDetails = {
        name: products,
        price: 500.00,
        inStock: 10,
}
console.log(products, productDetails);


//Task 3: Assignment Operators

let accountBalance = 1000;

accountBalance += 200;
console.log('value of accountBalance is : ' +accountBalance);

accountBalance -= 150;
console.log ('value of accountBalance is : ' -accountBalance);

accountBalance *= 1;
console.log ('value of accountBalance is : ' *accountBalance);

accountBalance /=5
console.log ('value of accountBalance is : ' /accountBalance);

accountBalance %= .85;
console.log ('value of accountBalance is : ' %accountBalance);


//Task 4 Comparison Operators

var employeeScore1 = 10;
var employeeScore2 = 20;

let result = employeeScore1 > employeeScore2;
console.log(result)

let result = employeeScore1 < employeeScore2;
console.log(result)

let result = employeeScore1 >== employeeScore2;
console.log(result)

let result = employeeScore1 <== employeeScore2;
console.log(result)

let result = employeeScore1 === employeeScore2;
console.log(result)

let result = employeeScore1 !== employeeScore2;
console.log(result)