/* break and continue */

const score = [50, 25, 0, 30,100, 20,10];

for(let i = 0; i < score.length; i++){
    if(score[i] === 0){
        continue; // This is used to skip the current iteration of the loop when necessary.
        //in this case to avoid the embarassment of getting 0 marks hehe.
    }
    console.log("Your score is :", score[i]);

    if(score[i] === 100){
        console.log("Congrats, you've got the highest marks.");
        break; // This is used to break out of the loop when necessary.
    }
}