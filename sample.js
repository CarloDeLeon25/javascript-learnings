// functions
function square(number) {
  return number * number;
}

function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("Carlo", "de Leon");
greet("Ghost"); // undefined second value

var car = { make: "honda", model: "accord", year: "1998" };
var x, y;

function getMake(object) {
  object.make = "toyota";
}

x = car.make;

getMake(car);
y = car.make;

console.log(y);

//function expressions

const getArea = function (length, width) {
  return length * width;
};

console.log(getArea(4, 5)); // output is 20

// calling functions

function square(number) {
  return number * number;
}

console.log(square(5)); // output is 25

function factorial(number) {
  if (number == 0 || number == 1) return 1;
  else return number * factorial(number - 1);
}

console.log(factorial(3)); // if the input number is 0 or 1, return 1

// function scope
// the variables are defined in global scope
var num1 = 5,
  num2 = 10;
var nickName = "carlo";

// function defined in global scope
function multiply() {
  return num1 * num2;
}
multiply(); // return is 15

// nested function wherein variables are only defined inside the function
function getScore() {
  var num1 = 5;
  var num2 = 10;

  function add() {
    return nickName + " scored " + (num1 + num2);
  }
  return add();
}

getScore();

//scope and the function stack

// recursion function
function countDown(number) {
  for (let i = number; i > 0; i--) {
    console.log(i);
  }
  console.log("hooray");
}

function countDownRecursive(n) {
  if (n <= 0) {
    console.log("hooray");
    return;
  }
  console.log(n);
  countDownRecursive(n - 1); // output is 3..2..1.. hooray
}

function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return;
  }
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

// John has 2 child jim and zoe, return
// jim has no child, return
// zoe has 2 child, return
//kyle and sophia has no child, return

const tree = {
  name: "Carlo",
  children: [
    {
      name: "jim",
      children: [],
    },
    {
      name: "zoe",
      children: [
        {
          name: "kyle",
          children: [],
        },
        {
          name: "sophia",
          children: [],
        },
      ],
    },
  ],
};

// arrow functions

const names = ["carlo", "john", "jane"];
const fruits = ["apple", "banana"];

console.log(names.map((names) => names.length)); // calculates the length of array

console.log(fruits.length); // calculates the array

// arrow functions expressions

function sum(a, b) {
  return a + b;
} // convert into arrow function

// let sum2 = (a, b) => a + b;

// // assign the fuction to a variable to store the arrow function

// function isPositive(number) {
//   return number >= 0;
// } // convert into arrow function

// let isPositive = (number) => number >= 0;

// function randomNumber() {
//   return Math.random;
// } // convert

// let randomNumber = () => Math.random; // has no functions

// // anonymous function
// document.addEventListener("click", function () {
//   console.log("click");
// });

// document.addEventListener("click", () => console.log("click"));

(function (a, b) {
  let chuck = 42;
  return a + b + chuck;
});
//original function structure

let chuck = 42;
(a, b) => a + b + chuck; // simplified function structure

//objects

let name = new Array("carlo");
console.log(name.length);

let person = {
  name: "carlo",
  age: "20",
  eyeColor: "black",
  updateAge: function () {
    return ++person.age;
  },
};

// object constructors

function Person(name, age, eyeColor) {
  this.name = name;
  this.eyeColor = eyeColor;
  this.age = age;
  this.updateAge = function () {
    return ++this.age;
  };
}

let person01 = new Person("carlo", 20, "black");
let person02 = new Person("john", 21, "black");

// array and array methods

const items = [
  { name: "Bike", price: 25 },
  { name: "Keyboard", price: 1000 },
  { name: "Computer", price: 500 },
  { name: "Phone", price: 5 },
  { name: "Book", price: 10 },
  { name: "Album", price: 200 },
  { name: "TV", price: 100 },
];

// filter

const filteredItems = items.filter((item) => {
  return item.price <= 100;
}); // returns the items with a price of less than or     equal to 100

console.log(filteredItems);

// map = returns only the specified object

const itemNames = items.map((item) => {
  return item.name;
});

console.log(itemNames);

const itemPrice = items.map((item) => {
  return item.price;
});

console.log(itemPrice);

// find = finds only the specific object

const foundItem = items.find((item) => {
  return item.name === "Bike";
});

console.log(foundItem);

// for each = loops all the objects indicated as parameter

items.forEach((item) => {
  console.log(item.name);
});

items.forEach((item) => {
  console.log(item.price);
});

// some = will only return true or false if the return condition is satisfied

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
}); // return true

const hasExpensiveItems = items.some((item) => {
  return item.price >= 20000;
}); // return false

console.log(hasInexpensiveItems);
console.log(hasExpensiveItems);

// every = checks every item in the array if it meets the condition

const inexpensiveItems = items.every((item) => {
  return item.price <= 100;
}); // return false because there is an item with a value of > 100

console.log(inexpensiveItems);

// reduce

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0); // reduce method runs for every items in the array

console.log(total);

// include = checks if the item is included in the array then returns true if true, false if false

const itemList = [1, 2, 3, 4, 5, 6, 7];
const includesNumber = itemList.includes(5);

console.log(includesNumber);
