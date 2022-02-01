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
  Player.push(cards[i]);
}

cards.splice(0, half);

Computer = cards;
$player1Count.html(Player.length);
$player2Count.html(Player.length);
console.log("Assign running")
$draw.on('click', function() {
  $PlayerSuit.empty();
  $ComputerSuit.empty();
  var number1=Player[0][1];
  var number2=Computer[0][1];
  $PlayerNumber.html(number1);
  $ComputerNumber.html(number2);
  suit1 = Player[0][1];
  suit2 = Computer[0][1];
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
  for(i=0;i<(Math.abs(number1));i++){
    $PlayerSuit.append(suit1)
  };
  for(i=0;i<(Math.abs(number2));i++){
    $PlayerSuit.append(suit2)
  };
  if(number1 == 11 || number1 == -11)
} else {
  if(number1 == 11){
    numberImg1 ="<img src='./IMG/jack.png'/>"
  }
  if (number1 ==12){
    numberImg1 ="<img src='./IMG/queen.png'/>"
    $PlayerSuit.append(suit1);
    $PlayerNumber.html(numberImg1);
  }
  if (number1 == 13){
    numberImg1 ="<img src='./IMG/king.png'/>"
  }
}
for (i=0; i<number1; i++) {
  $PlayerSuit.append(suit1);
};
for (i=0; i<number2; i++) {
  $ComputerSuit.append(suit2);
} //may need semicolon here, wasn't shown in lesson

playedCards.push(Player[0]);
playedCards.push(Computer[0]);

Player.splice(0,1);
Computer.splice(0,1);

if (number1 > number2) {
  $winner.html("Player One Wins");
  for (i=0; i<playedCards.length; i++) {
    Player.push(playedCards[i]);
  }
} else {
  $winner.html("Player Two Wins");
  for (i=0; i<playedCards.length; i++) {
    Computer.push(playedCards[i]);
  }
}
playedCards = [];
$player1Count.html(Player.length);
$player2Count.html(Computer.length);
})

else if (number2>number1){
  //check if player two wins the round
  $winner.html("Player Two Wins")
  //announces that player two Wins
  for(i=0;i<playedCards.length;i++){
    Computer.push(playerCards[i]);
    //player two gets the cards
  }
} else if (number1 == number2){
  //checks if the players tied
  $winner.html("This means war!")
  //announces the war
  for(i=0;i<3;i++){
    //loops 3 times for three cards
    playedCards.push(Computer[0]);
    //they go into the played cards array
    Player.splice(0,1);
    //they are taken off the players' arrays
    Computer.splice(0,1);
  }
  $PlayerSuit.css("display","none");
  //removes the suit from the card area
  $ComputerSuit.css("display","none");
  //removes the suit from the card area
  numberImg1="<img style='height:14rem;' src='./IMG/redcard.png'"
  $PlayerNumber.html(numberImg1)
  //places an image in the number area of a card back
  numberImg2="<img style='height:14rem;' src='./IMG/bluecard.png'"
console.log("Assign running")
  window.setTimeout(function()
}, 1000)
console.log("Assign running")
  window.setTimeout(function()
}, 1800)
}
if (Player.length == 0 || Computer.length == 0){endGame();}
if (number1>number2){$Player.css("border-color","red"); ...}

$("#mathOptions").on('click',function(){
$(".hidden").css("display","none");
$("#options").css("display","block");
})

$("#compare").on('click', function() {
$("#options").css("display", "none");
$("#integers").css("display", "block");
$("#compareDirections").css("display", "block");
$("#one").css("display", "block");
$("two").css("display", "block");
})

$("#arithmetic").on('click',function(){
$("#options").css("display", "none");
$("#math").css("display","block")
})

function compareMath(){
  if (number1 > number2){
    winner = 1;
  } else {
    winner = 2;
  }
}

function mathCheck() {
  if (chosen == winner){
    for (i=0; i<playedCards.length; i++){
      $Player.push(playedCards[i]);
    }
    $player1Count.html($Player.length);
    playedCards=[];
  }
}

if (integerChoice == 1){

if (suit1 == 1){

number1 = (-1)*number1;

}

if (suit1 == 2){

number1 = (-1)*number1;

}

if (suit2 == 1){

number2 = (-1)*number2;

}

if (suit2 == 2){

number2 = (-1)*number2;

}

}

$submit.on('click',function(){
  playerAnswer=$playerAnswer.val().trim();
  submit();
})

function submit(){
  if (addition==1){addMath();}
  if(playerAnswer==answer){
    chosen = winner;
  } else {
    chosen = winner-1;
  }
  mathCheck();
}

function addMath(){
  answer=number1+number2;
}
function multiplyMath(){
  answer=number1*number2;
}
function subtractMath(){
  answer=number1-number2;
}
function divideMath(){
  answer=number1/number2;
}
$('input').val(");
