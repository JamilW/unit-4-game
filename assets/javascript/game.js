// Variables defined
var wins = 0;
var losses = 0;
var genNumber;
var crystalValue;
var crystal;
var crystal = {
    blue:
    {
     name: "Blue",
     value: 0
    },
    green:
    {
     name: "Green",
     value: 0
    },
    red:
    {
     name: "Red",
     value: 0
    },
    yellow:
    {
     name: "Yellow",
     value: 0
    }
   };
var totalScore = [];

// Random generated number for player
function randomNumber() {
    genNumber = (Math.floor(Math.random() * 120 - 19 + 1) + 19);
    console.log(genNumber);
     $("#random-number").html(genNumber);
}
randomNumber();

// reset function
function reset()    {
    wins = 0;
    losses = 0
    totalScore = [];
    randomNumber();
}

// Conditions for wins/losses
if(genNumber === totalScore)   {
    wins += 1;
    totalScore;
    reset();
}
if(genNumber < totalScore)    {
    losses += 1;
    totalScore;
    reset();
}

// Random number generated for crystal images upon click
function getRandom()    {
    $("#blue").on("click", function()   {
    for(var i = 0; i < 1; i++) {
        crystal.blue.value = Math.floor(Math.random() * 12 - 1 + 1) + 1; 
            randomNo = crystal.blue.value;
            $("#total-score").html(totalScore);
            totalScore.push(randomNo);
            }
    $("#red").on("click", function()   {        
    for(var i = 0; i < 1; i++) {        
        crystal.red.value = Math.floor(Math.random() * 12 - 1 + 1) + 1; 
            randomNo = crystal.red.value;
            $("#total-score").html(totalScore);
            totalScore.push(randomNo);
            }
    $("#green").on("click", function()   {        
    for(var i = 0; i < 1; i++) {        
        crystal.green.value = Math.floor(Math.random() * 12 - 1 + 1) + 1; 
            randomNo = crystal.green.value;
            $("#total-score").html(totalScore);
            totalScore.push(randomNo);
            }
    $("#yellow").on("click", function()   {        
    for(var i = 0; i < 1; i++) {        
        crystal.yellow.value = Math.floor(Math.random() * 12 - 1 + 1) + 1; 
            randomNo = crystal.yellow.value;
            $("#total-score").html(totalScore);
            totalScore.push(randomNo);
                        }
                    });    
                 });        
            });
        });        
    }
    getRandom();
    

 