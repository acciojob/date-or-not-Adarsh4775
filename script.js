var isDate = function (input) {
  //   write your code here
	if(input === new Date() || input === "dd/mm/year")
	{
		return true;
	}
	else
	{
		return false;
	}
}

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));  

