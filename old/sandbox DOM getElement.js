/* Other methods of querying the DOM */
// get an element by id
const title = document.getElementById("page-title");
console.log(title);

// get elements by class 
const errors = document.getElementsByClassName("error"); // NOTE: When using '.getElementsByClassName()' it stores data in a HTMLCollection.
// NOTE: Do not use the '.' class selector notation for the argument of '.getElementsByClassName()' as this doesn't work. Same goes for '.getElementByID()'

console.log(errors); 
// NOTE: HTMLCollection does not support the '.forEach' method

// get elements by tag name
const paras = document.getElementsByTagName('p'); // This stores data in an HTMLCollection too.
console.log(paras);
console.log(paras[0]);