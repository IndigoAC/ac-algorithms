/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout (typeof ""); operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/

/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/
//Input: 2 number (hopefully)
//Output: either a boolean, 0, or -1 depending on the calculations 
//Step 1: Test if A is greater than B
// Step 2: create a return statement if a A > B
//Step 3: Make a condition if A < B. Else block that returns false 
//Step 4: Test is the 2 numbers are = , else block that would return 0.
// Step 5: Create a conditional statement that tests to see if a and b are both numbers.  If they are, proceed with steps 1-4. if not, return -1 conditional statement that wraps around our conditional statements in steps 1-4. and we will need a logical operator : && and type of to check out if the input are actually numbers.


function isBigger(a, b) {
 //Your code here
 if (typeof a === "number" && typeof b === "number"){
	if (a > b) {
		return true;
	} else if (a < b) {
		return false;
	} else {
		return 0;
	}
} else {
	return -1;
}
};
var result = isBigger (5,7)
console.log(result);