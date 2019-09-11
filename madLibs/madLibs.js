//1) Add a script tag to the bottom of the page for your code. 2) Add an event listener to the button so that it calls a makeMadLib function when clicked. 3)In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Laura really likes good code.") 


// Peoblems: Need to get values from the user in order to create a Mad Lib 

// Step 1: User enterd the information and clicks the button 
 $(document).ready(function(){
    function makeMadLib(){
        var noun = $("#noun").val();
        var adjective = $("#adjective").val();
        var personName = $("#personName").val();
        $("story").append("<p>" + personName + "really likes" + adjective + " " + noun + "</p>"
        );
        var userOject = {};
        userOject.noun = noun;
        userOject.adjective = adjective;
        userOject.person = person;
    }
// Event listener to execute  makeMAkeLib function
    $("lib-button").on("clcik", function(){
    makeMadLib();
    });
 });

// Step 2: Create an event listener to be listening on the button, so that when the user clicks it, we can execute a callback function - jQuery,use .on() for click event 

// Step 3: Create a function that has 3 variables for each word the user types in. Each of those variables will have the value of what the user typed in. -use jQuery .val() method. 

// Step 4: Dsipaly the data in a sentence to the user- Query .append() to the div in the HTML.

// Step 5: Create a variable and set it equal to empty curly brackets. Add three key value pairs with dot notation

//Bonus: Make an object with the list elements as keys and the inputs as values.  