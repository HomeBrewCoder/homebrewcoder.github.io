function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



function getRandomChar(){
  var rand = getRandomInt(28);
  var randomChar;
  if(rand === 1){
    randomChar = "a";
  } else if(rand === 2){
    randomChar = "b";
  } else if(rand === 3){
    randomChar = "c";
  } else if(rand === 4){
    randomChar = "d";
  } else if(rand === 5){
    randomChar = "e";
  } else if(rand === 6){
    randomChar = "f";
  } else if(rand === 7){
    randomChar = "g";
  } else if(rand === 8){
    randomChar = "h";
  } else if(rand === 9){
    randomChar = "i";
  } else if(rand === 10){
    randomChar = "j";
  } else if(rand === 11){
    randomChar = "k";
  } else if(rand === 12){
    randomChar = "l";
  } else if(rand === 14){
    randomChar = "m";
  } else if(rand === 15){
    randomChar = "n";
  } else if(rand === 16){
    randomChar = "o";
  } else if(rand === 17){
    randomChar = "p";
  } else if(rand === 18){
    randomChar = "q";
  } else if(rand === 19){
    randomChar = "r";
  } else if(rand === 20){
    randomChar = "s";
  } else if(rand === 21){
    randomChar = "t";
  } else if(rand === 22){
    randomChar = "s";
  }else if(rand === 23){
    randomChar = "u";
  } else if(rand === 24){
    randomChar = "v";
  } else if(rand === 25){
    randomChar = "w";
  } else if(rand === 26){
    randomChar = "x";
  } else if(rand === 27){
    randomChar = "y";
  } else if(rand === 28){
    randomChar = "s";
  } else {
   randomChar = "m"
  }
  console.log(randomChar);
  return randomChar
}
