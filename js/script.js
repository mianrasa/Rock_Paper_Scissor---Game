//Game Trigger
const initGame = () => {
  const check = confirm(`Shall we play Rock Paper Scissor Game?`);
  check ? playGame() : alert(`Ok, Thank You!`);
};

//Game Body
const playGame = () => {
  while(true){
    let player = getPlayerChoice();
    player = formatPlayerChoice(player);
    if(player === ""){
      invalidChoice();
      continue;
    }
    if(!player){
      exitToPlay();
      break;
    }
    player = evaluatePlayerChoice(player);
    if(!player){
      invalidChoice();
      continue;
    }
    const computer = getComputerChoice();
    const result = winnerChecker(player, computer);
    displayResult(result);
    if(askToPlayAgain()){
      continue;
    }
    else{
      greetingMessage();
      break;
    }
  }
};


const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random()*3);
  const propertyArray = ["rock", "paper", "scissor"];
  return propertyArray[computerChoice];
};

const getPlayerChoice = () => {
  return prompt(`Choose: Rock, Paper, Scissor`);
};

const formatPlayerChoice = (playerChoice) => {
  return (playerChoice || playerChoice === "") ? playerChoice.trim().toLowerCase() : false;
};

const invalidChoice = () => {
  alert(`Invalid option!`);
};

const exitToPlay = () => {
  alert(`Thanks for participating`);
};

const evaluatePlayerChoice = (property) => {
   return (property === "rock" || 
           property === "paper" ||
           property === "scissor"
          ) 
          ? property 
          : false;
};

const winnerChecker = (Player, Computer) => {
  const winner =  
    // Player === Computer
    (Player === Computer) 
    ? `Player: ${Player}, Computer: ${Computer}\nTie Game!`
    // Player === rock 
    : (Player === "rock" && Computer === "paper") 
    ? `Player: ${Player}, Computer: ${Computer}\nComputer Wins` 
    : (Player === "rock" && Computer === "scissor") 
    ? `Player: ${Player}, Computer: ${Computer}\nPlayer Wins`
    // Player === paper 
    : (Player === "paper" && Computer === "rock") 
    ? `Player: ${Player}, Computer: ${Computer}\nPlayer Wins`
    : (Player === "paper" && Computer === "scissor") 
    ? `Player: ${Player}, Computer: ${Computer}\nComputer Wins`
    // Player === scissor 
    : (Player === "scissor" && Computer === "rock") 
    ? `Player: ${Player}, Computer: ${Computer}\nComputer Wins`
    : `Player: ${Player}, Computer: ${Computer}\nPlayer Wins`
  
  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm(`Play again?`);
};

const greetingMessage = () => {
  alert(`Thanks For Playing...\nSee you next time ;)`);
};


initGame();