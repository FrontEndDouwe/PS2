document.getElementById("button").onclick = function(){
    console.log("test");
    var naam = document.getElementById('firstname').value;
    var mail = document.getElementById('email').value;
    var bericht = document.getElementById('bericht').value;

    if(naam.length == 0 || mail.length == 0 || bericht.length == 0){
        alert('Vul aub alle velden in');
    }
};
