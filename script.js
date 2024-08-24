var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

document.getElementById("img1").src = "./images/dice" + num1 + ".png";
document.getElementById("img2").src = "./images/dice" + num2 + ".png";

if (num1 > num2) {
  document.querySelector("h3").innerHTML = "Shivani Wins! 💅";
} else if (num1 < num2) {
  document.querySelector("h3").innerHTML = "Ritwik Wins! 💪";
} else {
  document.querySelector("h3").innerHTML = "Draw!";
}


