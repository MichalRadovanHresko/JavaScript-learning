const howOld = (age, year) => {
  const birth = 2025 - age;
  if (year> 2025) {
    return `You will be ${year - birth} in the year ${year}`
  } else if (year + age < birth) {
    return `The year ${year} was ${birth - year} years before you were born`
} else {
    return `You were ${year - birth} in the year ${year}`
}
}; 


console.log(howOld(21, 2010));