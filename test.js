var box = document.getElementById("block");
//var holder = document.getElementsByClassName("box e");
//var e =  holder[0];

var posX = 0;
var posY = 0;


var t = setInterval(move, 100);

function move() {
<<<<<<< HEAD

if (posX < 50) {
=======
  if (posY > 300){
>>>>>>> 38269aee9d9936e58c1e57f437ebde68670a6c4e
    posX = posX + 3;
    posY = posY + 10;
    box.style.right = posX + "px";
    box.style.top = posY + "px";
<<<<<<< HEAD
=======
 } else {

>>>>>>> 38269aee9d9936e58c1e57f437ebde68670a6c4e
  }
}
