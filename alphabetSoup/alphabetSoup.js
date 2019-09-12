/* 
Write a function alphabetSoup(str) that takes a string and returns a string with
the letters in alphabetical order. Assume the input will not contain numbers or punctuation.
Hint: Check out split(), sort() and join() methods at 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Bonus:
If there are spaces in the input, do not include them in the result.
Hint: Check out trim() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

/**
Examples:

var result = alphabetSoup("hello");
console.log(result) // "ehllo"

var result = alphabetSoup("");
console.log(result) // ""

var result = alphabetSoup("f");
console.log(result) // "f"

var result = alphabetSoup("my string");
console.log(result) // " gimnrsty"

Bonus:
var result = alphabetSoup("my string oh my");
console.log(result) // "ghimmnorstyy"

**/
//Input: a string
//Output: A string with letters in alphabetical order

//Step 1: Create a variable to store our output 

//Step 2: Split the string into an array so that each character is its own element 

//Step 3: sort the array 

//Step 4: join the array so that it turns back into a string

//Step 5:Trim the string so that it removes all blank spaces

//Step 6: Return the value of my string output

function alphabetSoup(str) {
	var aSoup = str.split("").sort().join("");
	return aSoup; 
}
 var result = alphabetSoup("indigo");
 console.log(result)
