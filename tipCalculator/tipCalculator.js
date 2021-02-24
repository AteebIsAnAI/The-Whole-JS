function calculate() {
    var amount = document.getElementById("amountForm").value;
    var intAmount = parseInt(amount);
    var people = document.getElementById("peopleForm").value;
    var intPeople = parseInt(people);
    if(document.getElementById("rating").value=="0.3") {
        var caculation = 30 / intAmount * 100;
        var calculated = Math.round(caculation / intPeople);
        document.getElementById("spanOne").innerHTML=calculated;
    } else if(document.getElementById("rating").value=="0.2") {
        var caculationTwo = 20 / intAmount * 100;
        var calculatedTwo = Math.round(caculationTwo / intPeople);
        document.getElementById("spanOne").innerHTML=calculatedTwo;
    } else if(document.getElementById("rating").value=="0.15") {
        var caculationThree = 15 / intAmount * 100;
        var calculatedThree = Math.round(caculationThree / intPeople);
        document.getElementById("spanOne").innerHTML=calculatedThree;
    } else if(document.getElementById("rating").value=="0.1") {
        var caculationFour = 10 / intAmount * 100;
        var calculatedFour = Math.round(caculationFour / intPeople);
        document.getElementById("spanOne").innerHTML=calculatedFour;
    } else {
        var caculationFive = 5 / intAmount * 100;
        var calculatedFive = Math.round(caculationFive / intPeople);
        document.getElementById("spanOne").innerHTML=calculatedFive;
    }
    if (amount == "") {
        alert("Please enter the total bill amount")
    } else if (people == "") {
        alert("Please enter the number of people")
    }
}
