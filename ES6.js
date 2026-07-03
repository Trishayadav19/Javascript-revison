// // -----
const products = [
  { naam: "Laptop", price: 50000, inStock: true },
  { naam: "Mouse", price: 500, inStock: false },
  { naam: "Keyboard", price: 1500, inStock: true },
];


const stock = products.filter((product) => product.inStock).map((prod) => prod.naam);
console.log(stock);


// // ----
const user = {
  naam: "Ananya",
  age: 24,
  email: "ananya@example.com",
  address: {
    city: "Mumbai",
    pincode: "400001"
  }
};

const{naam,age }=user;
const{address :{city,pincode}}=user;
console.log(naam);
console.log(age);
console.log(city);
console.log(pincode);


const {role = "guest"} = user;
console.log(role)


// // 1 se 10 tak sabhi numbers print karo for loop use karke.
let sum=0
for(i=1;i<=10;i++){
  sum+=i;
}
console.log(sum);

// // // 1 se 50 tak sabhi even numbers ka sum nikalo.
let num=50;
for(let i=0;i<=50; i += 2){
  console.log(i);
}


// // Ek number diya hai, uski table print karo (jaise 5 ka table: 5, 10, 15...50).
num  = 5;
for(i=1;i<=10;i++){
  // console.log(num + "x" + i + "=" + (num*i))
  ;
  console.log(`${num} * ${i} = ${num * i}`);
}


// // while loop use karke 1 se 5 tak factorial nikalo (5! = 120)
let i=1;
let fact=1;
while(i<=5){
  fact=fact*i;
  console.log(fact);
  i++;
}

// // Ek string diya hai ("react"), loop se har character ko alag line mein print karo.
let arr="react";
for(let val of arr){
  console.log(val+"\n");
}

// // map
// // [1, 2, 3, 4, 5] array ke har number ka square nikalo.

const arr=[1, 2, 3, 4, 5];
const num = arr.map((arr)=>arr*arr);
console.log(num);

// // ["mango", "apple", "banana"] — har fruit naam ko uppercase mein convert karo.

const list=["mango", "apple", "banana"];
const fruits = list.map((list)=>list.toUpperCase());
console.log(fruits);

// // [10, 20, 30] — har number mein 5% tax add karke naya array banao.
const list=[10,20,30];
const newList = list.map((list)=>(list*5)/100);
console.log(newList);

// // Sirf age values ka naya array banao map se.
const users = [
  { naam: "Aman", age: 25 },
  { naam: "Sneha", age: 30 },
];
const newList = users.map((users)=>users.age);
console.log(newList);


// // [1, 2, 3] array ko map se aisa transform karo ki output ["Number: 1", "Number: 2", "Number: 3"] bane.
const num=[1,2,3];
const list=num.map((list)=>`numbers: ${list}`);
console.log(list);

// // filter
// // [5, 12, 8, 20, 3, 15] — sirf woh numbers nikalo jo 10 se bade hain.
const num=[5, 12, 8, 20, 3, 15];
const a = num.filter((n)=> n >10);
console.log(a);

// // ["apple", "kiwi", "banana", "fig"] — sirf woh words nikalo jinki length 5 se zyada hai
const fruits=["apple", "kiwi", "banana", "fig"];
const newFruits=fruits.filter((nfruits)=>nfruits.length>5);
console.log(newFruits);

// // Sirf woh products nikalo jinka price 10000 se kam hai.
const products = [
  { naam: "TV", price: 30000 },
  { naam: "Fan", price: 1500 },
  { naam: "AC", price: 40000 },
];
const stock = products.filter((list)=>list.price<10000);
console.log(stock);

// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] — sirf odd numbers nikalo.
const num=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum=num.filter((newnum)=>newnum%2 != 0);
console.log(sum);

// // Sirf pass hue students ke naam ka array banao (filter + map dono use karna padega).
const students = [
  { naam: "Ravi", pass: true },
  { naam: "Meena", pass: false },
  { naam: "Kabir", pass: true },
];
const stock = students.filter((product) => product.pass).map((prod) => prod.naam);
console.log(stock);

// // reduce
// // [1, 2, 3, 4, 5] — sabhi numbers ka sum nikalo reduce se.
const arr1=[1, 2, 3, 4, 5];
const initialValue=0;
const sumWithInitial=arr1.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue);
console.log(sumWithInitial);

// // ["a", "b", "c", "d"] — sabhi letters ko ek single string mein combine karo ("abcd") reduce se.
const arr1=["a", "b", "c", "d"];
const initialValue="";
const sumWithInitial=arr1.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue);
console.log(sumWithInitial);

// // Total cart value nikalo (price * qty sabka sum) reduce se.
const cart = [
  { item: "Pen", price: 10, qty: 3 },
  { item: "Book", price: 50, qty: 2 },
];
let totalCart = 0;
const totalPrice=cart.reduce((accumulator,currentValue)=>accumulator+(currentValue.price*currentValue.qty),totalCart);
console.log(totalPrice);

// //["apple", "banana", "apple", "orange", "banana", "apple"] — reduce se ye count karo ki har fruit kitni baar aaya hai (output object honi chahiye: { apple: 3, banana: 2, orange: 1 }).
const fruits = ["apple" , "banana" , "apple" , "orange"];
const freq = fruits.reduce((acc , currentVal) => {
    [currentVal] = (acc[currentVal] || 0) + 1;
    return accacc;
}  , {})


// // [10,20,30,40]-sabhi number ka max value nikalo [reduce] se
let arr = [10, 20, 30, 40];

let max = arr.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
});

console.log(max);



// 

const students = [
  { id: 1, name: "amit", marks: 85 },
  { id: 2, name: "priya", marks: 92 },
  { id: 3, name: "rahul", marks: 86 },
];
// ---1
const scl = students.map((a)=>a.name);
console.log(`${scl}`);

// ---2
const scl = students.map((a)=>a.name.toUpperCase());
console.log(scl);

// ---3
const grades = students.map((students)=>{
  let finalGrade = "c"; 

  if(students.marks>=90){
    finalGrade = "A";
  }else if(students.marks>=80){
    finalGrade = "B";
  }
  return{...students, grade:finalGrade};
})
console.log(grades);


// ---4
const scl = students.map((a)=>a.name);
console.log(scl);