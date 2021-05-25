//array met alle bieren die op de site geprint worden
var alleBieren = [refresh, bruteForce, ddos, firewire, rsi, wildcard, anyKey];


//print het bier op de webpagina
function printBierOverzicht(array){
    //maakt een lege string aan om de html in te voegen
    var printBeer = "";

    //voegt per itteratie 1 bier toe aan de string
    for(i=0; i<array.length; i++){
        printBeer += "<div class='bier'" + `onclick="location.href='${array[i].naam}.html'">` +
                        `<h1> ${array[i].naam} </h1>` +
                        `<h2> ${array[i].soort} </h2>` + 
                        `<img src='${array[i].image}'`  + ` alt="foto van een flesje ${array[i].naam}" />` +
                        `<h3 id="percentage"> ${array[i].alcper.toFixed(1)}% </h3>` + 
                        `<h3 id="prijs"> €${array[i].prijs} </h3> <br> <br>` +
                        `<button> Klik voor meer info </button>` +
                      "</div>";                
    }
    //print alle bieren op de pagina
    document.getElementById('bierOverzicht').innerHTML = printBeer;
}

//Print de bieren op de bieren pagina
printBierOverzicht(alleBieren);