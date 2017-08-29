/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, doIluGramy, doIlu;
var rzuty = [];
var ostRzut = 0;
var przedOstRzut = 0;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {

	if(gamePlaying) {
		var dice1 = Math.floor(Math.random() *6) +1;
		var dice2 = Math.floor(Math.random() *6) +1;
		

		var dice1DOM = document.querySelector('#dice1');
		var dice2DOM = document.querySelector('#dice2');
		dice1DOM.style.display = 'block';
		dice1DOM.src = 'dice-' + dice1 + '.png';
		dice2DOM.style.display = 'block';
		dice2DOM.src = 'dice-' + dice2 + '.png';

		

		if (dice1 !== 1 && dice2 !== 1) {
			roundScore += dice1 + dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
			rzuty.push(dice1+dice2);
			console.log(rzuty);
			ostRzut = rzuty[rzuty.length-1];
			przedOstRzut = rzuty[rzuty.length-2];
			if(ostRzut == przedOstRzut && (ostRzut == 6 || przedOstRzut==6) ){
				console.log('takie same 6');
				document.querySelector('#current-' + activePlayer).textContent = 0;
				document.querySelector('#score-' + activePlayer).textContent = 0;
				scores[activePlayer] = 0;

				nextPlayer();
			}
		} else {
			nextPlayer();
		}
	}

});

document.querySelector('.btn-hold').addEventListener('click', function() {

	if(gamePlaying) {

		scores[activePlayer] += roundScore;

		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];	

		if (scores[activePlayer] >= doIlu) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner';
			document.querySelector('#dice1').style.display = 'none';
			document.querySelector('#dice2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}

	}

});

document.querySelector('.btn-new').addEventListener('click' , init);

function nextPlayer() {
	rzuty = [];
	activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('#dice1').style.display = 'none';
	document.querySelector('#dice2').style.display = 'none';
}

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	doIluGramy = document.getElementById('doIlu').value;
	if (doIluGramy == '') {
		doIlu = 100;
	} else {
		doIlu = doIluGramy;
	}

	document.querySelector('#dice1').style.display = 'none';
	document.querySelector('#dice2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');
}