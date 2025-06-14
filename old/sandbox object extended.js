/* Object */
// Object in an Array in an Object

let user = {
    key : 1001,
    name: "crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "berlin",
    // blogs: ["why mac & cheese rules", "10 things to make with marmite"],
    blogs: [{title: "why mac & cheese rules", likes: 30}, {title: "10 things to make with , likes: marmite", likes: 50}],

    login: () => {
        console.log("User logged in.");
    },
    logout: () => {
        console.log("User logged out.");
    },
    // logBlogs: function() {
    //     this.blogs.forEach((blog) => {
    //         console.log(blog);
    //     })
    // }
    logBlogs: function() {
        console.log("The user has written the following blogs,")
        this.blogs.forEach((blog) => {
            console.log(`Blog title: ${blog["title"]} with ${blog["likes"]} likes.`);
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