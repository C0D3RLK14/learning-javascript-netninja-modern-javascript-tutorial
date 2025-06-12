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

let email = "mario@netninja.co.uk";

//String methods
let result = email.lastIndexOf('n');

result = email.indexOf('n'); // there is no firstIndexOf method cause this doesn't say so but this is that method.

result = email.slice(6,14); //this slices the 'email' variable from the 6th index upto the 14th index (so the characters from 6th index - 13th index)

result = email.substr(6,8); //this makes a substring of characters from the 6th index upto 8 characters. (so the 6th index charater and 8 characters from there)

result = email.replace('m', 'w');

result = email.replace('n', 'w'); //this only replaces the first 'n' in the string

result = email.replaceAll('n', 'w'); //this replaces all the 'n's with 'w'

console.log(email);
console.log(result);
