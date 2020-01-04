var winningPoint = 30;
var score = [0,0];
var turn = 0;
var singleScore = 0;
var diceNumber = 0;


var diceView = document.querySelector(".dice");
var buttonRoll = document.querySelector(".btn-roll");
var buttonHold = document.querySelector(".btn-hold");

var score0 = document.querySelector("#score-0");
var score1 = document.querySelector("#score-1");
var currentScore0 = document.querySelector("#current-0");
var currentScore1 = document.querySelector("#current-1");
var playerZeroPanel = document.querySelector(".player-0-panel");
var playerOnePanel = document.querySelector(".player-1-panel");

var viewData = {
    "score-0-player" : document.querySelector("#score-0"),
    "score-1-player" : document.querySelector("#score-1"),
    "currentScore-0" : document.querySelector("#current-0"),
    "currentScore-1" : document.querySelector("#current-1"),
    "player-0-panel" : document.querySelector(".player-0-panel"),
    "player-1-panel" : document.querySelector(".player-1-panel")
};

diceView.style.opacity = 0;

document.querySelector(".btn-new").addEventListener("click",function(){
	startNewGame();
});


function startNewGame() {
	turn = 0;
	singleScore = 0;
	diceNumber = 0;
	score = [0,0];
    diceView.style.opacity = 0;
    currentScore0.textContent = singleScore;
    currentScore1.textContent = singleScore;
    score0.textContent = score[turn];
    score1.textContent = score[turn];

    playerZeroPanel.className = "player-0-panel active";
    playerOnePanel.className = "player-1-panel";
}

buttonRoll.addEventListener('click',function() {
	diceNumber = Math.floor(Math.random() * 6 + 1);
	setDice(diceNumber);
	if(diceNumber === 1) {
		singleScore = 0;
		toggleTurn();
	}else {
		singleScore += diceNumber;
        viewData['currentScore-'+turn].textContent = singleScore;
	}
	
});

buttonHold.addEventListener('click', function() {
	score[turn] += singleScore;
	singleScore = 0;
    viewData['score-'+turn+'-player'].textContent = score[turn];
    viewData['currentScore-'+turn].textContent = 0;
	if (score[turn] > winningPoint){
        alert("Player "+(++turn)+" Win");
        startNewGame();
    }else {
        toggleTurn();
    }
});


function setDice(number) {
    diceView.style.opacity = 1;
	diceView.setAttribute('src','dice-'+number+'.png')
}

function toggleTurn() {
	if(turn === 0){
		turn = 1;
		playerZeroPanel.className = "player-0-panel";
		playerOnePanel.className = "player-1-panel active";
	}else {
		turn = 0;
		playerZeroPanel.className = "player-0-panel active";
		playerOnePanel.className = "player-1-panel";
	}
}
