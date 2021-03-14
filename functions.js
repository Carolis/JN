function sum(a, b) {
  return a + b;
}

let sum = (a, b) => {
  return a + b;
};

let sum = (a, b) => a + b;

////////////////////

function isPositive(number) {
  return number >= 0;
}

let isPositive = (number) => {
  return number >= 0;
};

let isPositive = (number) => number >= 0;

////////////////////

function randomNumber() {
  return Math.random;
}

let randomNumber = () => {
  return Math.random;
};

let randomNumber = () => Math.random;

////////////////////

document.addEventListener("click", function () {
  console.log("clicked");
});

document.addEventListener("click", () => console.log("clicked"));

////////////////////

//Arrow functions put a different meaning to the "this" Keyword on JS following the examples below

class Person {
    constructor(name) {
        this.name = name
    }
}


printNameArrow() {
    setTimeout(() => {
        console.log("Arrow:", this.name)
    }, 100)
}

printNameFunc() {
    setTimeout(function(){
        console.log("Function:", this.name)
    }, 100)
}

let person = new Person('Carol')

person.printNameArrow()
//INPUT: Carol
//OUTPUT: Carol

person.printNameFunc()
//INPUT: Carol
//OUTPUT: {Nothing} because its on global scope