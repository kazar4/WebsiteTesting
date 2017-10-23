

var posX = 0;
var posY = 0;

//our box element
var box = document.getElementById("block");
var holder = document.getElementsByClassName("e");

//var t = setInterval(move, 100);

function move() {
  box.style.right = posX + "px";
  box.style.top = posY + "px";
  posX += 3;
  posY += 5;
  }

/*
var p = document.createElement("p");
 var node = document.createTextNode("Some new text");
 //adding the text to the paragraph
 p.appendChild(node);

//setInterval(write, 5000);

// starting position
var pos = 0;
var r = 0;
//our box element
var box = document.getElementById("block");

var t = setInterval(move, 10);
var z = setInterval(raidus, 250);

function raidus() {

  r += 5

  box.style.borderRadius = r + "%";
}

function move() {
  if(pos >= 300) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
}

function write() {
  document.writeln("Hi");
}
*/
