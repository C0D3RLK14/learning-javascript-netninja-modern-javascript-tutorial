/* logical operators => || OR and && AND */

const password = "p12@341";

if(password.length >= 12 && password.includes("@")){
    console.log("That password is mighty strong.")
} else if(password.length >= 8 || (password.includes("@") && password.length >= 5)) {
    console.log("That password is strong.")
} else {
    console.log("The password is not strong enough.")
}


