const options = ['Rock', 'Paper', 'Scissors'];
const props = {
    'rock': {
        weakTo: 'Paper',
        strongTo: 'Scissors'
    },
    'paper': {
        weakTo: 'Scissors',
        strongTo: 'Rock'
    },
    'scissors': {
        weakTo: 'Rock',
        strongTo: 'Paper'
    }
}

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {

    // DRAW
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log('Draw!');
        return null;
    }
        
    
    if(props[playerSelection.toLowerCase()].weakTo === computerSelection) {
        console.log(`You Lose!`);
        return false;
    }
    else {
        console.log(`You win!!`);
        return true;
    }
}

function playGame() {
    let playerScore = computerScore = 0;

        let playerSelection = prompt('What is your choice? (rock, paper, scissors): ');
        let result = playRound(playerSelection);

        
    }
playGame();
playGame();
playGame();
playGame();
playGame();
