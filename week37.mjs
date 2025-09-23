// Task 1
let homeTown = "Oslo";
let yearOfBirth = 1995;
let isHouseOnFire = false;

// Task 2

let hasTicket = true;
let door = 2;

if (hasTicket && door == 2) {
  console.log("Welcome in");
} else {
  console.log("No entry.")};


  // Task 3
let unitPrice = 129;
let quantity = Number("3");
let total = unitPrice * quantity;
console.log(`NOK ${total}`);

// Task 4

const area = function area(w, h) {
  return w * h;
}
console.log(area(5, 4));

// Task 5

let data = {
  name:"Ada Lovelace",
  year: 1843,
  title: "Notes on the Analytical Engine"
};
console.log(data["tile"]);

// Task 6
function greet(name) {
  if (name == null) {
    console.log("Hello friend");
  } else {
    console.log("Hello " + name);
  }
}
greet();
greet("Ingrid");

// Task 7
function isOldEnoughToVote(age) {
if (age < 18){
  console.log("Not eligible to vote!");
} else if ( age < 22 ) {
  console.log("Eligible to vote in National election!");
} else { console.log ("Eligeble to vote in all election!");
  }
}
isOldEnoughToVote(18); // call function to test

// Task 8
function checkNumber(num) {
 if (num>0) {
  console.log("Positive");
 } else if (num == 0) {
    console.log("Zero");
  } else {
    console.log("Negative");
  }
}
checkNumber(0); // call function to test

// Task 9
function login(username, password) {
const CorrectName = "Ngan";
const CorrectPass = "1234";

if (username == CorrectName && password == CorrectPass) {
  return true;
} else {
  return false;
}
}
console.log(login("Ngan", "1234")); // call function to test

