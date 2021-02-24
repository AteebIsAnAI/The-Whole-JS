var car = ["Hyundai", "Volvo", "Ferrari", "Lamborghini", "Porche", "BMW"];
var text = "";

for (i=0; i<car.length; i++) {
    text += car[i] + "<br>";
}

document.getElementById("availableCars").innerHTML=text;

