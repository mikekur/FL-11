function formatTime(minutesTime){
	let days = 0, hours = 0, minutes = 0;
	days = Math.floor(minutesTime / 1440);
	hours = Math.floor((minutesTime - days*1440) / 60);
	minutes = minutesTime - days*1440 - hours*60;
	return days +' day(s) ' + hours +' hour(s) ' + minutes + ' minute(s).';
}
console.log(formatTime(2800));