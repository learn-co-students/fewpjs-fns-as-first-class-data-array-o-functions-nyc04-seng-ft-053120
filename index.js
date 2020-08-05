// Continue writing "generalized" functions for

// wakeDog
// leashDog
// walkToPark
// throwFrisbee
// walkHome
// unleashDog
// Each function's implementation will be a generalized invocation of console.log().

function wakeDog(dogName = "Byron", dogBreed = "poodle") {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return (`Wake ${dogName} the ${dogBreed}`);
  }
  
  function leashDog(dogName = "Byron", dogBreed = "poodle") {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return (`Leash ${dogName} the ${dogBreed}`);
  }
  
  function walkToPark(dogName = "Byron", dogBreed = "poodle") {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return (`Walk to the park with ${dogName} the ${dogBreed}`);
  }
  
  function throwFrisbee(dogName = "Byron", dogBreed = "poodle") {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
  }
  
  function walkHome(dogName = "Byron", dogBreed = "poodle") {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return (`Walk home with ${dogName} the ${dogBreed}`);
  }
  
  function unleashDog(dogName = "Byron", dogBreed = "poodle") {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return (`Unleash ${dogName} the ${dogBreed}`);
  }
  
  // Next, create our "Array o' Functions!" Create a variable called routine. This variable will be an Array all of the functions we've just defined.
  let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
  
  // Iterate over the routine Array
  // Call each function in the array and
  // pass the dogName and dogBreed received by exerciseDog() to the function as they are called
  // capture the result of each function's call
  // return an Array of all those functions' return values
  
  function exerciseDog(dogName, dogBreed) {
    // let result = [];
  
    // routine.forEach(m => result.push(m(dogName, dogBreed)));
  
    // routine.forEach( function(m) { 
    //   result.push(m(dogName, dogBreed)); 
    // } )
  
    // return routine.map(m => m(dogName, dogBreed));
  
    return routine.map(function(m) {
      return m(dogName, dogBreed);
    })
}