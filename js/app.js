// Footballer Top Trumps Pseudocode


// ----MVP Pseudocode----
// Write a function to 
// Must select randomly who acts first (player or CPU) at start of game
// Must display an indicator to show whose turn it is to act
// Attributes shown on players cards must be clickable when it is player's turn to act
// Must allow player to select an attribute to compare
// Must compare the value associated with selected attribute with matching one from CPU card
// Must evaluate who wins that round (trick) based on the higher value of the selected attribute
// Must take card from loser and add to the bottom of winner's pile each trick
// Must also move winner's card to bottom of their own deck after each trick
// Must choose who acts next based on result of previous turn - if current player wins a trick, they select the attribute again in the next trick
// Must 

// ----Potential Additional Pseudocode----

// Include "Three card pick" logic, which allows a player to select an attribute from their last 3 remaining cards



$(document).ready(function(){


  
  

  var $fooballers = $[
      {name: "Lionel Messi",       shooting: 94, passing: 91, speed: 89, stamina: 82, dribbling: 96, tackling: 63, weakerFoot: 8, hair: 4, douchebaggery: 1},
      {name: "Diego Costa",        shooting: 78, passing: 76, speed: 67, stamina: 73, dribbling: 56, tackling: 45, weakerFoot: 6, hair: 4, douchebaggery: 8},
      {name: "Stephane Sessegnon", shooting: 79, passing: 76, speed: 81, stamina: 79, dribbling: 75, tackling: 41, weakerFoot: 7, hair: 6, douchebaggery: 5},
      {name: "Bacary Sagna",       shooting: 62, passing: 67, speed: 73, stamina: 82, dribbling: 60, tackling: 78, weakerFoot: 6, hair: 1, douchebaggery: 2},
      {name: "Joey Barton",        shooting: 67, passing: 74, speed: 69, stamina: 73, dribbling: 96, tackling: 79, weakerFoot: 3, hair: 5, douchebaggery: 9},
      {name: "Mesut Ozil",         shooting: 76, passing: 88, speed: 74, stamina: 72, dribbling: 82, tackling: 44, weakerFoot: 7, hair: 7, douchebaggery: 3},
      ];


var playerCardCount = $(3);
var cpuCardCount = $(3);
$trickWinner = $(function() {
  if (cpuCardCount === 0 && playercardCount === 6) {
    alert("You Win!");
  } else if (playercardCount === 0 && cpuCardCount === 50) {
    alert("Yoo Lose!");
  }
});

console.log(trickWinner)








})