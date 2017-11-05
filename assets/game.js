

window.onload=function(){

    
    //Counts how many times the user wins
    var wins = 0; 
    //Count how many times the user loses
    var losses = 0;
    //Shows how many times the user has to guess
    var maxTries = 10;
    //this is the input displayed by user
    var currentTries = "";
    //calls get randomLetterFunction
    var randomLetter = getRandomLetter();

    //this inserts the values in the html at begininning when the pages loads
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = maxTries;
    document.getElementById("guessesSoFar").innerHTML = currentTries;
                    

    //this is an event handler and it triggered whenever there is a key stroke
    document.addEventListener("keydown",function(e){
       var input=String.fromCharCode(e.keyCode);


        //maxTries goes down as keystrokes go up
        maxTries--;
        //if the input is not empty, put a comma after it. Else, don't put a comma after it. 
        if (currentTries !== ""){
            currentTries = currentTries + ", " + input.toLowerCase();
        }
        else {
            currentTries = input.toLowerCase();
        }

        //If user's input matches computer's number, increase wins, reset tries, generate another random letter, guesses reset
        if (input.toLowerCase() === randomLetter){
            wins++;
            maxTries = 10;
            randomLetter = getRandomLetter();
            currentTries ="";
            console.log(randomLetter);
        }

        //else, once tries go to 0, losses increase, reset tries, generate another random number
        else if (maxTries === 0){
            losses++;
            maxTries = 10;
            randomLetter = getRandomLetter();
            currentTries = "";
            
        }

        //change values in html based on the input        
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesLeft").innerHTML = maxTries;
        document.getElementById("guessesSoFar").innerHTML = currentTries;

    });



};
//possibleLetters is a string. Then it picks a character at random character from the string.
function getRandomLetter (){
    var possibleLetters = "abcdefghijklmnopqrstuvwxzy"
    return possibleLetters.charAt(Math.floor(Math.random()*possibleLetters.length));
}


