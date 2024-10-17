var n1 = Math.floor(Math.random() * 6) + 1;
var n2 = Math.floor(Math.random() * 6) + 1;

var images = document.querySelectorAll("img");

if (images.length > 0) {
  var firstImage = images[0];

  
  switch (n1) {
    case 1:
      firstImage.setAttribute("src", "./images/dice1.png");
      break;
    case 2:
      firstImage.setAttribute("src", "./images/dice2.png");
      break;
    case 3:
      firstImage.setAttribute("src", "./images/dice3.png");
      break;
    case 4:
      firstImage.setAttribute("src", "./images/dice4.png");
      break;
    case 5:
      firstImage.setAttribute("src", "./images/dice5.png");
      break;
    case 6:
      firstImage.setAttribute("src", "./images/dice6.png");
      break;
    default:
      // Handle cases when n1 is not in the range of 1 to 6.
      break;
  }
}




if (images.length > 1) {
  var secondImage = images[1];

  switch (n2) {
    case 1:
      secondImage.setAttribute("src", "./images/dice1.png");
      break;
    case 2:
      secondImage.setAttribute("src", "./images/dice2.png");
      break;
    case 3:
      secondImage.setAttribute("src", "./images/dice3.png");
      break;
    case 4:
      secondImage.setAttribute("src", "./images/dice4.png");
      break;
    case 5:
      secondImage.setAttribute("src", "./images/dice5.png");
      break;
    case 6:
      secondImage.setAttribute("src", "./images/dice6.png");
      break;
    default:
      // Handle cases when n1 is not in the range of 1 to 6.
      break;
  }
}

if (n1 > n2){
  document.querySelector("h1").innerHTML= "🚩 Player 1 wins!"
}
else if(n2 > n1){
  document.querySelector("h1").innerHTML="player 2 wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML="Draw!" ;
}
