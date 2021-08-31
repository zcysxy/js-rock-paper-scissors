function computerPlay() {
    let randomNum = Math.random() * 3; // The range of Math.random() is inclusive of 0, but not 1
    return (randomNum < 1) ? 'Rock' : (randomNum < 2) ? 'Paper' : 'Scissors';
}

function mapSelectionToNum(selection) {
    return (selection.toLowerCase() === 'rock') ? 1 : (selection.toLowerCase() === 'paper') ? 2 : 3;
}

function playRound(playerSelection, computerSelection) {
    let playerNum = mapSelectionToNum(playerSelection);
    let computerNum = mapSelectionToNum(computerSelection);
    let diff = playerNum - computerNum;
    let resultMsg;
    let result;

    if (diff === 1 || diff === -2) {
        resultMsg = `You Won! ${
            playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
        } beats ${computerSelection}`;
        result = [1, 0, 0];
    } else if (diff === 0) {
        resultMsg = `A Tie! ${
            playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
        } vs ${computerSelection}`;
        result = [0, 0, 1];
    } else {
        resultMsg = `You Lose! ${computerSelection} beats ${
            playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
        }`;
        result = [0, 1, 0];
    }

    return [result, resultMsg];
}

// const playerSelection = 'rock';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game(ruoundNum = 5) {
    let resultStat = [0,0,0];
    let computerSelection;
    let playerSelection;

    for (let i=0; i<ruoundNum; i++) {
        computerSelection = computerPlay();
        playerSelection = window.prompt('Please enter one of "Rock", "Paper", and "Scissors"')
        let [resultTemp, resultMsgTemp] = playRound(playerSelection, computerSelection);
        
        console.log(resultMsgTemp);
        for (let j=0; j<resultStat.length; j++) {
            resultStat[j] += resultTemp[j]
        }
    }

    return resultStat;
}

console.log(game());