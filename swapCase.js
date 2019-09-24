/*

Given a string, swap the case of each character and return it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

/ Psudo code Input output
(for loops are for arrays)
coditional statement to test if it is lower case
Something to store the output
 may need an indexof() method

/ Psudo code
/Input:string
Output:string with letters transformed (swapped letter cases)

Create a  variables, one to store the str and another to store the array.
Use a loop to go through each letter (turning a string into an array using .slpit(""))

create a for loop: thhe purpose is to run through the  array and look at each letter
	each 

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/
// function swapCase(str) {
// 	var output = "";
// 	var array =str.split("");
// 	array.map((letter, i))=>{
// 		letter=== .toUpperCase() ? (
// 			output+= letter.toLowerCase()
// 		) : += array [i]
// 	}

function swapCase(str) {
 var output = "";
 var array = str.split("");
for(var i =0; i< array.length; i++){
	if (array [i] === array [i].toLowerCase()) {
		output = output + array[i].toUpperCase();
	} else {
		changeCase = changeCase + userStr[i].toLowerCase();
	}
}
return changeCase;
}
var result = swapCase("Oh Hello!!");
console.log(result)