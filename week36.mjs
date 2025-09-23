// Task 1
let nameOfCity = "Berlin";
let usersAge = 23;
let isUserLoggedIn = true;

// Task 2
let titleOfBook = "American Gods";
let nameOfAuthor = "Neil Gaiman";
let BookISBN = "0-380-97365-0";
let isBookAvailable = true;

// Task 3
let nameOfProduct = "Donkey Kong Bananza";
let priceOfProductInUSD = 75;
let quantityOfProduct = 1;
let isProductEligibleForFreeShipping = false;

// Task 4
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// Task 5
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// Task 6
let isLoggedIn = false;

if (isLoggedIn == true) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}


// Task 7
function displayGreeting() {
  console.log("Hello, welcome to my world!");
}
displayGreeting(); // call function to test

// Task 8
function greet(name) {
  console.log("Hello, " + name + "!");
}
let name = "Ngan";
greet(name); // call function greet to test

// Task 9
function checkIfUserIsAdult(ageOfPerson) {
  if (ageOfPerson >= 18) {
    console.log("This person is an adult.");
  } else {
    console.log("This person is a minor.");
  }
}

let ageOfPerson = 16;
checkIfUserIsAdult(ageOfPerson);

// Task 10
function isEven(num) {
  if (num % 2 == 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
}
isEven(11); // call function isEven to test it
