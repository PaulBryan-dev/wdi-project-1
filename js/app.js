   // Footballer Top Trumps Pseudocode


  // ----MVP Pseudocode----
  // Write a function to compare the selected player attribute value with the corresponding CPU one, and return the higher value  ----IF/ELSE STATEMENT----
  // Write a function to select an attribute and pass its value into the compare function
  // Write a function so the CPU automatically selects the highest attribute vale
  // Write a function to append both card objects from the current trick to the end of the winner's card object array

  // ----Potential Additional Pseudocode----

  // Include "Three card pick" logic, which allows a player to select an attribute from their last 3 remaining cards

  // window.onload()

  $(start)


  var playerCard;
  var computerCard;

  function start() {
    pickCards();
  }

  function pickCards() {
    playerCard = footballers[Math.floor(Math.random() * footballers.length)];
    computerCard = footballers[Math.floor(Math.random() * footballers.length)];
    appendCards()
  }

  function appendCards() {
    appendPlayer(playerCard, "player");
    appendPlayer(computerCard, "computer");
    $('.player').addClass("flipped");

    selectAttr();
  }

  function appendPlayer(player, id) {
    $('.'+id+' figure.back').append(
      "<h5>" + player.name + "</h5>" +
      "<img src=" + player.img + ">" +
      "<ul class="+ id +">" +
      "</ul>"
      )

    appendScores(player, id)
  }

  function appendScores(player, id) {
    $.each(player, function(key, value) {
      if (typeof(value) === "number" ) {
        $('.'+id+' figure.back ul').append(
          "<li class=" + key + ">" + key + " " + "<span>" + value + "</span></li>"
          )
      }
    })
  }

  function selectAttr() {
    $('.player').one('click', 'li', function() {
      $(this).css("background", "#96FF51");
      $(this).css("font-weight", "bolder");
      var attr         = $(this).attr('class');
      var playerMove   = $(this)[0];
      var computerMove = $('.computer figure.back ul li.' + attr)[0]

      console.log(playerMove, computerMove)
      $('.computer').addClass('flipped');

      getWinner(playerMove, computerMove)        
    });
  };



  function getWinner(player, computer) {
    var  a = $(player).find("span")[0];
    var  b = $(computer).find("span")[0];

    var playerScore = parseInt($(a).text());
    var computerScore = parseInt($(b).text());

    var playerWinTally = 0
    var computerWinTally = 0

    if (playerScore > computerScore) {
      (playerWinTally++);
    } else if (playerScore < computerScore) {
      (computerWinTally++);
    } else {
      alert("it's a draw!")
    }
    
    function logScore(playerWinTally) {
      score += character.score
      $("#playerScoreBoard").html(playerWinTally);
    }
    
    function logScore(computerWinTally) {
      score += character.score
      $("#computerScoreBoard").html(score);
     console.log(logscore) ;
    }
  }






