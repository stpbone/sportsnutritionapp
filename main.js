
function calorieIntake(burned, consumed) {
    return 2500 - consumed + burned;
}

const calorieBalanceToday = calorieIntake(800, 4000)

if (calorieBalanceToday < 0) {
    console.log('Your calorie balance is ' + calorieBalanceToday + ' ...you have had too many calories today fatboy!')
}

else {
    console.log('Your remaining calorie balance for today is: ' + calorieBalanceToday + ' today...get eating!')
}





