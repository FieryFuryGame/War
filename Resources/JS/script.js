for (i=1;i<14;i++){
  for (k=1;k<5;k++){
    j=[i, k];
    cards.push(j);
  }
}
console.log("Assign running")
cards.shuffle = function() {
  console.log("shuffle");
    var input = this;
    for (var cards.length-1; i >=0; i--) {
      var randomIndex Math.floor(Math.random()*(i+1));
      var itemAtIndex = cards[randomIndex][0];
      var itemAtSecond = cards[randomIndex][1];
      input[randomIndex][0] = input[i][0];
      input[randomIndex][1] = input[i][1];
      input[i][0] = itemAtIndex;
      input[i][1] = itemAtSecond;
    }
    return input;
}

cards.shuffle();

var half = cards.length/2
for (i=0; i<half; i++) {
  firstPlayer.push(cards[i]);
}

cards.splice(0, half);

secondPlayer = cards;
$player1Count.html(firstPlayer.length);
$player2Count.html(firstPlayer.length);
console.log("Assign running")
$draw.on('click', function() {
  $firstPlayerSuit.empty();
  $secondPlayerSuit.empty();
  var number1=firstPlayer[0][1];
  var number2=secondPlayer[0][1];
  $firstPlayerNumber.html(number1);
  $secondPlayerNumber.html(number2);
  suit1 = firstPlayer[0][1];
  suit2 = secondPlayer[0][1];
}
if (suit1 == 1) {
  suit1 = "<img src='./IMG/Heart.png'/>";
}
if (suit1 == 2) {
  suit1 = "<img src='./IMG/Diamond.png'/>";
}
if (suit1 == 3) {
  suit1 = "<img src='./IMG/Club.png'/>";
}
if (suit1 == 4) {
  suit1 = "<img src='./IMG/Spades.png'/>";
}
if (suit2 == 1) {
  suit2 = "<img src='./IMG/Heart.png'/>";
}
if (suit2 == 2) {
  suit2 = "<img src='./IMG/Diamond.png'/>";
}
if (suit2 == 3) {
  suit2 = "<img src='./IMG/Club.png'/>";
}
if (suit2 == 4) {
  suit2 = "<img src='./IMG/Spades.png'/>";
if(number1<11){
  for(i=0;i<number1;i++){
    $firstPlayerSuit.append(suit1)
  };
} else {
  if(number1 == 11){
    numberImg1 ="<img src='./IMG/jack.png'/>"
  }
  if (number1 ==12){
    numberImg1 ="<img src='./IMG/queen.png'/>"
    $firstPlayerSuit.append(suit1);
    $firstPlayerNumber.html(numberImg1);
  }
  if (number1 == 13){
    numberImg1 ="<img src='./IMG/king.png'/>"
  }
}
for (i=0; i<number1; i++) {
  $firstPlayerSuit.append(suit1);
};
for (i=0; i<number2; i++) {
  $secondPlayerSuit.append(suit2);
} //may need semicolon here, wasn't shown in lesson

playedCards.push(firstPlayer[0]);
playedCards.push(secondPlayer[0]);

firstPlayer.splice(0,1);
secondPlayer.splice(0,1);

if (number1 > number2) {
  $winner.html("Player One Wins");
  for (i=0; i<playedCards.length; i++) {
    firstPlayer.push(playedCards[i]);
  }
} else {
  $winner.html("Player Two Wins");
  for (i=0; i<playedCards.length; i++) {
    secondPlayer.push(playedCards[i]);
  }
}
playedCards = [];
$player1Count.html(firstPlayer.length);
$player2Count.html(SecondPlayer.length);
})

else if (number2>number1){
  //check if player two wins the round
  $winner.html("Player Two Wins")
  //announces that player two Wins
  for(i=0;i<playedCards.length;i++){
    secondPlayer.push(playerCards[i]);
    //player two gets the cards
  }
} else if (number1 == number2){
  //checks if the players tied
  $winner.html("This means war!")
  //announces the war
  for(i=0;i<3;i++){
    //loops 3 times for three cards
    playedCards.push(secondPlayer[0]);
    //they go into the played cards array
    firstPlayer.splice(0,1);
    //they are taken off the players' arrays
    secondPlayer.splice(0,1);
  }
  $firstPlayerSuit.css("display","none");
  //removes the suit from the card area
  $secondPlayerSuit.css("display","none");
  //removes the suit from the card area
  numberImg1="<img style='height:14rem;' src='./IMG/redcard.png'"
  $firstPlayerNumber.html(numberImg1)
  //places an image in the number area of a card back
  numberImg2="<img style='height:14rem;' src='./IMG/bluecard.png'"
console.log("Assign running")
  window.setTimeout(function()
}, 1000)
console.log("Assign running")
  window.setTimeout(function()
}, 1800)
}
if (firstPlayer.length == 0 || secondPlayer.length == 0){endGame();}
if (number1>number2){$firstPlayer.css("border-color","red"); ...}
