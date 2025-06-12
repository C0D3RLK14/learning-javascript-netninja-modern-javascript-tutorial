/* Booleans and Comparisons */
// console.log(true, false, "true", "false");

// methods
let email = "luigi@thenetninja.co.uk";
let names = ["mario", "luigi", "toad"];

let result = email.includes("@");
result = names.includes('bowser');

// console.log(result);

// comparison operators
let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);

let name = "Shaun";

console.log(name == "Shaun"); // abstract/loose equality
console.log(name == "shaun");
console.log(name > "shaun"); // lowercase 's' is greater than uppercase 'S'
console.log(name > "crystal"); // bcz 'c' comes before 's'
//NOTE: any lowercase character is greater than any uppercase character whether they are the counter part of the same character or not.