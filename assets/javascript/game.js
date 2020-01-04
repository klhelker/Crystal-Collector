var wins=0;
var losses=0;
var counter = 0;

var randomNums = Math.floor(Math.random() * (120 - 19 + 1)) + 19;;

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
     
    

    var crystalValue = ($(this).attr("data-crystalvalue"));

    

    crystalValue = parseInt(crystalValue);

  counter += crystalValue;
    
  $("#currentScore").text(counter);

  if (counter === randomNums) {
    alert("You win!");
    wins+=1
    
    $("#wins").text(wins);
    reset()
  }

  else if (counter >= randomNums) {
    alert("You lose!!");
    losses+=1
    
    $("#losses").text(losses);
    reset()
  }

});

