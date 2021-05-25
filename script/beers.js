//Constructor voor een bier object
function bier(naam, soort, alcper, ibu, prijs, omschrijving, image){
    this.naam = naam;
    this.soort = soort;
    this.alcper = alcper;
    this.ibu = ibu;
    this.prijs = prijs;
    this.omschrijving = omschrijving;
    this.image = image;
}

//maken van alle biertjes en z'n vervolgens toevoegen aan een array
var refresh = new bier(
    "Refresh",
    "White Ipa",
    4.6,
    31,
    1.89,
    "De refresh is een heerlijk verfrissend biertje. Door de extra toegevoegde hop heeft dit biertje echter een lekker bittere afdronk. De refresh is perfect om buiten in het zonnetje van te genieten, proost!",
    "images/rsz_refreshuitgesneden.png"
);

var bruteForce = new bier(
    "Brute Force",
    "Imperial Russian Stout",
    12,
    93,
    3.59,
    "De brute force is een lekker zwaar biertje, vol van smaak met een stevige afdronk. Door het gebruik van gerookte mout krijgt de brute force zijn unieke smaak die hem onderscheid van andere bieren.",
    "images/rsz_bruteforceUitgesneden.png"
);

var ddos = new bier(
    "DDos",
    "Double Oatmeal Stout",
    8.2,
    31,
    3.99,
    "De DDOS is een zwaar maar tegelijkertijd zoet biertje. De DDOS is een ideaal biertje voor in de avond op een sombere herstsdag. Het bier heeft veel body en door de zoete afdronk voel je je op een koude avond een stukje warmer van binnen",
    "images/ddos.png"
);

var firewire = new bier(
    "Firewire",
    "Peated Porter",
    5.5,
    31,
    2.59,
    "De firewire is een biertje met een tint van koffie. Door deze koffie smaak voel je je elke slok waar helemaal wakker. De firewire is gebrouwen met geroosterde koffiemout. Hierdoor komt de koffie smaak naar boven in het bier ",
    "images/firewire.png"
);

var rsi = new bier(
    "RSI",
    "Rye Smoked IPA",
    6.5,
    31,
    2.49,
    "Moet nog omschrijving schrijven",
    "images/rsi.png"
);

var wildcard = new bier(
    "Wildcard",
    "American Wild Ale",
    6.9,
    31,
    2.89,
    "Moet nog omschrijving schrijven",
    "images/wildcard.png"
);

var anyKey = new bier(
    "Any Key",
    "Session IPA",
    2.4,
    31,
    2.29,
    "De Any Key is een lichte bitter biertje. Deze is ideaal om je avond mee te beginnen. Daarnaast is de Any Key zeer licht in alcoholpercentage ideaal voor de",
    "images/anykey.png"
);