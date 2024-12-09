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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'rock')
    return (document.querySelector(
      '.human-choice'
    ).innerHTML = `You both choosed ${humanChoice}. It's a tie!`);

  if (humanChoice === 'paper' && computerChoice === 'paper')
    return (document.querySelector(
      '.human-choice'
    ).innerHTML = `You both choosed ${humanChoice}. It's a tie!`);

  if (humanChoice === 'scissor' && computerChoice === 'scissor')
    return (document.querySelector(
      '.human-choice'
    ).innerHTML = `You both choosed ${humanChoice}. It's a tie!`);
  if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    return (document.querySelector(
      '.human-choice'
    ).innerHTML = `You win ! ${humanChoice} beats ${computerChoice}`);
  }
  if (humanChoice === 'paper' && computerChoice === 'scissor') {
    computerScore++;
    return (document.querySelector(
      '.human-choice'
    ).innerHTML = `You lose ! ${computerChoice} beats ${humanChoice}`);
  }
  if (humanChoice === 'rock' && computerChoice === 'paper') {
    humanScore++;
    return (document.querySelector(
      '.human-choice'
    ).innerHTML = `You lose ! ${computerChoice} beats ${humanChoice}`);
  }
  if (humanChoice === 'rock' && computerChoice === 'scissor') {
    humanScore++;
    return (document.querySelector(
      '.human-choice'
    ).innerHTML = `You win ! ${humanChoice} beats ${computerChoice}`);
  }
  if (humanChoice === 'scissor' && computerChoice === 'rock') {
    computerScore++;
    return (document.querySelector(
      '.human-choice'
    ).innerHTML = `You lose ! ${computerChoice} beats ${humanChoice}`);
  }
  if (humanChoice === 'scissor' && computerChoice === 'paper') {
    humanScore++;
    return (document.querySelector(
      '.human-choice'
    ).innerHTML = `You win ! ${humanChoice} beats ${computerChoice}`);
  }
}

function playgame(humanSelection) {
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  document.querySelector(
    '.human'
  ).innerHTML = `Human = ${humanScore}`;

  document.querySelector(
    '.computer'
  ).innerHTML = `Computer = ${computerScore}`;
  if (humanScore == 5) alert('You won !');
  if (computerScore == 5) alert('You lost. The computer won !');
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
rock.addEventListener('click', () => playgame('rock'));
paper.addEventListener('click', () => playgame('paper'));
scissor.addEventListener('click', () => playgame('scissor'));
