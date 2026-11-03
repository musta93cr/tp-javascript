function recupererDonnees() {
    let req = new XMLHttpRequest();

    req.open('GET', "https://countriesnow.space/api/v0.1/countries/capital");

    req.onreadystatechange = function() {
        let donnees;

        if (req.readyState === 4 && req.status === 200) {
            donnees = JSON.parse(req.responseText);
            let resultat = document.querySelector("#resultat");
            for (let i = 0; i < donnees.data.length; i++) {
            console.log(donnees.data[i].name);
            console.log(donnees.data[i].capital);
            resultat.innerHTML += donnees.data[i].name + " - " 
            + donnees.data[i].capital + "<br>";
            }
            console.log(donnees.data[0]);
        }
    };

    req.send();
}