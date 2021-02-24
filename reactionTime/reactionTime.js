/*
Part 1
-+++++++++++++++++++++ Have a box on the screen +++++++++++++++++++++
-+++++++++++++++++++++ When box is click, it disappears +++++++++++++++++++++
-+++++++++++++++++++++ When the box is clicked, it reappears after 3 seconds (may need research) +++++++++++++++++++++
-+++++++++++++++++++++ Measure time between shape appearing and being clicked +++++++++++++++++++++
-+++++++++++++++++++++ Outpue that time +++++++++++++++++++++

Part 2
-+++++++++++++++++++++ Random delay time +++++++++++++++++++++
-+++++++++++++++++++++ Random Location on screen +++++++++++++++++++++
-+++++++++++++++++++++ Random shape +++++++++++++++++++++
 -+++++++++++++++++++++ Height and width +++++++++++++++++++++
 -+++++++++++++++++++++ Curvature +++++++++++++++++++++
-+++++++++++++++++++++ Random colour +++++++++++++++++++++

*/
window.onload = appear();

var start;
var clicked;

function disappear(){
    document.getElementById("box").style.display="none";
    clicked = Date.now();
    var reactionTime = (clicked - start) / 1000;
    document.getElementById("reaction").innerHTML=(reactionTime + " seconds!!");
    if (reactionTime > 5) {
        alert("Too slow!!")
    }
    var randomDelay = ((Math.random()*3))*1000;
    setTimeout(appear, randomDelay);
}

function appear() {
    var randomTop = Math.random()*400;
    var randomLeft = Math.random()*300;
    var randomHeight = Math.random()*200;
    var randomWidth = Math.random()*200+10;
    var randomCurve = Math.random();
    var randomColour = "#" + ((1<<24)*Math.random() | 0).toString(16);
    if (randomCurve < 0.5) {
        document.getElementById("box").style.borderRadius=25+"px";
    } else{
        document.getElementById("box").style.borderRadius="0px";
    }
    document.getElementById("box").style.top=randomTop+"px";
    document.getElementById("box").style.left=randomLeft+"px";
    document.getElementById("box").style.width=randomWidth+"px";
    document.getElementById("box").style.height=randomHeight+"px";
    document.getElementById("box").style.display="block";
    document.getElementById("box").style.backgroundColor=randomColour;
    start = Date.now();
}