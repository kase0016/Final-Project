
function getDaysUntilChristmas(){
    const todayDate = new Date();

    let day = todayDate.getDay();
    console.log(day);
    let countdown = 25 - (day+10)
   return `There are ${countdown} days until Christmas !!`
}

console.log(getDaysUntilChristmas())

