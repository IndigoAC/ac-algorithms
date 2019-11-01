//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

var radius = prompt("What is the radius of your circle?");
function circleCalculation(radius) {
    var area = Math.round(Math.PI * Math.pow(radius, 2));
    var perimeter = Math.round(2 * Math.PI * radius);
    var sentence = "The area of the circle is " + area + " and the perimeter if the circle is " + perimeter + ".";
    //return the value of those calculations OR return sentence
    return sentence;
}
var value = circleCalculation(10);
console.log(value);