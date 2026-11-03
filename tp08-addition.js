function calcul(){
let nombreA = Number(document.querySelector("#nombreA").value);
let nombreB = Number(document.querySelector("#nombreB").value);
let resultat = nombreA + nombreB;
document.querySelector("#resultat").textContent = " l'addition est égale à : " + resultat;
}
document.querySelector("#addition").addEventListener("click", calcul);