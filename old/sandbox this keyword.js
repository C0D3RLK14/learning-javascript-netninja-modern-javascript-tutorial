/* Object */
// this keyword
// NOTE: 'this' keyword is used to refer to the object that is currently executing the code.

let user = {
    key : 1001,
    name: "crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "berlin",
    blogs: ["why mac & cheese rules", "10 things to make with marmite"],

    login: () => {
        console.log("User logged in.");
    },
    logout: () => {
        console.log("User logged out.");
    },
    //this keyword
    
    // logBlogs: () => {
    //     this.blogs.forEach(blog => {
    //     console.log(blog);
    //     })
    //     console.log(this);
    // }
    // NOTE: The above 'logBlocks()' doesn't work bcz it is declared in the form of an arrow function. When the keyword 'this' is logged onto the console it returns the object 'window' (browser window object) which is the global object all Js code runs in.

    // therefore,
    logBlogs: function() {
        this.blogs.forEach((blog) => {
            console.log(blog);
        })
    }
};

//calling methods
user.login();
user.logout();
user.logBlogs();

//Seems familiar isn't it. See below
// const name = "Mario";
// nameUpper = name.toUpperCase();
// console.log(nameUpper); //see this is method as above '.login()' in the String object class