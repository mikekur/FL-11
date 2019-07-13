function reverseNumber(num){
	let result = 0;
  let isMinus = false;
  if(num < 0){
    num = -num;
    isMinus = true;
  }
	while(num){
		result = result*10 + num%10;
		num = Math.floor(num /10);
	}
  if(isMinus){
    return -result;
  } else {
    return result;
  }
}
console.log(reverseNumber(-45209));