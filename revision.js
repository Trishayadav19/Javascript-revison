/*********************************************************************
                    JAVASCRIPT REVISION
                    Author : Trisha Yadav
*********************************************************************/


/*********************************************************************
                         ES6 FEATURES
*********************************************************************/

// Q1. Swap Two Variables
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);

//---------------------------------------------------------------

// Q2. Arrow Function
const add = (a, b) => a + b;

console.log(add(5, 7));

//---------------------------------------------------------------

// Q3. Template Literals
let name = "Trisha";

console.log(`Hello ${name}`);


/*********************************************************************
                    CONDITIONAL STATEMENTS
*********************************************************************/

/*-------------------------------------------------------------------
Q1. Check Even or Odd
-------------------------------------------------------------------*/

// let a = Number(prompt("Enter Number"));

// if (a % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

/*-------------------------------------------------------------------
Q2. Find Largest of Three Numbers
-------------------------------------------------------------------*/

let a = 123;
let b = 2;
let c = 23;

if (a > b && a > c) {
    console.log("a is Largest");
} else if (b > a && b > c) {
    console.log("b is Largest");
} else {
    console.log("c is Largest");
}

/*-------------------------------------------------------------------
Q3. Grade System
-------------------------------------------------------------------*/

let marks = 56;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else if (marks >= 40) {
    console.log("D");
} else {
    console.log("Fail");
}

/*-------------------------------------------------------------------
Q4. Positive, Negative or Zero
-------------------------------------------------------------------*/

let num = Number(prompt("Enter Number"));

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


/*********************************************************************
                            LOOPS
*********************************************************************/

/*-------------------------------------------------------------------
Q5. Sum of First 5 Numbers
-------------------------------------------------------------------*/

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum);


/*-------------------------------------------------------------------
Q6. Multiplication Table
-------------------------------------------------------------------*/

let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


/*-------------------------------------------------------------------
Q7. Reverse Counting
-------------------------------------------------------------------*/

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


/*********************************************************************
                        STRING PROGRAMS
*********************************************************************/

/*-------------------------------------------------------------------
Q8. Reverse a String
-------------------------------------------------------------------*/

let str = "trisha";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

console.log(reverse);


/*-------------------------------------------------------------------
Q9. Count Vowels
-------------------------------------------------------------------*/

let str = "javascript";
let count = 0;

for (let i = 0; i < str.length; i++) {

    let ch = str[i].toLowerCase();

    if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u"
    ) {
        count++;
    }
}

console.log("Total Vowels :", count);


/*-------------------------------------------------------------------
Q10. Count Frequency of Characters
-------------------------------------------------------------------*/

let str = "hello world";
let count = {};

for (let i = 0; i < str.length; i++) {

    let ch = str[i];

    if (count[ch]) {
        count[ch]++;
    } else {
        count[ch] = 1;
    }
}

console.log(count);

/*********************************************************************
                            ARRAYS
*********************************************************************/

/*-------------------------------------------------------------------
Q11. Find Largest Element in an Array
-------------------------------------------------------------------*/

let arr = [12, 45, 67, 2, 89];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {
        largest = arr[i];
    }

}

console.log("Largest Element :", largest);


/*-------------------------------------------------------------------
Q12. Find Smallest Element in an Array
-------------------------------------------------------------------*/

let arr = [12, 45, 67, 2, 89];

let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] < smallest) {
        smallest = arr[i];
    }

}

console.log("Smallest Element :", smallest);


/*-------------------------------------------------------------------
Q13. Reverse an Array
-------------------------------------------------------------------*/

let arr = [12, 52, 6, 1];

let reverse = [];

for (let i = arr.length - 1; i >= 0; i--) {

    reverse.push(arr[i]);

}

console.log(reverse);



/*********************************************************************
                            OBJECTS
*********************************************************************/

/*-------------------------------------------------------------------
Q14. Create Student Object
-------------------------------------------------------------------*/

const student = {

    name: "Trisha",
    age: 18,
    city: "Delhi"

};

console.log(student);



/*********************************************************************
                        MINI PROJECT - 1
                            ATM MACHINE
*********************************************************************/

let balance = 5000;

function checkBalance() {

    console.log("Current Balance : ₹" + balance);

}

function deposit(amount) {

    balance += amount;

    console.log("₹" + amount + " Deposited Successfully");

    console.log("Current Balance : ₹" + balance);

}

function withdraw(amount) {

    if (amount <= balance) {

        balance -= amount;

        console.log("₹" + amount + " Withdrawn Successfully");

        console.log("Current Balance : ₹" + balance);

    }

    else {

        console.log("Insufficient Balance");

    }

}

let choice = Number(prompt(
    "ATM MENU\n\n" +
    "1. Check Balance\n" +
    "2. Deposit\n" +
    "3. Withdraw\n" +
    "4. Exit"
));

