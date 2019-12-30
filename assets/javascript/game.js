

var randomNums = Math.floor(Math.random() * (120 - 19 + 1)) + 19;;
document.getElementById("randomNum").innerHTML = randomNums;

function myFunction() {
  randomNums.push();
  document.getElementById("randomNum").innerHTML = randomNums;
}


var targetNumber = randomNums;
// Each crystal should have a random hidden value between 1 - 12
// Here we set the "number-to-guess" header to match the "targetNumber".
// Eventually this will allow us to change the HTML to match the value in the JavaScript.
$("#randomNum").text(targetNumber);

var counter = 0;

var imgCrystal = $("<img>");

var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];

for (var i = 0; i < numberOptions.length; i++){

imgCrystal.attr("data-crystalvalue", numberOptions[i]);}

$(".crystal-image").on("click", function() {
    

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

  counter += 10;
  counter += crystalValue;

  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});

