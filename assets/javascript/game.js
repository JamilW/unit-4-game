// Variables defined
var wins = 0;
var losses = 0;
var genNumber;
var crystalValue;
var crystal;
var crystalsArray = [
    "assets/images/rsz_infinity-war-infinity-stone-infinity-gem-marvel-mind-gem-min.jpg",
    "assets/images/rsz_infinity-war-infinity-stone-infinity-gem-marvel-reality-gem.jpg",
    "assets/images/rsz_infinity-war-infinity-stone-infinity-gem-marvel-space-stone.jpg",
    "assets/images/rsz_infinity-war-infinity-stone-infinity-gem-marvel-time-stone-t.jpg"
];
var totalScore = [];
//var infinityStones = crystalsArray[Math.floor(Math.random() * crystalsArray.length)];

// Random generated number for player
function randomNumber() {
    genNumber = (Math.floor(Math.random() * 120 - 19 + 1) + 19);
    console.log(genNumber);
     $("#random-number").html(genNumber);
}
randomNumber();

// Random number generated for crystal images upon click
$(document).ready(function() {
    $(".img-fluid").on("click", function() {
    score = "[i] + [i]";
    for (var i = 0; i < 4; i++) {
        randomNo = Math.floor(Math.random() * 12 - 1 + 1) + 1;
        score = randomNo;
        //$("#total-score").html(totalScore);
        }
        totalScore.push(score); //randomNo;
$("#total-score").html(totalScore);
    });
    
}); 

// Conditions for wins/losses
    if(genNumber === totalScore)   {
        wins++;
        totalScore;
    }
    if(genNumber < totalScore)    {
        losses++;
        totalScore;
    }
   

