//Variable met het aantal biertje in je winkelwagen
var aantal = 0;

//functie die er voor zorg dat er 1 biertje in je winkelwagen komt als je op de knop klikt
document.getElementById('winkelwagen').onclick = function(){
    aantal++;
    document.getElementById('numberOfBeers').innerHTML = aantal;
}