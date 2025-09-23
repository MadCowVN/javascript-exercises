// Task 1

let weatherForecastForTomorrow;  // makes sense in English, easy to read
let studentGPA;  // short, clear, and easy to understand
let workplace;  // concise and clear
let eventProbability;  // descriptive
let priceOfTextbook; // clear + detail

// Task 2
let x = 1;
let y = 2;

[x, y] = [y, x]; 

console.log(x, y); 

// Task 3
const temperature = Math.random() * 30;

if (temperature > 20) {
  console.log("It's warm outside");
} else {
  console.log("It's cold outside");
}
console.log("Temperature:", temperature); // testing

// Task 4
function gradeMessage(score) {
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(gradeMessage(50)); // call function to test
console.log(gradeMessage(100));
console.log(gradeMessage(10));
// Task 5

function isEven(number) { // Testing whether a value is odd or even
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(2)); // call function to test
console.log(isEven(7));

// Task 6
function ageCategory(age) {
    if (age < 13) {
        return "Child";
    } else if ( age >= 13 && age <= 19) {
        return "Teenager";
    } else {
        return "Adult";
    }
}
console.log(ageCategory(13)); // call function to test

// Task 7

function greet(name, isMorning) {
    if (isMorning == true) {
        return "Good morning, ${name}!";
    } else {
        return "Hello, ${name}!";
    }
}
console.log(greet("Ngan", false)); // call function to test

// Task 8
function calculate(x, y, operation) {
    let result;
    if (operation == "add") {
        result = x+y;
    } else if ( operation == "subtract") {
        result = x-y;
    } else if (operation == "multiply"){
        result = x*y;
    } else if (operation == "divide") {
        result = x/y;
    } else {
        result = "Unknown operation";
    }
    return result;
}
console.log(calculate(5,20, "divide")); // testing

// Task 9
function ticketPrice(age) {
    if (age < 3) {
        return 0; // free ticket
    } else if (age >= 3 && age <= 12) {
        return 50; // child ticket
    } else if (age >= 13 && age <= 64) {
        return 80; // adult ticket
    } else {
        return 60; // senior ticket
    }
}
console.log(ticketPrice(64));  // call function to test 

// Task 10
function maxOfTwo(a, b) {
    if (a>b) {
        return a;
    } else {
        return b;
    }
}
console.log(maxOfTwo(10, 7));  // call function to test

// Task 11

function checkPassword(password) {
    if (password.length < 6 ) {
        return "Too short";
    } else {
        return "Strong enough";
    }
}
console.log(checkPassword("ilovevietnam"));

// Task 12
function isLeapYear(year) {
    if (year % 400 == 0) {
        return true;
    } else if (year % 100 == 0) {
        return true;
    } else if (year % 4 == 0) {
        return true; 
    } else {
        return false;
    }
}
console.log(isLeapYear(2024));

// Task 13
function sameWord(wordA, wordB) {
    if (wordA == wordB) {
        return true;
    } else {
        return false;
    }
}
console.log(sameWord("chicken","cow"));

// Task 14
function isWeekend(day) {
    if (day == "Saturday" || day == "Sunday") {
        return true;
    } else {
        return false;
    }
}
console.log(isWeekend("Saturday"));

// Task 15
function evaluateTriangleType(a, b, c) {
    if (a === b && b === c){
        return "Equilateral";
    } else if (a == b || a == c || b == c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}
console.log(evaluateTriangleType(5, 5, 9)); // testing
