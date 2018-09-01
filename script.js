var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function styleBackground() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setGradient() {
  styleBackground();
  h3.textContent = body.style.background + ";";
}

function randomGradient() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
}
setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
