/* Object */
// Object literal

let user = {
    key : 1001,
    name: "crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "berlin",
    blogs: ["why mac & cheese rules", "10 things to make with marmite"],

    // methods
    // login: function(){
    //     console.log("the user logged in.");
    // }
    login: () => {
        console.log("User logged in.");
    },
    logout: () => {
        console.log("User logged out.");
    },
    // logBlogs: this.blogs.forEach((blog) => {
    //     console.log(blog);
    // }),
};

//calling methods
user.login();
user.logout();

//Seems familiar isn't it. See below
// const name = "Mario";
// nameUpper = name.toUpperCase();
// console.log(nameUpper); //see this is method as above '.login()' in the String object class