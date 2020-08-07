function wakeDog(dogName, dogBreed) {
    let createString = `Wake ${dogName} the ${dogBreed}`;
    console.log(createString);
    return createString
}

function leashDog(dogName, dogBreed) {
    let createString = `Leash ${dogName} the ${dogBreed}`;
    console.log(createString);
    return createString
}

function walkToPark(dogName, dogBreed) {
    let createString = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(createString);
    return createString
}

function throwFrisbee(dogName, dogBreed) {
    let createString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(createString);
    return createString
}

function walkHome(dogName, dogBreed) {
    let createString = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(createString);
    return createString
}

function unleashDog(dogName, dogBreed) {
    let createString = `Unleash ${dogName} the ${dogBreed}`
    console.log(createString);
    return createString
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
   let arrayValues = routine.map(x => x(dogName, dogBreed));
    return arrayValues;
}