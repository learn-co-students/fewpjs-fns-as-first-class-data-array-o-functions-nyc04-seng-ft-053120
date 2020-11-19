function wakeDog(dogName, dogBreed) {
    let task = `Wake ${dogName} the ${dogBreed}`;
    console.log(task);
    return task;
}

function leashDog(dogName, dogBreed) {
    let task = `Leash ${dogName} the ${dogBreed}`;
    console.log(task);
    return task; 
}

function walkToPark (dogName, dogBreed) {
    let task = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(task);
    return task;
}

function throwFrisbee (dogName, dogBreed) {
    let task = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(task);
    return task;
}

function walkHome (dogName, dogBreed) {
    let task = `Walk home with ${dogName} the ${dogBreed}`
    console.log(task);
    return task;
}

function unleashDog (dogName, dogBreed) {
    let task = `Unleash ${dogName} the ${dogBreed}`
    console.log(task);
    return task;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]; 

function exerciseDog(dogName, dogBreed) { //setting function exerciseDog to take in two arguments
    let answer = routine.map(task => task(dogName, dogBreed)); //.map iterates through the routine array, where functions are stored. we iterate through each task and pass on dogName dogBreed parameters 
    return answer;  //returns the variable answer 
}



