function ageVoter(age){
    let gender = "";
    if(age>=18 || age<=60) console.log("you are eligible to apply Voter Id");
    else console.log("you are not eligible");
    if(gender === "male"){
        if(age>=21) console.log("you are also eligible for marriage");
        else console.log("You are not eligible ");
    }
    else {
        if(age >=18 )console.log("You are eligible for marriage");
        else console.log("You are not eligible for the marriage");
    }
    
}