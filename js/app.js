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
{name: "Lionel Messi",       img: 'http://futhead.cursecdn.com/static/img/16/players/158023.png', shooting: 94, passing: 91, speed: 89, stamina: 88, dribbling: 96, tackling: 63, weakerFoot: 92, douchery: 7},
{name: "Diego Costa",        img: 'http://futhead.cursecdn.com/static/img/16/players/179844.png', shooting: 78, passing: 76, speed: 67, stamina: 73, dribbling: 56, tackling: 45, weakerFoot: 71, douchery: 91},
{name: "Stephane Sessegnon", img: 'http://futhead.cursecdn.com/static/img/16/players/163699.png', shooting: 79, passing: 76, speed: 81, stamina: 79, dribbling: 75, tackling: 41, weakerFoot: 69, douchery: 45},
{name: "Bacary Sagna",       img: 'http://futhead.cursecdn.com/static/img/16/players/163419.png', shooting: 62, passing: 67, speed: 73, stamina: 82, dribbling: 60, tackling: 78, weakerFoot: 42, douchery: 28},
{name: "Joey Barton",        img: "http://futhead.cursecdn.com/static/img/16/players/138193.png", shooting: 67, passing: 74, speed: 69, stamina: 73, dribbling: 96, tackling: 79, weakerFoot: 67, douchery: 98},
{name: "Santi Cazorla",      img: "http://futhead.cursecdn.com/static/img/16/players/146562.png", shooting: 79, passing: 83, speed: 73, stamina: 74, dribbling: 85, tackling: 37, weakerFoot: 95, douchery: 35},
{name: "Paul Pogba",         img: "http://futhead.cursecdn.com/static/img/16/players/195864.png", shooting: 82, passing: 77, speed: 75, stamina: 81, dribbling: 83, tackling: 65, weakerFoot: 78, douchery: 66},
{name: "Coutinho",           img: "http://futhead.cursecdn.com/static/img/16/players/189242.png", shooting: 79, passing: 70, speed: 77, stamina: 70, dribbling: 72, tackling: 28, weakerFoot: 52, douchery: 45},
{name: "Zlatan Ibrahimovic", img: "http://www.futwiz.com/assets/img/fifa16/faces/41236.png",      shooting: 84, passing: 72, speed: 61, stamina: 69, dribbling: 73, tackling: 47, weakerFoot: 66, douchery: 78},
{name: "Cristiano Ronaldo",  img: "http://www.futwiz.com/assets/img/fifa16/faces/20801.png",      shooting: 88, passing: 73, speed: 86, stamina: 80, dribbling: 87, tackling: 52, weakerFoot: 79, douchery: 88},
{name: "Alexis Sanchez",     img: "http://futhead.cursecdn.com/static/img/16/players/184941.png", shooting: 80, passing: 77, speed: 85, stamina: 84, dribbling: 86, tackling: 36, weakerFoot: 75, douchery: 45},
{name: "Sergio Aguero",      img: "http://futhead.cursecdn.com/static/img/16/players/153079.png", shooting: 83, passing: 79, speed: 76, stamina: 64, dribbling: 84, tackling: 30, weakerFoot: 67, douchery: 38},
{name: "David Silva",        img: "http://futhead.cursecdn.com/static/img/16/players/168542.png", shooting: 73, passing: 80, speed: 75, stamina: 71, dribbling: 85, tackling: 30, weakerFoot: 88, douchery: 40},
{name: "John Stones",        img: "http://futhead.cursecdn.com/static/img/16/players/203574.png", shooting: 35, passing: 60, speed: 73, stamina: 78, dribbling: 55, tackling: 77, weakerFoot: 35, douchery: 45},
{name: "Sergio Ramos",       img: "http://futhead.cursecdn.com/static/img/16/players/155862.png", shooting: 35, passing: 69, speed: 55, stamina: 64, dribbling: 55, tackling: 82, weakerFoot: 47, douchery: 78},
{name: "Neymar Jnr",         img: "http://futhead.cursecdn.com/static/img/16/players/190871.png", shooting: 80, passing: 78, speed: 86, stamina: 72, dribbling: 82, tackling: 23, weakerFoot: 80, douchery: 75},
{name: "David Alaba",        img: "http://futhead.cursecdn.com/static/img/16/players/197445.png", shooting: 40, passing: 55, speed: 75, stamina: 88, dribbling: 23, tackling: 87, weakerFoot: 77, douchery: 27},
{name: "Mario Gotze",        img: "http://futhead.cursecdn.com/static/img/16/players/192318.png", shooting: 76, passing: 88, speed: 77, stamina: 72, dribbling: 82, tackling: 44, weakerFoot: 43, douchery: 27},
{name: "Jordi Alba",         img: "http://futhead.cursecdn.com/static/img/16/players/189332.png", shooting: 70, passing: 75, speed: 65, stamina: 72, dribbling: 73, tackling: 56, weakerFoot: 83, douchery: 27},
{name: "Aaron Ramsey",       img: "http://futhead.cursecdn.com/static/img/16/players/186561.png", shooting: 77, passing: 85, speed: 76, stamina: 89, dribbling: 82, tackling: 74, weakerFoot: 72, douchery: 40},
{name: "Gareth Bale",        img: "http://futhead.cursecdn.com/static/img/16/players/173731.png", shooting: 76, passing: 88, speed: 77, stamina: 72, dribbling: 82, tackling: 44, weakerFoot: 74, douchery: 27},
{name: "Paulo Dybala",       img: "http://cdn.sofifa.org/16/players/211110.png",                  shooting: 86, passing: 74, speed: 83, stamina: 77, dribbling: 88, tackling: 23, weakerFoot: 68, douchery: 65},
{name: "Antoine Griezmann",  img: "http://futhead.cursecdn.com/static/img/16/players/194765.png", shooting: 76, passing: 88, speed: 77, stamina: 72, dribbling: 82, tackling: 44, weakerFoot: 77, douchery: 27},
{name: "Luis Suarez",        img: "http://futhead.cursecdn.com/static/img/16/players/176580.png", shooting: 87, passing: 77, speed: 74, stamina: 78, dribbling: 87, tackling: 25, weakerFoot: 83, douchery: 94},
{name: "Eden Hazard",        img: "http://futhead.cursecdn.com/static/img/16/players/183277.png", shooting: 76, passing: 88, speed: 77, stamina: 72, dribbling: 82, tackling: 22, weakerFoot: 77, douchery: 80},
{name: "Thomas Muller",      img: "http://futhead.cursecdn.com/stati c/img/16/players/189596.png",shooting: 76, passing: 88, speed: 77, stamina: 72, dribbling: 82, tackling: 32, weakerFoot: 77, douchery: 27},
{name: "Andres Iniesta",     img: "http://futhead.cursecdn.com/static/img/16/players/41.png",     shooting: 76, passing: 88, speed: 77, stamina: 88, dribbling: 82, tackling: 44, weakerFoot: 77, douchery: 27},
{name: "Arturo Vidal",       img: "http://futhead.cursecdn.com/static/img/16/players/181872.png", shooting: 76, passing: 80, speed: 76, stamina: 85, dribbling: 67, tackling: 69, weakerFoot: 87, douchery: 67},
{name: "Marek Hamsik",       img: "http://futhead.cursecdn.com/static/img/16/players/171877.png", shooting: 67, passing: 89, speed: 70, stamina: 72, dribbling: 82, tackling: 44, weakerFoot: 77, douchery: 27},
{name: "Karim Benzema",      img: "http://futhead.cursecdn.com/static/img/16/players/165153.png", shooting: 76, passing: 88, speed: 77, stamina: 72, dribbling: 82, tackling: 44, weakerFoot: 77, douchery: 84},
{name: "Marco Reus",         img: "http://futhead.cursecdn.com/static/img/16/players/188350.png", shooting: 78, passing: 76, speed: 86, stamina: 72, dribbling: 82, tackling: 23, weakerFoot: 87, douchery: 67},
{name: "Thiago Silva",       img: "http://futhead.cursecdn.com/static/img/16/players/164240.png", shooting: 76, passing: 88, speed: 77, stamina: 72, dribbling: 82, tackling: 44, weakerFoot: 77, douchery: 27},
{name: "Mats Hummels",       img: "http://futhead.cursecdn.com/static/img/16/players/178603.png", shooting: 34, passing: 57, speed: 66, stamina: 90, dribbling: 45, tackling: 88, weakerFoot: 74, douchery: 27},
{name: "Koke",               img: "http://futhead.cursecdn.com/static/img/16/players/193747.png", shooting: 70, passing: 76, speed: 68, stamina: 67, dribbling: 85, tackling: 44, weakerFoot: 84, douchery: 86},
{name: "Ricardo Rodríguez",  img: "http://futhead.cursecdn.com/static/img/16/players/193352.png", shooting: 35, passing: 54, speed: 66, stamina: 90, dribbling: 82, tackling: 89, weakerFoot: 77, douchery: 27},
{name: "Raphael Varane",     img: "http://futhead.cursecdn.com/static/img/16/players/201535.png", shooting: 76, passing: 70, speed: 44, stamina: 76, dribbling: 82, tackling: 83, weakerFoot: 75, douchery: 27},
{name: "Riyad Mahrez",       img: "http://futhead.cursecdn.com/static/img/16/players/204485.png", shooting: 76, passing: 70, speed: 79, stamina: 72, dribbling: 75, tackling: 34, weakerFoot: 77, douchery: 79},
{name: "Dimitri Payet",      img: "http://futhead.cursecdn.com/static/img/16/players/177388.png", shooting: 76, passing: 88, speed: 77, stamina: 72, dribbling: 82, tackling: 44, weakerFoot: 86, douchery: 27},
{name: "Vincent Kompany",    img: "http://futhead.cursecdn.com/static/img/16/players/139720.png", shooting: 45, passing: 67, speed: 69, stamina: 87, dribbling: 35, tackling: 80, weakerFoot: 35, douchery: 40},
{name: "Emile Heskey",       img: "http://futhead.cursecdn.com/static/img/14/players/2231.png",   shooting: 48, passing: 34, speed: 26, stamina: 18, dribbling: 39, tackling: 5,  weakerFoot: 11, douchery: 70},
];

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
    
  })
}
// var playerSelectAttr = selectAttr(playerCard)        // player picks an attribute he thinks will beat the computer's score for that same attribute
// var computerSelectAttr = selectAttr(computerCard)    // returns the value on the computer's card for that same attribute

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
















