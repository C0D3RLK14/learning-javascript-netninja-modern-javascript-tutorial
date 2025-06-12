/* Data types */
/*  Number => 2, 3.14
    String => "This", 'and this is a string'
    Boolean => true, false
    Null => Explicitly set variable with no value
    Undefined => Variables that have not been defined yet
    Object => Complex data structures => Arrays, Dates, Literals,...
    Symbol => Used with objects
*/

/* Strings */
//Strings
console.log("hello, world");

let email = "mario@netninja.co.uk";

//String concatenation
let fname = "Brandon";
let lname = "Sanderson";
let fullName = fname + " " + lname;

console.log(fname + " " + lname);
console.log(fullName);

//Getting characters
console.log(fullName[2]);

//String length
console.log(fullName.length);

//String methods
console.log(fullName.toUpperCase());

let lowerFullName = fullName.toLowerCase();
console.log(lowerFullName);

let index = email.indexOf("@");
console.log(index);
