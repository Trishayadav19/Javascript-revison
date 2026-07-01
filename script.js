// // // // ques=1
// let a = 10;
// let b = 20;

// [a,b]=[b,a];

// console.log(a,b);
// // //answer=20,10

// // // ques=2
// const add =(a,b) => a+b;
// console.log(add(5,7));
// // // anserw = 12

// // // ques=3
// let name = "trisha";
// console.log(`hello ${name}`);
// // // answer = hello trisha

// // // ques = 4
// let arr1 = [1,2];
// let arr2 = [...arr1, 3, 4];

// console.log(arr2);
// // // answer = 1,2,3,4

// // // ques = 5
// let obj = {
//     name: "Trisha",
//     age: 18
// };

// let { name, age } = obj;

// console.log(name);
// // // answer=trisha

// // // ques =  6
// let arr = [10, 20, 30];

// for (let value of arr) {
//     console.log(value);
// }
// // // answer=10,20,30

// // // ques = 7
// let arr = [10, 20, 30];

// for (let index in arr) {
//     console.log(index);
// }
// // // answer = 0,1,2,

// // // ques = 8
// function greet(name = "Guest") {
//     console.log(name);
// }

// greet();
// // // answer = Guest

// // // ques = 9
// const person = {
//     name: "Trisha"
// };

// person.name = "Rahul";

// console.log(person.name);
// // // answer = Rahul

// // // ques = 10
// const arr = [1, 2, 3];

// arr.push(4);

// console.log(arr);
// // // answer = 1,2,3,4

// // // ques = 11
// let x = 5;

// {
//     let x = 10;
//     console.log(x);
// }

// console.log(x);
// // // answer = 10,5

// // // ques = 12
// let name = "Trisha";

// function test() {
//     console.log(name);
// }

// test();
// // // answer = trisha

// ---1
// let a =Number(prompt("enter number"))
// if(a%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// ---2
// let a = 123;
// let b = 2;
// let c = 23;
// if(a&&b,a&&c){
//     console.log("a");
// }else if(b&&a,b&&c){
//     console.log("b");
// }else{
//     console.log("c")
// }

// ---3
// let marks = 56
// if(marks>=90){
//     console.log("A");
// }else if(marks >=75){
//     console.log("B");
// }else if(marks>=60){
//     console.log("C")
// }else if(marks>=40){
//     console.log("D")
// }else{
//     console.log("fail")
// }

// ---4
// let num = Number(prompt("enter number"));
// if(num>0){
//     console.log("positive")
// }else if(num<0){
//     console.log("negative")
// }else{
//     console.log("zero")

// }

// ---5
// let n = 0;
// for(let i=1; i<=5; i++){
//     sum = n;
// }

// console.log(sum)

// ---6
// let num = 7;
// for(let i=1; i<=10; i++){
//     console.log(num + "x" + i + "=" + (num*i));
// }

// ---7
// let i=0
// for(let i=10; i>=1; i--){
//     console.log(i);
// }


// --8
// let str="trisha";
// let reverse="";
// for(let i=str.length-1;i>=0;i--){
//     reverse=reverse+str[i];

// }
// console.log(reverse)

// ----9
// let str = "javascript";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i].toLowerCase();

//     if (
//         ch === "a" ||
//         ch === "e" ||
//         ch === "i" ||
//         ch === "o" ||
//         ch === "u"
//     ) {
//         count++;
//     }
// }

// console.log("Total Vowels:", count);

//---10

// let str = "hello world";
// let count={};
// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     if (count[ch]) {
//         count[ch]++;
//     } else {
//         count[ch]/ = 1;
//     }
// }

// console.log(count)

// --11
// let arr = [12, 45, 67, 2, 89];

// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log("Largest Element:", largest);


// ---12
// let arr = [12, 45, 67, 2, 89];
// let smallest = arr[0];
// for(let i = 1; i > arr.length; i++){
//     if(arr[i]<smallest){
//         samallest=arr[i]
//     }
// }
// console.log("smallest element:", smallest);

// ---13
// let arr="12, 52, 6, 1";
// let reverse="";
// for(let i=arr.length-1;i>=0;i--){
//     reverse=reverse+arr[i];
// }
// console.log(reverse);

// ---14
// const student={
// name:"Trisha",
// age:18,
// city:"Delhi"
// }
// console.log(student);


// mini project type question:
// let balance = 5000;

