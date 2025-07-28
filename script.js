//your JS code here. If required.
function daysOfAYear(Num) {
	if(Num%4==0 && Num%100 != 0){
		return 366
	}
	return 365
}

daysOfAYear(2024)
