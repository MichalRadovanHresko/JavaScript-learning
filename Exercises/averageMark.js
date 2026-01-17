const joeMarks = [80, 80, 50];

// Average = 70;

// Scale 
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const calculateGrade = marks => {
    const avg = calculateAverage(marks);
    
    if (avg < 0) return 'Enter Valid Values'
    else if (avg < 60) return 'F';
    else if (avg < 70) return 'D';
    else if (avg < 80) return 'C';
    else if (avg < 90) return 'B';
    else return 'A';
};

const calculateAverage = array => {
    let avg = 0;

    for (let value of array) avg+= value;

    return avg / array.length;
};

console.log(calculateGrade(joeMarks));