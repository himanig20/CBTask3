function userChoice(choice) {
    const computerChoice = generateComputerChoice();
    const result = determineWinner(choice, computerChoice);
    displayResult(choice, computerChoice, result);
}

function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}


function displayResult(userChoice, computerChoice, result) {
    const resultMessage = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById('result').innerText = resultMessage;
}
