// maximum number between two

let numberOne = 56;
let numberTwo = 120;

if (numberOne > numberTwo) {
    console.log("The first number is larger");
} else {
    console.log("The Second Number is Larger");
}

// Even or Odd Number

let givenNumber = 52;

if (givenNumber % 2 == 0){
    console.log ("The number is even");
} else {
    console.log ("The number is odd");
}

// number divisible buy ten

let numberGiven = 121;

if (numberGiven % 10 == 0){
    console.log("The number is divisible by 10");
} else {
    console.log("The number is not divisible by 10");
}

// Simple Calculator

let firstNumber = 1221;
let secondNumber =2132;

console.log("The total of two numbers is " + (firstNumber + secondNumber));
console.log("When you deduct the second number from the first number, you get " + (firstNumber - secondNumber));
console.log("The product of two numbers is " + (firstNumber * secondNumber));
console.log("When you divide the first number with the second number, you get " + (firstNumber / secondNumber));

// leap year detector

let givenYear =1996;

if (givenYear % 4 == 0) {
    console.log("This year is a leap year");
} else {
    console.log("This year is not a leap year");
}