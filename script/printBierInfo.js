//Print de info van het bier op de pagina van het biertje
function printBeerInfo(bier){
    document.getElementById('fotoBier').innerHTML = `<img src='${bier.image}'` + `alt="foto van een flesje ${bier.naam}" />`;
    document.getElementById('breadcrumbnaam').innerHTML = bier.naam;  
    document.getElementById('naam').innerHTML = bier.naam;
    document.getElementById('ibu').innerHTML = bier.ibu + " IBU";
    document.getElementById('percentage').innerHTML = "Alc " + bier.alcper.toFixed(1) + "%";
    document.getElementById('tekstOmschrijving').innerHTML = bier.omschrijving;
    document.getElementById('prijs').innerHTML = "€" + bier.prijs;
    document.getElementById('soort').innerHTML = bier.soort;
}

