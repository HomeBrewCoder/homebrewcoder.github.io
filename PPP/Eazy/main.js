function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



function getRandomChar(){
  var rand = getRandomInt(28);
  var randomChar;
  if(rand === 1){
    randomChar = "A";
  } else if(rand === 2){
    randomChar = "B";
  } else if(rand === 3){
    randomChar = "C";
  } else if(rand === 4){
    randomChar = "D";
  } else if(rand === 5){
    randomChar = "E";
  } else if(rand === 6){
    randomChar = "F";
  } else if(rand === 7){
    randomChar = "G";
  } else if(rand === 8){
    randomChar = "H";
  } else if(rand === 9){
    randomChar = "I";
  } else if(rand === 10){
    randomChar = "J";
  } else if(rand === 11){
    randomChar = "K";
  } else if(rand === 12){
    randomChar = "L";
  } else if(rand === 14){
    randomChar = "M";
  } else if(rand === 15){
    randomChar = "N";
  } else if(rand === 16){
    randomChar = "O";
  } else if(rand === 17){
    randomChar = "P";
  } else if(rand === 18){
    randomChar = "Q";
  } else if(rand === 19){
    randomChar = "R";
  } else if(rand === 20){
    randomChar = "S";
  } else if(rand === 21){
    randomChar = "T";
  } else if(rand === 22){
    randomChar = "S";
  }else if(rand === 23){
    randomChar = "U";
  } else if(rand === 24){
    randomChar = "V";
  } else if(rand === 25){
    randomChar = "W";
  } else if(rand === 26){
    randomChar = "X";
  } else if(rand === 27){
    randomChar = "Y";
  } else if(rand === 28){
    randomChar = "Z";
  } else {
   randomChar = "m"
  }
  console.log(randomChar);
  return randomChar
}


function getRandomQuestion(){
  var questions = ["Wat koop je bij de bakker?","Wat doe je aan?","Noem een beroep","Noem een kleur?","Welk spelletje speel je?","Wat hoort bij de winter?","Wat komt er op TV?","Noem de naam van een auto","Wat zie je in de speeltuin?","Welk apparaat ken je?","Welke sport ken je?","wat zit er in een huis?","Wat zie je op de boerderij?","Noem een huisdier","Noem een getal","Wat Hoort bij de zomer?","Noem een groente","Noem een land","Wat zie je in een circus?","Noem een meisjesnaam","Noem een jongensnaam","Wat leer je op school?","Noem een bloem of plant","Noem een fruit","Wat hoort bij de herfst?","wat eet je op?","Welk muziekinstrument ken je?","wat hoort bij de herfst?","wat zie je op de markt?","Welk lied ken je?","Noem een gereedschap","Wat zie je in het verkeer?","Wat zie je in de tuin?","Noem een dier uit de dierentuin?","Wat zit er aan je lijf?"];
  var question = questions[getRandomInt(questions.length)];
  console.log(question);
  
  return question;
}
