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