switch (choice) {

    case 1:

        checkBalance();

        break;


    case 2:

        let depositAmount = Number(prompt("Enter Deposit Amount"));

        deposit(depositAmount);

        break;


    case 3:

        let withdrawAmount = Number(prompt("Enter Withdraw Amount"));

        withdraw(withdrawAmount);

        break;


    case 4:

        console.log("Thank You! Visit Again.");

        break;


    default:

        console.log("Invalid Choice");

}



/*********************************************************************
                    MINI PROJECT - 2
                    STUDENT RESULT SYSTEM
*********************************************************************/

let name = prompt("Enter Student Name");

let m1 = Number(prompt("Enter Marks 1"));
let m2 = Number(prompt("Enter Marks 2"));
let m3 = Number(prompt("Enter Marks 3"));
let m4 = Number(prompt("Enter Marks 4"));
let m5 = Number(prompt("Enter Marks 5"));

let total = m1 + m2 + m3 + m4 + m5;

let percentage = total / 5;

let grade;

if (percentage >= 90) {

    grade = "A+";

}

else if (percentage >= 80) {

    grade = "A";

}

else if (percentage >= 70) {

    grade = "B";

}

else if (percentage >= 60) {

    grade = "C";

}

else if (percentage >= 33) {

    grade = "D";

}

else {

    grade = "F";

}


if (percentage >= 33) {

    console.log("Pass");

}

else {

    console.log("Fail");

}


console.log("Student Name :", name);

console.log("Total Marks :", total);

console.log("Percentage :", percentage);

console.log("Grade :", grade);



/*********************************************************************
                    MINI PROJECT - 3
                        LOGIN SYSTEM
*********************************************************************/

let username = prompt("Enter Username");

let password = prompt("Enter Password");

if (username === "admin" && password === "1234") {

    console.log("Welcome");

}

else {

    console.log("Invalid Credentials");

}

/*********************************************************************
                    MINI PROJECT - 4
                        SHOPPING CART
*********************************************************************/

/*-------------------------------------------------------------------
                    Shopping Cart Using Functions
-------------------------------------------------------------------*/

let cart = [];
let total = 0;

function addProduct(name, price) {

    cart.push({ name, price });

    total += price;

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(name + " Added to Cart");

}


function viewCart() {

    console.log("Your Cart");

    console.log(cart);

}


function calculateTotal() {

    console.log("Total Amount = ₹" + total);

}


let choice = Number(prompt(
    "========= SHOPPING CART =========\n\n" +
    "1. Add Product\n" +
    "2. View Cart\n" +
    "3. Calculate Total\n" +
    "4. Exit"
));

switch (choice) {

    case 1:

        let product = prompt("Enter Product Name");

        let price = Number(prompt("Enter Product Price"));

        addProduct(product, price);

        break;


    case 2:

        viewCart();

        break;


    case 3:

        calculateTotal();

        break;


    case 4:

        console.log("Thank You For Shopping!");

        break;


    default:

        console.log("Invalid Choice");

}




// /*********************************************************************
//                         OOP IN JAVASCRIPT
// *********************************************************************/


// /*-------------------------------------------------------------------
//                     Product Class
// -------------------------------------------------------------------*/

class Product {

    constructor(name, price) {

        this.name = name;

        this.price = price;

    }

}



// /*-------------------------------------------------------------------
//                     Shopping Cart Class
// -------------------------------------------------------------------*/

class ShoppingCart {

    constructor() {

        this.cart = [];

    }


    addProduct(name, price) {

        const product = new Product(name, price);

        this.cart.push(product);

        console.log(`${name} Added Successfully.`);

    }


    viewCart() {

        if (this.cart.length === 0) {

            console.log("Cart is Empty.");

            return;

        }


        console.log("Your Cart");


        this.cart.forEach((item, index) => {

            console.log(`${index + 1}. ${item.name} - ₹${item.price}`);

        });

    }


    calculateTotal() {

        let total = 0;


        for (let item of this.cart) {

            total += item.price;

        }


        console.log("Total Amount = ₹" + total);

    }

}



// /*-------------------------------------------------------------------
//                     Object Creation
// -------------------------------------------------------------------*/

const myCart = new ShoppingCart();


let choice;


do {

    choice = Number(prompt(
        "========= SHOPPING CART =========\n\n" +
        "1. Add Product\n" +
        "2. View Cart\n" +
        "3. Calculate Total\n" +
        "4. Exit"
    ));


    switch (choice) {


        case 1:

            let product = prompt("Enter Product Name");

            let price = Number(prompt("Enter Product Price"));


            myCart.addProduct(product, price);


            break;


        case 2:

            myCart.viewCart();


            break;


        case 3:

            myCart.calculateTotal();


            break;


        case 4:

            console.log("Thank You For Shopping!");


            break;


        default:

            console.log("Invalid Choice");

    }


} while (choice !== 4);



// /*********************************************************************
//                     END OF REVISION
// *********************************************************************/





