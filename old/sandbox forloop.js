/* Control flow */
// for loops
// for (let i = 0 /*initializer*/; i < 5 /*condition => checked before each iteration */; i++ /*final expression => executes at the end of each iteration*/) {
//     console.log("loop in :", i);
// }
// console.log("Loop finished.");

const names = ["shaun", "mario", "luigi"];
for(let i = 0; i < names.length; i++) {
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}