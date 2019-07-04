var a,b,c;
a = +prompt('Write first side length of triangle');
b = +prompt('Write second side length of triangle');
c = +prompt('Write third side length of triangle');

if(a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b){
	if(a === b && b === c){
		console.log('Eequivalent triangle');
	} else if( a === b || b === c || a === c){
		console.log('Isosceles triangle');
	} else {
		console.log('Normal triangle');
	}
} else {
	console.log("Triangle doesn't exist");
}