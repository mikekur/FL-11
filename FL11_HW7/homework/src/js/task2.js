
let isWant = false, 
minNumber = 0, maxNumberStarted = 8, maxNumberCurrent = 8, maxNumberIncreaser = 4,
minWinAmount = 25, middleWinAmount = 50, higherWinAmount = 100,
prizeRate = [0, minWinAmount, middleWinAmount, higherWinAmount], 
totalPrize = 0, gameNumber = 1;
isWant = confirm('Do you want to play a game?');

if(isWant){
	while(isWant){ 
		let winNumber, leftTries = 3, userNumber,isContinue = false;
		winNumber = Math.floor(Math.random() * (maxNumberCurrent - minNumber + 1) + minNumber);
		for(;leftTries > 0; leftTries --){
			userNumber = +prompt('Choose a roulette pocket number from ' +minNumber + ' to ' +maxNumberCurrent + 
				'\n Attempts left: ' + leftTries + 
				'\n Total prize: ' +totalPrize + '$' +
				'\n Possible prize on current attempt:' +prizeRate[leftTries] * gameNumber +'$');
			if(winNumber === userNumber){
			totalPrize += prizeRate[leftTries] * gameNumber;
			isContinue = confirm('Congratulation, you won! Your prize is: ' + totalPrize + 
				'$. Do you want to continue?');
			break;
			}
		}
		if(isContinue){
			maxNumberCurrent += maxNumberIncreaser;
			gameNumber ++;
			continue;
		} 
		alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
		isWant = confirm('Do you want to play again?');
		gameNumber = 1;
		totalPrize = 0;
		maxNumberCurrent = maxNumberStarted;
		if(isWant){
		continue;
		} else {
			break;
		}
	}	
} else {
	alert('You did not become a billionaire, but can.');
}