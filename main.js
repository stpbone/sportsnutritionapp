// food calorie values
const boiledEggs = 156
const toastTwoSlicesWhiteJam = 171
const porridgeWithHoneyBanana = 250
const whiteCoffee = 79
const avocadoSalad = 312
const miniSoreen = 92
const chickenStirFry = 200

// Enter what you had for breakfast
var breakfast = boiledEggs + toastTwoSlicesWhiteJam + porridgeWithHoneyBanana

// Enter what you had for lunch 
var lunch = avocadoSalad

// Enter what you had for dinner
var dinner = chickenStirFry

// Calculates snacks consumed 
var snacks = (2*miniSoreen) + (4*whiteCoffee)

// Calculates total calorie consumption for the day
var totalCals = lunch + breakfast + dinner + snacks

// Calories burned accoring to Strava/TrainerRoad/Garmin data
var calsBurned = 100

// Log the outputs to the terminal
console.log('Today your breakfast was ' + breakfast + ' calories')
console.log('Today your lunch was ' + lunch + ' calories')
console.log('Today your dinner was ' + dinner + ' calories')
console.log('Today your snack consumption was ' + snacks + ' calories')
console.log('Today your total calorie intake was: ' + totalCals)

// Function which calculates calculates the number of calories burned and consumed in the day, and substracts from the daily allowance
function calorieIntake() {
    return 1800 - totalCals + calsBurned;
}

const calorieBalanceToday = calorieIntake()

if (calorieBalanceToday < 0) {
    console.log('Your calorie balance is ' + calorieBalanceToday + ' ...you have had too many calories today fatboy!')
}

else {
    console.log('Your remaining calorie balance for today is: ' + calorieBalanceToday + ' today...get eating!')
}