// function checkBalance() {
//     console.log("Current Balance: ₹" + balance);
// }

// function deposit(amount) {
//     balance = balance + amount;
//     console.log("₹" + amount + " Deposited Successfully");
//     console.log("Current Balance: ₹" + balance);
// }

// function withdraw(amount) {
//     if (amount <= balance) {
//         balance = balance - amount;
//         console.log("₹" + amount + " Withdrawn Successfully");
//         console.log("Current Balance: ₹" + balance);
//     } else {
//         console.log("Insufficient Balance");
//     }
// }

// let choice = Number(prompt(
//     "ATM Menu\n" +
//     "1. Check Balance\n" +
//     "2. Deposit\n" +
//     "3. Withdraw\n" +
//     "4. Exit"
// ));

// switch (choice) {

//     case 1:
//         checkBalance();
//         break;

//     case 2:
//         let depositAmount = Number(prompt("Enter Deposit Amount"));
//         deposit(depositAmount);
//         break;

//     case 3:
//         let withdrawAmount = Number(prompt("Enter Withdraw Amount"));
//         withdraw(withdrawAmount);
//         break;

//     case 4:
//         console.log("Thank You! Visit Again.");
//         break;

//     default:
//         console.log("Invalid Choice");
// }

// ----
// let name = prompt("enter the student name:");

// let m1 = Number(prompt("enter the marks:"))
// let m2 = Number(prompt("enter the marks:"))
// let m3 = Number(prompt("enter the marks:"))
// let m4 = Number(prompt("enter the marks:"))
// let m5 = Number(prompt("enter the marks:"))

// let total = m1 + m2 + m3 + m4 + m5;
// let percentage = total/5;

// let grade;
// if(percentage>=90){
//     grade = "A+";
// }else if(percentage >=80){
//     grade = "A";
// }else if(percentage>=70){
//     grade = "B";
// }else if(percentage>=60){
//     grade = "C";
// }else if(percentage>=33){
//     grade = "D";
// }else{
//     grade = "F";
// }

// if(percentage>=33){
//     console.log("pass");
// }else{
//     console.log("fail");
// }

// // console.log("Student Name:"+ name);
// // console.log("Student marks:"+ total);
// // console.log("Student percentage:"+ percentage);
// // console.log("Student grade:" +grade);

// // ---
// // let username = prompt("Enter the username:");
// // let password = prompt("Enter the password:");

// // if(username==="admin" && password==="1234"){
// //     console.log("Welcome");
// // }else{
// //     console.log("Invalid Credentials");
// // }

// // -----
// let cart=[];
// let total=0;

// function addProduct(name,price){
//     cart.push({ name, price });

//     localStorage.setItem("cart", JSON.stringify(cart));
//     console.log(name + " Added to cart");
// }

// function viewCart(){
//     console.log("your card:" );
//     console.log(cart);
// }

// function calculateTotal(){
//     console.log("total amount= ₹ "+ total);
// } 

// let choice = Number(prompt(
//     "1. Add Product\n" +
//     "2. View Cart\n" +
//     "3. Calculate Total\n" +
//     "4. Exit"
// ));

// // const numArray = prompt("number dedo")
// // const choice  = numArray ? numArray.split(/\s+/) : [];

// // const choice = [1 , 2, 3, ,4];

// // for(let i = 0 ; i < choice.length ; i++){
// switch (choice) {

//     case 1:
//         let product = prompt("Enter Product Name");
//         let price = Number(prompt("Enter Product Price"));

//         addProduct(product, price);
       
//         break;

//     case 2:
//         viewCart();
//         break;

//     case 3:
//         calculateTotal();
//         break;

//     case 4:
//         console.log("Thank You for Shopping!");
//         break;

//     // default:
//     //     console.log("Invalid Choice");
// }











// Product Class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Shopping Cart Class
class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    addProduct(name, price) {
        const product = new Product(name, price);
        this.cart.push(product);
        console.log(`${name} added to cart.`);
    }

    viewCart() {
        if (this.cart.length === 0) {
            console.log("Cart is empty.");
            return;
        }

        console.log("Your Cart:");
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

// Object of ShoppingCart
const myCart = new ShoppingCart();

// Menu
let choice;

do {
    choice = Number(prompt(
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
            console.log("Thank You for Shopping!");
            break;

        default:
            console.log("Invalid Choice");
    }

} while (choice !== 4);
