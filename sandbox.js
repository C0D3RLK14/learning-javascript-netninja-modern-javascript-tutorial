/* Primitive & Reference Types */
/*  Primitive Types  |   Reference Types
**  - numbers        |   - all types of objects
**  - strings        |       - object literals
**  - Booleans       |       - arrays
**  - null           |       - functions
**  - undefined      |       - dates
**  - symbols        |       - all other objects
*/

/* NOTE: In Javascript all the primitive data types are stored in stacks (data structure) & reference types are stored in heaps with the pointer(var. name in a stack).
So, the problem is when a reference type variable is assigned to another new variable(like trying to make a copy) the values of the original variable does not get assigned to the new variable, but just the new variable(pointer in the stack) reference to the original variable's data(in the heap). Hence if change(update) data using either variable, the original data stored gets affected as it is reference to by both the variables */

let primitiveOne = 50;
let primitiveTwo = primitiveOne;

console.log(`primitiveOne before change = ${primitiveOne} & primitiveTwo before change = ${primitiveTwo}`);

//now we change the value of primitiveOne
primitiveOne = 100;

console.log(`primitiveOne after change = ${primitiveOne} & primitiveTwo after changing primitiveOne = ${primitiveTwo}`);

// We can see as we changed the 'primitiveOne's value it did not affect 'primitiveTwo' as these are primitive values.

let referenceOne = {name : "Lakindu", age : 32};
let referenceTwo = referenceOne;

console.log("referenceOne object before :", referenceOne);
console.log("referenceTwo object before :", referenceTwo);

//now we change the value of referenceOne
referenceOne.name = "Twinkle";

console.log("referenceOne object after :", referenceOne);
console.log("referenceTwo object after changing referenceOne :", referenceTwo);

// We can see when we change one variable both the variables gets affected. NO MATTER WHICH VARIABLE WE CHOOSE TO CHANGE BOTH GETS AFFECTED.