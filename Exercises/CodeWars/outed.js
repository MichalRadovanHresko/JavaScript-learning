const outed = (meet, boss) => {
    const sum = sumNum(meet,boss);
    const cnt = Object.keys(meet).length;
    return getAvg(sum,cnt);
};

const getAvg = (sum, numbersOf) => {
    const avg = sum / numbersOf;
    if (avg <= 5)
        return 'Get Out Now!';
    else 
        return 'Nice Work Champ!';
};

const sumNum = (array, chef) => {
    let avg = 0;
    for (let number in array) {
        if (chef === number)
            avg+=array[number]*2;
        else
            avg+=array[number];
    };
    return avg;
};

console.log(outed({tim: 2, jim: 5, randy: 3, sandy: 4, andy: 6, katie: 4, laura: 4, saajid: 6, alex: 7, john: 8, mr: 7}, 'saajid'));