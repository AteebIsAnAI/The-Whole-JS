var realName = "Ateeb_Ahmed";
var realPass = "Ateeb_Codes123";
var realAmount = 1500;

function withdraw() {
    var nameTest = document.getElementById("nameForm").value;
    var passTest = document.getElementById("passForm").value;
    var amountTest = document.getElementById("amountForm").value;
    var currentBalance = realAmount - amountTest;
    if (realName != nameTest && realPass != passTest) {
        alert("Wrong information given");
    } else if (realName != nameTest) {
        alert("Wrong name given")
    } else if (realPass != passTest) {
        alert("Wrong password given")
    } else if (amountTest > realAmount) {
        alert("Not enough funds");
    } else {
        document.getElementById("paraOne").innerHTML="You have successfully made a withdrawl Ateeb. Your new balance is: "+ currentBalance;
    } 
}
