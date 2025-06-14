/* Object */
// Object literal

let user = {
    key : 1001,
    name: "crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "berlin",
    blogs: ["why mac & cheese rules", "10 things to make with marmite"]
};

console.log(user);

//searching data
console.log(user.name);
//OR
console.log(user["name"]);

//updating data
user.name = "raven";
console.log(user.name);
//OR
user["name"] = "naruto";
console.log(user.name);

// NOTE: When using variables as keys to do something with objects [] method should be used.

console.log(typeof user);
