//Checkt of er een emailadress is ingevuld
document.getElementById('aanmeldButton').onclick = function(){
    var email = document.getElementById('nieuwsbrief').value;

    if(email.length == 0){
        alert('vul een email adress in');
    }

    var checkApenstaart = email.includes('@');
    if(!checkApenstaart){
        alert("Dit is geen email adress, vul aub een email adress in");
    }
}