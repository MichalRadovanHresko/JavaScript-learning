const team = {
  _players: [{
    firstName: 'Michal',
    lastName: ' Scofi',
    age: 55
  }, {
    firstName: 'Viktor',
    lastName: 'Erdogan',
    age: 74
  }, {
    firstName: 'Ninka',
    lastName: 'Pelona',
    age: 26
  }],
  _games: [{
    opponent: 'Football',
    teamPoints: 25,
    opponentPoints: 1
  }, {
    opponent: 'Baseball',
    teamPoints: 874,
    opponentPoints: 586
  }, {
    opponent: 'Rugby',
    teamPoints: 98,
    opponentPoints: 99
  }],
  get players () {
    return this._players;
  },
  get games () {
    return this._games;
  },
  addPlayer (newFirstName, newLastName, newAge) {
    this._players.push({
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    });
  },
  addGame (newOpponent, newTeamPoints, newOpponentPoints) {
    game = {
      newOpponent,
      newTeamPoints,
      newOpponentPoints
    }
    this._games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans',100,98);
console.log(team['_games']);