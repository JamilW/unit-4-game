// Define variables
var wins = 0;
var losses = 0;
var totalScore = 0;
var genNumber;
var spaceStone;
var timeStone;
var mindStone;
var realityStone;

// Assigning random crystal numbers
spaceStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
timeStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
mindStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
realityStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;

// Function for game resetting
function reset() {
    totalScore = 0;
    spaceStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
    timeStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
    mindStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
    realityStone = Math.floor(Math.random() * 12 - 1 + 1) + 1;
}

// Generating random winning number
function randomNumber() {
    genNumber = (Math.floor(Math.random() * 120 - 19 + 1) + 19);
    console.log(genNumber);
     $("#random-number").html(genNumber);
}
randomNumber();

// Reset game conditions
function condition()    {
    if (totalScore === genNumber)   {
    wins += 1;
    $("#wins").html(wins) = "Wins: " + wins;
    reset();
}   else if (totalscore > genNumber)    {
    losses += 1;
    $("#losses").html(losses) = "Losses: " + losses;
    reset();
    }
}

// Adding crystal values to total score{
function game() {
    $("#blue").on("click", function()   {
        totalScore += spaceStone;
        console.log(totalScore);
        $("#total-score").html(totalScore);
        condition();
        });
    $("#yellow").on("click", function()   {
        totalScore += mindStone;
        console.log(totalScore);
        $("#total-score").html(totalScore);  
        condition();
        });
    $("#red").on("click", function()   {
        totalScore += realityStone;
        console.log(totalScore);
        $("#total-score").html(totalScore);
        condition()
        });
    $("#green").on("click", function()   {
        totalScore += timeStone;
        console.log(totalScore);
        $("#total-score").html(totalScore);
        condition();
        });
    }
game();
    