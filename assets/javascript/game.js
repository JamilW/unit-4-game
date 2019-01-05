// Variables defined
var wins = 0;
var losses = 0;
var genNumber;
var crystalsArray = [
    "assets/images/rsz_infinity-war-infinity-stone-infinity-gem-marvel-mind-gem-min.jpg",
    "assets/images/rsz_infinity-war-infinity-stone-infinity-gem-marvel-reality-gem.jpg",
    "assets/images/rsz_infinity-war-infinity-stone-infinity-gem-marvel-space-stone.jpg",
    "assets/images/rsz_infinity-war-infinity-stone-infinity-gem-marvel-time-stone-t.jpg"
]
var totalScore;

// Random generated number
function randomNumber() {
    genNumber = (Math.floor(Math.random() * 120 - 19 + 1) + 19);
    console.log(genNumber);
     $("#random-number").html(genNumber);
}
randomNumber();

// Adding points to player's score with click on crystal image

