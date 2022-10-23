/*
Build a very simple 5 Dice roll game.
    Points (see below)
    Show a round score 
    Show a total score
*/

// fixing Node.js Error: "Cannot Get ${url}"

// looked this up: DOMContentLoaded - fires up all w/n DOM w/o waiting for images
// and styles to finish loading -- load together
// window.addEventListener( 'DOMContentLoaded', function() {
    
    // const button = document.querySelector(".activate");

    // const die1 = document.getElementById('die1');
    // const die2 = document.getElementById('die2');
    // const die3 = document.getElementById('die3');
    // const die4 = document.getElementById('die4');
    // const die5 = document.getElementById('die5');
    
    // const result = document.getElementById('result');
var die1;
var die2;
var die3;
var die4;
var die5;
var roundScore = 0;
var accumTotal = 0;

function rollDice() {
    die1 = getRandomInt(1,7);
    die2 = getRandomInt(1,7);
    die3 = getRandomInt(1,7);
    die4 = getRandomInt(1,7);
    die5 = getRandomInt(1,7);
}
        // Can't get button to work
        // const button = document.getElementById('button');
        // document.body.appendChild(button);
        // return button;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
        // die1 = Math.floor(Math.random() *6) +1;
        // die2 = Math.floor(Math.random() *6) +1;
        // die3 = Math.floor(Math.random() *6) +1;
        // die4 = Math.floor(Math.random() *6) +1;
        // die5 = Math.floor(Math.random() *6) +1;
        // total = die1 + die2 + die3 + die4 + die5;

return Math.floor(Math.random() * (max - min) + min);
}
    
function scoreDice() {
    var listDice = [die1, die2, die3, die4, die5];
    roundScore = 0;
    var countRolls = {};
        
    // from Kevin:
    for (i = 1; i < 7; i++) {
        countRolls[listDice[i]] = 0
    }
    // from Kevin:
    for (i = 0; i<= 6; i++) {
        countRolls [listDice[i]] += 1;}

    // 1's are worth 100 points
    if (countRolls[1] == 1){
        countRolls[1] -= 1;
        roundScore += 100;
        accumTotal += 100;
    }

    if (countRolls[1] == 2){
        countRolls[1] -= 2;
        roundScore += 200;
        accumTotal += 200;
    }

    // Triple 1's are worth 1000
    if (countRolls[1] >= 3) {
        countRolls[1] -= 3;
        roundScore += 1000;
        accumTotal += 1000;
    }

    // 5's are worth 50 points
    if (countRolls[5] == 1){
        countRolls[5] -= 1;
        roundScore += 50;
         accumTotal += 50;
    }

    if (countRolls[5] == 2){
        countRolls[5] -= 2;
        roundScore += 100;
        accumTotal += 100;
    }

    // Triple 2-6's are worth the face value * 100 (2=200, 6=600, etc.) 
    // *** NOTE! Singles & doubles of 2,3,4,6 --> no mention of points! ***
    if (countRolls[2] >= 3) {
        countRolls[2] -= 3;
        roundScore += 200;
        accumTotal += 200;
    }

    if (countRolls[3] >= 3) {
        countRolls[3] -= 3;
        roundScore += 300;
        accumTotal += 300;
    }

    if (countRolls[4] >= 3) {
        countRolls[4] -= 3;
        roundScore += 400;
        accumTotal += 400;
    }

    if (countRolls[5] >= 3) {
        countRolls[5] -= 3;
        roundScore += 500;
        accumTotal += 500;
    }

    if (countRolls[6] >= 3) {
        countRolls[6] -= 3;
        roundScore += 600;
        accumTotal += 600;
    }

}

// button.addEventListener('click', function(rollDice){});
// Kevin's version: 
document.getElementsByClassName("Activate")[0].addEventListener("click", function(event){      
    rollDice();
    scoreDice();

    document.getElementsByClassName("Dice")[0].innerText = `[ ${die1} ] [ ${die2} ] [ ${die3} ] [ ${die4} ] [ ${die5} ]`;
    // document.getElementById("result"[0]).innerText = `You rolled ${die1}, ${die2}, ${die3}, ${die4}, ${die5} for a total of ${roundScore} points this round.`;
    document.getElementsByClassName("Round")[0].innerText = 'This Round: ' + roundScore;
    document.getElementsByClassName("Score")[0].innerText = 'Total: ' + accumTotal;
});
// });

