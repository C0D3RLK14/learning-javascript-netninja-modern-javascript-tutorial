/* variables & block scope */

/* Root or Global scope*/
let age = 30;
// let age = 50; // ##SyntaxError; We can't declare the same variable in the same block scope.

if(true) {
    let age = 50;
    let name = "Lakindu";
    console.log("In the 1st block scope : ", age, name);
    
    var var1 = "This is var";
    // NOTE: 'var' variables does not adhere to the block scope rules.
}

console.log("In the global scope :", age, name, var1); //name is not visible in this scope as it was defined in the 1st block scope.

// NOTE: The same could be done with the 'const' variable, only you cannot reassign a value.


