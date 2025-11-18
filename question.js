let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 25;

if (registeredEarly && runnerAge>=18) {
  raceNumber = 1000;
  console.log(`You will race at 9:30 am! Your race number is ${raceNumber}`);
} else if (runnerAge > 18 && registeredEarly) {
    console.log(`You will race at 11:00 am! Your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm! Your race number is ${raceNumber}`)
}