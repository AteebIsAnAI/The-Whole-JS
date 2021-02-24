var correctName = "AteebAhmed1122"
var correctPassword = "7842";

function returnInfo() {
    var nameVar = document.getElementById("nameForm").value;
    var namePass = document.getElementById("passForm").value;
    
    if(correctName == nameVar && correctPassword == namePass) {
        document.body.style.backgroundColor="yellow";
        alert("Access granted!! Welcome.");
    } else {
        document.body.style.backgroundColor="grey";
        alert("Access denied");
    }
}

function calculate() {
    var one = document.getElementById("numOne").value;
    var two = document.getElementById("numTwo").value;
    var three = one*two;
    alert("Your result is: "+three);
}
