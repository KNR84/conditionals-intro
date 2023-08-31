/*Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
Is the sum of 1 and 1 greater than 5?
Is the product of 4 and 5 less than our equal to 20?
Is the difference between 6 and 2 greater than or equal to 0?*/

if(1+1 === 5){
    console.log("True Fact!");
  } else {
    console.log("Lies.")
  }
//lies
  
  
  if(4+5 <=20){
    console.log("True Fact!");
  } else {
    console.log("Lies.")
  } 
//True Fact!
  
  
  if(6-2 <=0){
    console.log("True Fact!");
  } else {
    console.log("Lies.")
  } 
//lies

// /In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
//   If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.

var likesDogs ="true";

if (likesDogs === "true"){
  console.log("You're a dog person!");
} else if (likesDogs === "false"){
  console.log("You're a cat person!");
}
//You're a dog person!



//this was reviewed with Sarah on 8/30, I followed along because I was stuck. Need to come back to it for review
let englishPersonObject = {
    firstName: "Sarah",
    language: "English"
}
let spanishPersonObject = {
    firstName: "Rose",
    language: "Spanish"
}
let frenchPersonObject = {
    firstName: "Coquette",
    language: "French"
}

if(englishPersonObject.language === "Spanish"){
    console.log(`Hola ${englishPersonObject.firstName}.`)
} else if (englishPersonObject.language === "French"){
    console.log(`Bonjour ${englishPersonObject.firstName}.`)
} else if (englishPersonObject.language === "English") {
    console.log(`Hello ${englishPersonObject.firstName}.`)
}

if(spanishPersonObject.language === "Spanish"){
    console.log(`Hola ${spanishPersonObject.firstName}.`)
} else if (spanishPersonObject.language === "French"){
    console.log(`Bonjour ${spanishPersonObject.firstName}.`)
} else if (spanishPersonObject.language === "English") {
    console.log(`Hello ${spanishPersonObject.firstName}.`)
}

if(frenchPersonObject.language === "Spanish"){
    console.log(`Hola ${frenchPersonObject.firstName}.`)
} else if (frenchPersonObject.language === "French"){
    console.log(`Bonjour ${frenchPersonObject.firstName}.`)
} else if (frenchPersonObject.language === "English") {
    console.log(`Hello ${frenchPersonObject.firstName}.`)
}


//Same with this one. Copied from Sarah's review on 8/30. Need to come back to it for furthur review. 

// Copy and paste the folowing array of grades into your JavaScript file:
// var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
// Loop through the grades with a for loop
// If the current grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.

// How many students got A's?
// How many students got B's?
// Which was the most common letter grade?
// What was the average percentage grade in the class?

let aGrades = {
    score: 0,
    actualGrade: "A"
}
let bGrades = {
    score: 0,
    actualGrade: "B"
}
let cGrades = {
    score: 0,
    actualGrade: "C"
}
let dGrades = {
    score: 0,
    actualGrade: "D"
}
let fGrades = {
    score: 0,
    actualGrade: "F"
}

let percentageGrades = 0

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for(let taco = 0; taco < grades.length; taco++){

if(grades[taco] <= 69){
console.log("You got an F")
fGrades.score++
} else if(grades[taco] >= 70 && grades[taco] <= 76){
    console.log("You got a D")
    dGrades.score++
} else if(grades[taco] >= 77 && grades[taco] <= 84) {
    console.log("You got a C")
    cGrades.score++
} else if (grades[taco] >= 85 && grades[taco] <= 92){
    console.log("You got a B")
    bGrades.score++
} else if(grades[taco] >= 93 && grades[taco] <= 100){  
    console.log("You got an A")
    aGrades.score++
}
}

let letterGrades = [aGrades, bGrades, cGrades, dGrades, fGrades]
let highScore = {
score: 0,
actualGrade: ""
}
for(let i = 0; i < letterGrades.length; i++){
    if(letterGrades[i].score > highScore.score)
    {
        highScore = letterGrades[i]
    }
}
console.log(highScore)
console.log(aGrades, "This is A grades")
console.log(bGrades, "This is B Grades")