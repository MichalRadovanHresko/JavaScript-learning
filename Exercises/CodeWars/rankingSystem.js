/*
Write a class called User that is used to calculate the amount that a user will progress through a ranking system similar to the one Codewars uses.
Business Rules:

    A user starts at rank -8 and can progress all the way to 8.
    There is no 0 (zero) rank. The next rank after -1 is 1.
    Users will complete activities. These activities also have ranks.
    Each time the user completes a ranked activity the users rank progress is updated based off of the activity's rank
    The progress earned from the completed activity is relative to what the user's current rank is compared to the rank of the activity
    A user's rank progress starts off at zero, each time the progress reaches 100 the user's rank is upgraded to the next level
    Any remaining progress earned while in the previous rank will be applied towards the next rank's progress (we don't throw any progress away). The exception is if there is no other rank left to progress towards (Once you reach rank 8 there is no more progression).
    A user cannot progress beyond rank 8.
    The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error.

The progress is scored like so:

    Completing an activity that is ranked the same as that of the user's will be worth 3 points
    Completing an activity that is ranked one ranking lower than the user's will be worth 1 point
    Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored
    Completing an activity ranked higher than the current user's rank will accelerate the rank progression. The greater the difference between rankings the more the progression will be increased. The formula is 10 * d * d where d equals the difference in ranking between the activity and the user.

Logic Examples:

    If a user ranked -8 completes an activity ranked -7 they will receive 10 progress
    If a user ranked -8 completes an activity ranked -6 they will receive 40 progress
    If a user ranked -8 completes an activity ranked -5 they will receive 90 progress
    If a user ranked -8 completes an activity ranked -4 they will receive 160 progress, resulting in the user being upgraded to rank -7 and having earned 60 progress towards their next rank
    If a user ranked -1 completes an activity ranked 1 they will receive 10 progress (remember, zero rank is ignored)

Code Usage Examples:

var user = new User()
user.rank // => -8
user.progress // => 0
user.incProgress(-7)
user.progress // => 10
user.incProgress(-5) // will add 90 progress
user.progress # => 0 // progress is now zero
user.rank # => -7 // rank was upgraded to -7
*/

function User() {
    this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    this.userRank = this.ranks[0];
    this._progress = 0;
}

Object.defineProperty(User.prototype, 'rank', {
    get: function() {
        return this.userRank;
    }
});

Object.defineProperty(User.prototype, 'progress', {
    get: function() {
        return this._progress;
    }
});

User.prototype.incProgress = function(level) {
    if(!this.ranks.includes(level))
        throw new Error('This is not a valid level number!');
    
    if (this.userRank === 8) {
        return;
    }
    
    let userIndex = this.ranks.indexOf(this.userRank);
    let levelIndex = this.ranks.indexOf(level);
    let d = levelIndex - userIndex;
    let points = 0;
    if (d === 0)
        points = 3;
    else if (d === -1)
        points = 1;
    else if (d < -1)
        points = 0;
    else 
        points = 10 * d * d;
    this._progress += points;
    
    if (this._progress >= 100) {
        let rankUps = Math.floor(this._progress / 100)
        userIndex += rankUps;
        if (userIndex >= 15) {
            userIndex = 15;
            this._progress = 0;
        } 
        else 
            this._progress = this._progress % 100;
        this.userRank = this.ranks[userIndex];
    }
};  

const user = new User();
console.log("Start - Rank:", user.rank); 
console.log("Start - Progress:", user.progress);

user.incProgress(-7);
console.log("After -7 - Progress:", user.progress); 
console.log("After -7 - Rank:", user.rank); 

user.incProgress(-5);
console.log("After -5 - Progress:", user.progress);
console.log("After -5 - Rank:", user.rank);  
