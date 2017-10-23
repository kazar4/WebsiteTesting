var box = document.getElementById("block");
//var holder = document.getElementsByClassName("box e");
//var e =  holder[0];

var posX = 0;
var posY = 0;


var t = setInterval(move, 100);

function move() {
  if (posY > 300){
    posX = posX + 3;
    posY = posY + 10;
    box.style.right = posX + "px";
    box.style.top = posY + "px";
 } else {

  }
}
