function calculer() {
    let nombreA = Number(document.querySelector("#nombreA").value);

let nombreB = Number(document.querySelector("#nombreB").value);
let operateur = document.querySelector("#operateur").value;
let resultat;

if (operateur === "+") {
    resultat = nombreA + nombreB;

} else if (operateur === "-") {
    resultat = nombreA - nombreB;

} else if (operateur === "*") {
    resultat = nombreA * nombreB;

} else if (operateur === "/") {
    resultat = nombreA / nombreB;
}
document.querySelector("#resultat").textContent = resultat;
}
document.querySelector("#calculer").addEventListener("click", calculer);