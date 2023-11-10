var isDate = function (input) {
  //   write your code here
	let date = new Date(input);
	 if (Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date.getTime())) {
    return true;
  } else if (typeof input === 'number' && !isNaN(input)) {
    // Check if the input is a valid timestamp
    return true;
  } else {
    return false;
  }
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));    

