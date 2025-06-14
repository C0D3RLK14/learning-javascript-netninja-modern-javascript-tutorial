/* DOM => Document Object Model */

/*              The DOM Hiearchy                    **
**                                                  **
**                  html <--<<root node>>           **
**   ||==============||==============||             **
**   \/                              \/             **
**  head                            body            **        
**   ||                    ||========||=======||    **
**   \/                    \/        \/       \/    **
**  title                  h1       div       div   **  
**    ^                    ^  ||=====||=====|| ^    **
**    |                    |  \/            \/ |    **
**    |                    |   p            p  |    **
**    |                    |   ^            ^  |    ** **    |                    |   |            |  |    **
**    --<<text nodes>>--------------------------    */

// Querying the DOM (referencing to element on the document)

// const para = document.querySelector("p"); // css selector as a string
// NOTE: Also lets say there are many 'p' elements in the html document, then if we refer to a 'p' element as done above we only select or refer only the first 'p' element(ONLY). Not only 'p' element anything we choose using the above statement, if there are duplicates only the first element matching gets selected.

// console.log(para); // NOTE: Returns null when the element referred above does not exist

//selecting multiple elements
const paras = document.querySelectorAll("p"); // This kinda stores all the 'p' elements in NodeList(some kinda array, not exactly a array, but similar). And some array methods do work with this
const errors = document.querySelectorAll(".error");

console.log(paras);
// console.log(paras.forEach(para => {
//     console.log(para);
// }));
console.log(errors);


paras.forEach(para => {
    console.log(para);
});

errors.forEach(error => {
    console.log(error);
});

// NOTE: There is an glitch sometimes 'p' are not logged to console correctly


