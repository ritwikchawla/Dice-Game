var num = Math.floor(Math.random() * 5) + 1;

document.getElementById("img1").src = "./images/dice" + num + ".png";
document.getElementById("img2").src = "./images/dice" + (num + 1) + ".png";

if (num < num + 1) {
  document.querySelector("h3").innerHTML = "Ritwik Wins! ✨🎉🎊";
} else {
  document.querySelector("h3").innerHTML = "Shivani Wins! ✨🎉🎊";
}
