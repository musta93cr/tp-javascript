/*let data;
 async function Donnees() {
 let reponse = await fetch
     data = {
        "polluant": "CO2",
        "unite": "milliards de tonnes",
        "annee": 2017,
        "pays": [
            {"nom": "Chine", "valeur": 9.26, "pourcentage": 28.2, "code": "cn"},
            {"nom": "Etats-Unis", "valeur": 4.76, "pourcentage": 14.5, "code": "us"},
            {"nom": "Inde", "valeur": 2.16, "pourcentage": 6.6, "code": "in"},
            {"nom": "Russie", "valeur": 1.54, "pourcentage": 4.7, "code": "ru"},
            {"nom": "Japon", "valeur": 1.13, "pourcentage": 3.4, "code": "jp"},
            {"nom": "Allemagne", "valeur": 0.72, "pourcentage": 2.2, "code": "de"},
            {"nom": "Corée du Sud", "valeur": 0.6, "pourcentage": 1.8, "code": "kr"},
            {"nom": "Iran", "valeur": 0.57, "pourcentage": 1.7, "code": "ir"},
            {"nom": "Canada", "valeur": 0.55, "pourcentage": 1.7, "code": "ca"}
        ]
    };
    document.querySelector("h1").textContent = data.polluant + " - " + data.unite;

document.querySelector("h2").textContent = "Année : " + data.annee;
for (let i = 0; i < data.pays.length; i++) {

    let pays = data.pays[i];

    let ligne = "<tr>";

    ligne += "<td><img src='https://flagcdn.com/24x18/" + pays.code + ".png'> " + pays.nom + "</td>";

    ligne += "<td>" + pays.valeur + "</td>";

    ligne += "<td>" + pays.pourcentage + " %</td>";

    ligne += "</tr>";

    document.querySelector("#tableauPays").innerHTML += ligne;
}
}
function valider() {

    let min = document.querySelector("#min");
    min= min.value;
    let max = document.querySelector("#max");
    max = max.value;
    if(min ===''){
        min = 0;
    }
    if(max ===''){
        max = Number.MAX_VALUE;
    }
    min = Number(min);
    max= Number(max);
    
    
    }
    if(min<0 || max<0){
        alert('Les nombres doivent etre positifs');
        return;
    }
    if(min>max){
        alert('Le min doit etre inférieur au max');
        return;}
        let resultat = data.pays.filter(pays=>
        pays.valeur>=min && pays.valeur<=max);


     let tableau = document.querySelector('#tableauPays');
     tableau.innerHTML = '';
     for (let i = 0; i < resultat.length; i++) {

    let pays = resultat[i];
    let ligne ='tr';
    ligne += "<td><img src='https://flagcdn.com/24x18/" + pays.code + ".png'> " + pays.nom + "</td>";
    ligne += "<td>" + pays.valeur + "</td>";
    ligne += "<td>" + pays.pourcentage + " %</td>";
    ligne += "</tr>";
    tableau.innerHTML += ligne;

}
   
    

 let btn = document.querySelector('#valider');
 btn.addEventListener('click',valider); */
 

 
let data;

async function Donnees() {

    let reponse = await fetch("https://digicode.cleverapps.io/json/pays/pollution");

    data = await reponse.json();

    document.querySelector("h1").textContent = data.polluant;
    document.querySelector("h2").textContent = data.annee + " - " + data.unite;

    afficherPays(data.pays);
}

function afficherPays(listePays) {

    let tableau = document.querySelector("#tableauPays");

    tableau.innerHTML = "";

    for (let i = 0; i < listePays.length; i++) {

        let pays = listePays[i];

        let ligne = "<tr>";

        ligne += "<td><img src='https://flagcdn.com/24x18/" + pays.code + ".png'> " + pays.nom + "</td>";
        ligne += "<td>" + pays.valeur + "</td>";
        ligne += "<td>" + pays.pourcentage + " %</td>";

        ligne += "</tr>";

        tableau.innerHTML += ligne;
    }
}

function valider() {

    let min = document.querySelector("#min").value;
    let max = document.querySelector("#max").value;

    if (min === "") {
        min = 0;
    }

    if (max === "") {
        max = Number.MAX_VALUE;
    }

    min = Number(min);
    max = Number(max);

    if (min < 0 || max < 0) {
        alert("Les valeurs ne peuvent pas être négatives.");
        return;
    }

    if (min > max) {
        alert("Le minimum ne peut pas être supérieur au maximum.");
        return;
    }

    let resultat = data.pays.filter(pays =>
        pays.valeur >= min && pays.valeur <= max
    );

    afficherPays(resultat);
}

let btn = document.querySelector("#valider");

btn.addEventListener("click", valider);

Donnees();

