//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators



//Input: a number
// Output: a number, the factorial of that number which means the product of all of the numbers between 1 and the number chosen.
// Use a variable to store the output (the product)
// Multiplication operator
// Is there a javascript method that calculates a factorial? (GTS question)
// Loop: we need to start at one and end at the number that is the parameter, and instead of adding each time in the loop we can multiply

//factorial is the output
function factorializeIt(num) {
  var factorial = 1 
 for(var i=1; i<=num; i++){
   factorial = factorial * i 
  } 
  return factorial;
}
       console.log(factorializeIt(5));