var value = 0;
var colorArray = ["#F4F0DD", "#F8F4CF", "#FAF3B6", "#F1EA96", "#F5EA73", "#F6EA51", "#FBE911"];
color = 0;
backgroundColors = color+=1;

function add() {
    numOne = value+=1;
    document.getElementById("thisNum").innerHTML=(numOne);
    backgroundColors = color+=1;
    document.body.style.backgroundColor=(colorArray[backgroundColors]);
}

function subtract() {
    numOne = value-=1;
    document.getElementById("thisNum").innerHTML=(numOne);
    backgroundColors = color-=1;
    document.body.style.backgroundColor=(colorArray[backgroundColors]);

}
