const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
      return 6;
    case 'tuesday':
      return 6;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 6;
    case 'friday':
      return 7;
    case 'saturday':
      return 9;
    case 'sunday':
      return 8;
  }
};

const getActualSleepHours = () => {
  let result = 0;
  result += getSleepHours('monday');
  result += getSleepHours('tuesday');
  result += getSleepHours('wednesday');
  result += getSleepHours('thursday');
  result += getSleepHours('friday');
  result += getSleepHours('saturday');
  result += getSleepHours('sunday');
  return result;
};

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours*7;
}
const calculateSleepDept = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep ${idealSleepHours}.`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got more hours of sleep than needed (${idealSleepHours - actualSleepHours} hours).`)
  } else {
    console.log(`You got less sleep than the ideal sleep (${idealSleepHours - actualSleepHours} hours).`)
  }
}


//testing
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
calculateSleepDept();
