// Footballer Top Trumps Pseudocode


// ----MVP Pseudocode----
// Write a function to compare the selected player attribute value with the corresponding CPU one, and return the higher value  ----IF/ELSE STATEMENT----
// write a function to append both card objects from the current trick to the end of the winner's card object array
// Write a function to select an attribute and pass its value into the compare function
// Write a function so the CPU automatically selects the highest attribute vale

// ----Potential Additional Pseudocode----

// Include "Three card pick" logic, which allows a player to select an attribute from their last 3 remaining cards

// window.onload()

// $(document).ready(function(){
//   var $(playerAttrVal) = function(){

//   }

//   var $playerCardCount = $(3);
//   var $cpuCardCount = $(3);
//   var $previousRoundWinner =
//   $("tr").hover(function(){
//     $(this).css({"color: white"});
//   });


// var footballers = [
// {name: "Lionel Messi",       shooting: 94, passing: 91, speed: 89, stamina: 82, dribbling: 96, tackling: 63, weakerFoot: 92, hair: 65, douchebaggery: 7},
// {name: "Diego Costa",        shooting: 78, passing: 76, speed: 67, stamina: 73, dribbling: 56, tackling: 45, weakerFoot: 71, hair: 54, douchebaggery: 91},
// {name: "Stephane Sessegnon", shooting: 79, passing: 76, speed: 81, stamina: 79, dribbling: 75, tackling: 41, weakerFoot: 69, hair: 66, douchebaggery: 45},
// {name: "Bacary Sagna",       shooting: 62, passing: 67, speed: 73, stamina: 82, dribbling: 60, tackling: 78, weakerFoot: 42, hair: 11, douchebaggery: 28},
// {name: "Joey Barton",        shooting: 67, passing: 74, speed: 69, stamina: 73, dribbling: 96, tackling: 79, weakerFoot: 67, hair: 57, douchebaggery: 98},
// {name: "Mesut Ozil",         shooting: 76, passing: 88, speed: 77, stamina: 72, dribbling: 82, tackling: 44, weakerFoot: 77, hair: 68, douchebaggery: 27},
// ];

// // console.log($footballers)



// // Write a function to compare the selected player attribute value with the corresponding CPU one, and return the higher value  ----IF/ELSE STATEMENT----
// var trickWinner = function(playerAttrVal, cpuAttrVal) {
//   if (playerAttrVal === cpuAttrVal) {
//     alert("It's a tie! Please choose another attribute");
//   } else if (playerAttrVal > cpuAttrVal){
//     return playerAttrVal;
//   } else {
//     return cpuAttrVal;
//   }
// }


// console.log(trickWinner(88, 67));







// var footballerTest = {name: "Lionel Messi", shooting: 94, passing: 91, speed: 89, stamina: 82, dribbling: 96, tackling: 63, weakerFoot: 8, hair: 4, douchebaggery: 1};

// var arr = Object.keys(footballer).map(function ( key ) { return footballer[key]; });
// var max = Math.max.apply( null, arr );

// console.log()




$(start)

var footballers = [
{name: "Lionel Messi",       img: 'http://futhead.cursecdn.com/static/img/16/players/158023.png', shooting: 94, passing: 91, speed: 89, stamina: 82, dribbling: 96, tackling: 63, weakerFoot: 92, malice: 7},
{name: "Diego Costa",        img: 'http://futhead.cursecdn.com/static/img/16/players/179844.png', shooting: 78, passing: 76, speed: 67, stamina: 73, dribbling: 56, tackling: 45, weakerFoot: 71, malice: 91},
{name: "St&#233phane Sess&#232gnon", img: 'http://futhead.cursecdn.com/static/img/16/players/163699.png', shooting: 79, passing: 76, speed: 81, stamina: 79, dribbling: 75, tackling: 41, weakerFoot: 69, malice: 45},
{name: "Bacary Sagna",       img: 'http://futhead.cursecdn.com/static/img/16/players/163419.png', shooting: 62, passing: 67, speed: 73, stamina: 82, dribbling: 60, tackling: 78, weakerFoot: 42, malice: 28},
{name: "Joey Barton",        img: "http://futhead.cursecdn.com/static/img/16/players/138193.png", shooting: 67, passing: 74, speed: 69, stamina: 73, dribbling: 96, tackling: 79, weakerFoot: 67, malice: 98},
{name: "Mesut Ozil",         img: "http://futhead.cursecdn.com/static/img/16/players/176635.png", shooting: 76, passing: 88, speed: 77, stamina: 72, dribbling: 82, tackling: 44, weakerFoot: 77, malice: 27},
];

var playerCard;
var computerCard;

function start() {
  pickCards();

  console.log("Player Card", playerCard);
  console.log("Computer Card", computerCard);
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
          "<li>Malice " + playerCard.malice + "</li>" +
      "</div>"
    )


  selectAttr();
}

function selectAttr() {
  $('#gameContainer').one('click', 'li', function() {
    console.log('click');
    $(this).css("background", "green");
    var number = parseInt($(this).text().replace(/[^0-9]/g, '')); //this is ragex syntax--
    console.log(number);



    // compareScores(number)
  })
}


function compareScores() {
  // compare both scores and evaluate a winner

}

















