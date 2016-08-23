  // Footballer Top Trumps Pseudocode


// ----MVP Pseudocode----
// Write a function to compare the selected player attribute value with the corresponding CPU one, and return the higher value  ----IF/ELSE STATEMENT----
// write a function to append both card objects from the current trick to the end of the winner's card object array
// Write a function to select an attribute and pass its value into the compare function
// Write a function so the CPU automatically selects the highest attribute vale

// ----Potential Additional Pseudocode----

// Include "Three card pick" logic, which allows a player to select an attribute from their last 3 remaining cards

// window.onload()

$(start)


var playerCard;
var computerCard;

function start() {
  pickCards();

  // console.log("Player Card", playerCard);
  // console.log("Computer Card", computerCard);
}

function pickCards() {
  playerCard = footballers[Math.floor(Math.random() * footballers.length)];
  computerCard = footballers[Math.floor(Math.random() * footballers.length)];

  appendCards()
}

function appendCards() {
  $('#gameContainer').append(
      "<div id='playerCard'>" +
        "<h5>" + playerCard.name + "</h5>" +
        "<img src=" + playerCard.img + ">" +
        "<ul>" +
          "<li>Shooting " + playerCard.shooting + "</li>" +
          "<li>Passing " + playerCard.passing + "</li>" +
          "<li>Speed " + playerCard.speed + "</li>" +
          "<li>Stamina " + playerCard.stamina + "</li>" +
          "<li>Dribbling " + playerCard.dribbling + "</li>" +
          "<li>Tackling " + playerCard.tackling + "</li>" +
          "<li>Weak Foot " + playerCard.weakerFoot + "</li>" +
          "<li>Douchery " + playerCard.douchery + "</li>" +
      "</div>"
    )


  selectAttr();
}

function selectAttr(playerCard) {
  $('#gameContainer').one('click', 'li', function() {
    console.log('click');
    $(this).css("background", "green");
    var playerAttrVal = parseInt($(this).text().replace(/[^0-9]/g, '')); //this is ragex syntax--    

    console.log(playerAttrVal);
    
  });
};

function evaluateTrickWinner(){
  if (playerAttrVal === computerAttrVal){
    alert("It's a draw for that attribute! Please choose another one.");
  } else if (playerAttrVal > computerAttrVal) {
    playerWinsTrick();
  } else {
    computerWinsTrick();
  }
}

function playerWinsTrick(){

}


var playerSelectAttr = selectAttr(playerCard)       // player picks an attribute he thinks will beat the computer's score for that same attribute
var computerSelectAttr = selectAttr(computerCard)   // returns the value on the computer's card for that same attribute

// console.log(playerSelectAttr) 
// console.log(computerSelectAttr)



// function compareScores() {
//   if (playerAttrVal > computerAttrVal)


  // compare both scores and evaluate a winner



// $(document).ready(function(){
//   $("li").mouseover(function(){
//     $(this).css("cursor","pointer");
//         $(this).animate({width: "50%", height: "50%"}, 'slow');
//   })
// })
















