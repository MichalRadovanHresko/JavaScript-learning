function relativityTheory (mass) {
    const lightSpeed = 3e8;
    let energy = mass * (lightSpeed**2);
    return energy; 
}

console.log(relativityTheory(20));