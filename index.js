let wakeDog = function(a,b) {
    console.log(`Wake ${a} the ${b}`)
    return `Wake ${a} the ${b}`
}

let leashDog = function (a,b) {
    console.log(`Leash ${a} the ${b}`)
    return `Leash ${a} the ${b}`
}

let walkToPark = function(a,b) {
    console.log(`Walk to the park with ${a} the ${b}`)
    return `Walk to the park with ${a} the ${b}`
}

let throwFrisbee = function(a,b) {
    console.log(`Throw the frisbee for ${a} the ${b}`)
    return `Throw the frisbee for ${a} the ${b}`
}

let walkHome = function(a,b) {
    console.log(`Walk home with ${a} the ${b}`)
    return `Walk home with ${a} the ${b}`
}

let unleashDog = function(a,b) {
    console.log(`Unleash ${a} the ${b}`)
    return `Unleash ${a} the ${b}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(a, b) {
    return routine.map(fn => fn(a,b))
  }