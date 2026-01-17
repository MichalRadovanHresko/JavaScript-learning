// Speed limit is 70km/h
// Every 5km/h over 70 => 1 point
// 12 points -> suspended license 130

const checkSpeed = speed => {
    if (speed < 75) 
        return 'Ok';
    else if (speed >= 75 && speed < 130) {
        const result = Math.floor((speed - 70) / 5);
        if (result === 1) 
            return ` Point: ${result}`;
        else 
            return ` Points: ${result}`;
    } else 
        return 'Suspended license';
};

console.log(checkSpeed(71));