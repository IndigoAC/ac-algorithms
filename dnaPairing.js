//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//Input : String
//Output: Nested array 
//Tools: .split();.push();
//Create two variables one that is the input string before it turns into the array and another one that stores an empty array for the output.
//For loop to loop through letters of arrays to dna base pairs
//Conditional statment that checks to seee if the current letters we are on in the loop is equal to one of the 4 letter
// if true push an array with two string into our variable storing the array




function pairElement(str) {
   //your code here
  var dnaOuput = [];
  var dnaArr = str.split("");

  for(var i=0; i<str.length; i++ ){
    if(dnaOuput[i]===G){
      dnaArr.push(["G", "C"]);
    } else if (dnaOuput[i]==="C") {
      dnaArr.push(["C", "G"]);
    } else if (dnaOuput[i]==="A"){
      dnaArr.push(["A", "T"]);
    } else if (dnaOuput[i]==="T"){
      dnaArr.push(["T", "A"]);
    }
  }
  return dnaArr;
}

pairElement("GCG");


//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]