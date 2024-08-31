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

let accountBalance = 1050.00;

accountBalance += 100;
console.log('value of accountBalance is : ' +accountBalance)

accountBalance -= 50;
console.log ('value of accountBalance is : ' -accountBalance)

accountBalance *= 3;
console.log ('value of accountBalance is : ' *accountBalance)

accountBalance /=4
console.log ('value of accountBalance is : ' /accountBalance)

accountBalance %= 14;
console.log ('value of accountBalance is : ' %accountBalance)


