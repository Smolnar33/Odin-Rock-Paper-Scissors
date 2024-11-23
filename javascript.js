let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 1) {
    return 'rock';
  } else if (random === 2) {
    return 'paper';
  } else {
    return 'scissor';
  }
};

const getHumanChoice = () => {
  let input = prompt(
    'Please pick: rock , paper or scissor'
  ).toLowerCase();
  if (input === 'rock') {
    return 'rock';
  } else if (input === 'paper') {
    return 'paper';
  } else if (input === 'scissor') {
    return 'scissor';
  } else
    return alert(
      'You wrote something else. Please write rock , paper or scissors !'
    );
};

// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  //   console.log(humanChoice, computerChoice);
  if (humanChoice === 'rock' && computerChoice === 'rock')
    return console.log(
      `Computer chose -> ${computerChoice} and you choosed ${humanChoice}. It's a tie!`
    );
  if (humanChoice === 'paper' && computerChoice === 'paper')
    return console.log(
      `Computer chose -> ${computerChoice} and you choosed ${humanChoice}. It's a tie!`
    );
  if (humanChoice === 'scissor' && computerChoice === 'scissor')
    return console.log(
      `Computer chose -> ${computerChoice} and you choosed ${humanChoice}. It's a tie!`
    );
  if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    return console.log(
      `You win ! ${humanChoice} beats ${computerChoice}`
    );
  }
  if (humanChoice === 'paper' && computerChoice === 'scissor') {
    computerScore++;
    return console.log(
      `You lose ! ${computerChoice} beats ${humanChoice}`
    );
  }
  if (humanChoice === 'rock' && computerChoice === 'paper') {
    humanScore++;
    return console.log(
      `You lose ! ${computerChoice} beats ${humanChoice}`
    );
  }
  if (humanChoice === 'rock' && computerChoice === 'scissor') {
    humanScore++;
    return console.log(
      `You Win ! ${humanChoice} beats ${computerChoice}`
    );
  }
  if (humanChoice === 'scissor' && computerChoice === 'rock') {
    computerScore++;
    return console.log(
      `You lose ! ${computerChoice} beats ${humanChoice}`
    );
  }
  if (humanChoice === 'scissor' && computerChoice === 'paper') {
    humanScore++;
    return console.log(
      `You Win ! ${humanChoice} beats ${computerChoice}`
    );
  }
}

function playgame() {
  for (i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(
    `Your score -> ${humanScore} | Computer score -> ${computerScore}`
  );
}

playgame();
