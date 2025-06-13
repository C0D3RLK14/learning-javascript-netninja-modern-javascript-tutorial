/* switch statement */
// NOTE: Switch statements uses strict equality so the cases being compared shoud be the same data type and value to the variable being checked to match.
const grade = "D";

switch(grade) {
    case "A" :
        console.log("You got an A!");
        break;
    case "B" :
        console.log("You got an B!");
        break;
    case "C" :
        console.log("You got an C!");
        break;
    case "D" :
        console.log("You got an D!");
        break;
    case "E" :
        console.log("You got an E!");
        break;
    default :
        console.log("Not a valid grade please contact registry.");
}