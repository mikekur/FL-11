function getMin(){
	let minNumber = Number.MAX_VALUE;
	for(let i = 0; i < arguments.length; i++){
		if(minNumber > arguments[i]) {
			minNumber = arguments[i]; 
		}
	}
	return minNumber;
}
console.log(getMin(5,0,-10,-20));