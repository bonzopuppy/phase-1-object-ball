const gameStats = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };

function gameObject () {
        return (gameStats);
    }

// console.log(gameObject(gameStats));

function homeTeamName (){
    let gameData = gameObject();
    return gameData.home.teamName;
}

// console.log(homeTeamName());

function numPointsScored (playerName) {
    for (const teamType in gameStats) 
    {const teamPlayers = gameStats[teamType].players;
        if (playerName in teamPlayers) {
            return teamPlayers[playerName].points;
        }
    }
}

//console.log(numPointsScored ("Brendan Haywood"));

function shoeSize (playerName) {
    for (const teamType in gameStats) {
        const teamPlayers = gameStats[teamType].players;
        if (playerName in teamPlayers) {
            return teamPlayers[playerName].shoe;
        }
    }
}

//console.log(shoeSize ("Brendan Haywood"));

function teamColors (teamName) {
    for (const teamType in gameStats) {
        const team = gameStats[teamType];
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
}

// console.log(teamColors("Brooklyn Nets"));

function teamNames () {
    const names = [];
    for (const teamType in gameStats) {
        const team = gameStats[teamType];
        names.push(team.teamName);
    }
    return names;
}

// console.log(teamNames());

function playerNumbers (teamName) {
    const jerseyNumbers = [];
    for (const teamType in gameStats){
        const team = gameStats[teamType];
        if (team.teamName === teamName) {
            for (const playerName in team.players) {
           jerseyNumbers.push(team.players[playerName].number);
            }
        }
        break;
    }
    return jerseyNumbers;
}

// console.log(playerNumbers("Brooklyn Nets"));

function playerStats (playerName) {
    for (const teamType in gameStats) {
        const teamPlayers = gameStats[teamType].players;
           for (const player in teamPlayers) {
            if (player === playerName) {
                return teamPlayers[player]
            }
        }
    }    
}

// console.log (playerStats("Alan Anderson"));

function bigShoeRebounds () {
    let maxShoeSize = 0;
    let reboundsForMaxShoeSize = 0;


    for (const teamType in gameStats) {
        for (const playerName in gameStats[teamType].players) {
            const player = gameStats[teamType].players[playerName];
            if (player.shoe > maxShoeSize) {
                maxShoeSize = player.shoe;
                reboundsForMaxShoeSize = player.rebounds;
            }
        }
    }
    return reboundsForMaxShoeSize;
}
 
// console.log (bigShoeRebounds());

function mostPointsScored () {
    let playerNameWithMostPoints = '';
    let mostPoints = 0;

    for (const teamType in gameStats) {
        const teamPlayers = gameStats[teamType].players;
        for (const player in teamPlayers) {
            if (teamPlayers[player].points > mostPoints) {
                mostPoints = teamPlayers[player].points;
                playerNameWithMostPoints = player;
            }
        }
    }
    return playerNameWithMostPoints;

}

console.log(mostPointsScored());



