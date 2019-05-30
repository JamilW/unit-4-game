// GLOBAL VARIABLES
// =================================================================

// Crystal Variables
var crystal = {
    yellow:
    {
      name: "Yellow",
      value: 0
    },
    red:
    {
      name: "Red",
      value: 0
    },
    blue:
    {
      name: "Blue",
      value: 0
    },
    green:
    {
      name: "Green",
      value: 0
    }
  };
  
  // Scores (Current and Target)
  var currentScore = 0;
  var targetScore = 0;
  
  // Wins and Losses
  var winCount = 0;
  var lossCount = 0;
  
  
  // FUNCTIONS
  // =================================================================
  
  // Helper Function for getting random numbers
  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Starts the Game (and restarts the game)
  var startGame = function() {
  
    // Reset the Current Score
    currentScore = 0;
  
    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120);
  
    // Set different values for each of the crystals (between 1 and 12)
    crystal.yellow.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.blue.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
  
    // Change the HTML to reflect all of these changes
    $("#total-score").text(currentScore);
    $("#random-number").text(targetScore);
  
  
    // Testing Console
    console.log("-----------------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
      " | Yellow: " + crystal.yellow.value);
    console.log("-----------------------------------");
  };
  
  // Check if User Won or Lost and Reset the Game
  var checkWin = function() {
  
    // Check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
      alert("Sorry. You lost!");
      console.log("You Lost");
      // Add to Loss Counter
      lossCount++;
  
      // Change Loss Count HTML
      $("#losses").text(lossCount) = "Losses: " + lossCount;
  
      // Restart the game
      startGame();
    }
  
    else if (currentScore === targetScore) {
      alert("Congratulations! You Won!");
      console.log("You Won!");
      
      // Add to the Win Counter
      winCount++;
      // Change Win Count HTML
      $("#wins").text(winCount) = "Wins: " + winCount;
      // Restart the game
      startGame();
    }
    
  };
  
  // Respond to clicks on the crystals
  var addValues = function(clickedCrystal) {
  
    // Change currentScore
    currentScore += clickedCrystal.value;
  
    // Change the HTML to reflect changes in currentScore
    $("#total-score").text(currentScore);
  
    // Call the checkWin Function
    checkWin();
  
    // Testing Console
    console.log("Your Score: " + currentScore);
  };
  
  // MAIN PROCESS
  // =================================================================
  
  // Starts the Game the First Time.
  startGame();
  
  $("#yellow").click(function() {
    addValues(crystal.yellow);
  });
  
  $("#red").click(function() {
    addValues(crystal.red);
  });
  
  $("#blue").click(function() {
    addValues(crystal.blue);
  });
  
  $("#green").click(function() {
    addValues(crystal.green);
  });
  

// // Define variables
// var wins = 0;
// var losses = 0;
// var totalScore = 0;
// var genNumber;
// var spaceStone;
// var timeStone;
// var mindStone;
// var realityStone;

// // Assigning random crystal numbers
// spaceStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
// timeStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
// mindStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
// realityStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;

// // Function for game resetting
// function reset() {
//     totalScore = 0;
//     spaceStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
//     timeStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
//     mindStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
//     realityStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
// }

// // Generating random winning number
// function randomNumber() {
//     genNumber = (Math.floor(Math.random() * 120 - 19 + 1) + 19);
//     console.log(genNumber);
//      $("#random-number").html(genNumber);
// }
// randomNumber();

// // Reset game conditions
// function condition()    {
//     if (totalScore === genNumber)   {
//     wins ++;
//     $("#wins").html(wins) = "Wins: " + wins;
//     reset();
// }   else if (totalscore > genNumber)    {
//     losses ++;
//     alert("Sorry. You lost!");
//     $("#losses").html(losses) = "Losses: " + losses;
//     reset();
//     }
// }

// // Adding crystal values to total score{
// function game() {
//     $("#blue").on("click", function()   {
//         totalScore += spaceStone;
//         console.log(totalScore);
//         $("#total-score").html(totalScore);
//         condition();
//         });
//     $("#yellow").on("click", function()   {
//         totalScore += mindStone;
//         console.log(totalScore);
//         $("#total-score").html(totalScore);  
//         condition();
//         });
//     $("#red").on("click", function()   {
//         totalScore += realityStone;
//         console.log(totalScore);
//         $("#total-score").html(totalScore);
//         condition()
//         });
//     $("#green").on("click", function()   {
//         totalScore += timeStone;
//         console.log(totalScore);
//         $("#total-score").html(totalScore);
//         condition();
//         });
//     }
// game();
    