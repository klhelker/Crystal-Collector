var wins=0;
var losses=0;

var counter = 0;

var randomNums = Math.floor(Math.random() * (120 - 19 + 1)) + 19;;



// Each crystal should have a random hidden value between 1 - 12
// Here we set the "number-to-guess" header to match the "targetNumber".
// Eventually this will allow us to change the HTML to match the value in the JavaScript.
$("#randomNum").text(randomNums);

function reset (){

    randomNums = Math.floor(Math.random() * (120 - 19 + 1)) + 19;;  
    $("#randomNum").text(randomNums);
    randomGuess = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;
    $("#sapphire").attr("data-crystalvalue",randomGuess)
    randomGuess = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;
    $("#ruby").attr("data-crystalvalue",randomGuess)
    randomGuess = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;
    $("#emerald").attr("data-crystalvalue",randomGuess)
    randomGuess = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;
    $("#diamond").attr("data-crystalvalue",randomGuess)
    counter=0;
    $("#currentScore").text(counter);
}
  reset()

$(document).on("click", ".crystal-img", function() {
     
    console.log("clicking");

    var crystalValue = ($(this).attr("data-crystalvalue"));

    console.log(crystalValue);

    crystalValue = parseInt(crystalValue);

  counter += crystalValue;
    console.log (counter);
  $("#currentScore").text(counter);

  if (counter === randomNums) {
    alert("You win!");
    wins+=1
    console.log (wins,losses);
    print new win value to page $()
    reset()
  }

  else if (counter >= randomNums) {
    alert("You lose!!");
    losses+=1
    console.log (wins,losses)
    print new loss value page $()
    reset()
  }

});

