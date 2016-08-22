// Footballer Top Trumps Pseudocode


// ----MVP Pseudocode----
// Write a function to compare the selected player attribute value with the corresponding CPU one, and return the higher value  ----IF/ELSE STATEMENT----
// write a function to append both card objects from the current trick to the end of the winner's card object array
// Write a function to select an attribute and pass its value into the compare function
// Must choose who acts next based on result of previous turn - if current player wins a trick, they select the attribute again in the next trick
// Must 

// ----Potential Additional Pseudocode----

// Include "Three card pick" logic, which allows a player to select an attribute from their last 3 remaining cards

window.onload()

// $(document).ready(function(){
//   var $playerAttrVal = 

//   var $playerCardCount = $(3);
//   var $cpuCardCount = $(3);
//   var $previousRoundWinner =
//   $("tr").hover(function(){
//     $(this).css({"color: white"});
//   });


var footballer = [
{name: "Lionel Messi",       shooting: 94, passing: 91, speed: 89, stamina: 82, dribbling: 96, tackling: 63, weakerFoot: 92, hair: 65, douchebaggery: 7},
{name: "Diego Costa",        shooting: 78, passing: 76, speed: 67, stamina: 73, dribbling: 56, tackling: 45, weakerFoot: 71, hair: 54, douchebaggery: 91},
{name: "Stephane Sessegnon", shooting: 79, passing: 76, speed: 81, stamina: 79, dribbling: 75, tackling: 41, weakerFoot: 69, hair: XX, douchebaggery: 45},
{name: "Bacary Sagna",       shooting: 62, passing: 67, speed: 73, stamina: 82, dribbling: 60, tackling: 78, weakerFoot: XX, hair: 11, douchebaggery: 28},
{name: "Joey Barton",        shooting: 67, passing: 74, speed: 69, stamina: 73, dribbling: 96, tackling: 79, weakerFoot: XX, hair: 57, douchebaggery: 98},
{name: "Mesut Ozil",         shooting: 76, passing: 88, speed: 74, stamina: 72, dribbling: 82, tackling: 44, weakerFoot: XX, hair: 68, douchebaggery: 27},
];

// console.log($footballers)



// Write a function to compare the selected player attribute value with the corresponding CPU one, and return the higher value  ----IF/ELSE STATEMENT----
var trickWinner = function(playerAttrVal, cpuAttrVal) {
  if (playerAttrVal === cpuAttrVal) {
    alert("It's a tie! Please choose another attribute");
  } else if (playerAttrVal > cpuAttrVal){
    return playerAttrVal;
  } else {
    return cpuAttrVal;
  }
}



console.log(trickWinner(88, 67));

playerCard = footballers[Math.floor(Math.random()*footballers.length)]
cpuCard = footballers[Math.floor(Math.random()*footballers.length)]

console.log(playerCard)

var selectedAttr   =  
var playerAttrVal  = footballer.map(function(a) {return a.foo;});
var cpuAttrVal     = footballer.keys( obj ).map(function ( key ) { return obj[key]; });
Math.cpuAttrVal.apply( null, arr );

// });





var footballerTest = {name: "Lionel Messi", shooting: 94, passing: 91, speed: 89, stamina: 82, dribbling: 96, tackling: 63, weakerFoot: 8, hair: 4, douchebaggery: 1};

var arr = Object.keys(footballer).map(function ( key ) { return footballer[key]; });
var max = Math.max.apply( null, arr );

console.log





















