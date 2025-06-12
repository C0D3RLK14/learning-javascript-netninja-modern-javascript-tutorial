/* Type conversion */
// explicit type conversion
let score = "100";
// console.log(score + 1); // 1001
// console.log(typeof score); // string
// console.log(typeof (score + 1)); // string

// scoreNum = Number(score);
// console.log(scoreNum);
// console.log(typeof scoreNum);
// console.log(scoreNum + 1)
// console.log(typeof (scoreNum + 1));

let result = Number("hello"); // NaN

// result = String(50);
// result = String("String"); // String
// console.log(result, typeof result); 

// result = Boolean(56);
// result = Boolean(0.0);
// result = Boolean(-23);
// console.log(result, typeof result);
// NOTE: Any number other than O (yes even 0.0 is false) returns a boolean value of true (even negative numbers)

// result = Boolean("0"); // true
// result = Boolean("");
// NOTE: Any string with length greater than 0 is true
console.log(result, typeof result);

// implicit type conversion occurs during loose comparison