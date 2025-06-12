let ninjas = ["shaun", "ryu", "chun-li"];
// console.log(ninjas);
// console.log(ninjas[1]);

// ninjas[1] = "ken";
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ["shaun", "crystal", 30, 20];
// console.log(random);

console.log(ninjas.length);

let result = ninjas.join(', ');
console.log(result);

result = ninjas.indexOf("chun-li");
console.log(result);

result = ninjas.indexOf("Chun-li"); // return '-1' when a value is not in array
console.log(result);

result = ninjas.concat(["ken", "crystal"]);
console.log(result);

result = ninjas.push("ken");
console.log(ninjas); // this is a destructive method. Hence they change the original variable values

result = ninjas.pop();
console.log(result);
console.log(ninjas);