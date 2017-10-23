

var posX = 0;
var posY = 0;

var box = document.getElementById("block");
var holder = document.getElementsByClassName("box e");

//var t = setInterval(move, 100);

function move() {
  box.style.right = posX + "px";
  box.style.top = posY + "px";
  posX += 3;
  posY += 10;
}
