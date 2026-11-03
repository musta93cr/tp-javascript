async function envoyerUtilisateur() {

    let utilisateur = {
        id: null,
        idCreateur: document.querySelector("#idCreateur").value,
        dateMaj: null,
        nom: document.querySelector("#nom").value,
        prenom: document.querySelector("#prenom").value,
        genre: document.querySelector("#genre").value,
        dateNaissance: document.querySelector("#dateNaissance").value,
        lieuNaissance: document.querySelector("#lieuNaissance").value,
        departementNaissance: document.querySelector("#departementNaissance").value,
        numeroRue: Number(document.querySelector("#numeroRue").value),
        libelleRue: document.querySelector("#libelleRue").value,
        codePostal: document.querySelector("#codePostal").value,
        ville: document.querySelector("#ville").value
    };

    let reponse = await fetch("https://digicode.cleverapps.io/utilisateurs/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(utilisateur)
    });

    if (reponse.ok) {
        let idCreateur = utilisateur.idCreateur;

document.querySelector("#formulaire").reset();

document.querySelector("#idCreateur").value = idCreateur;

chargerUtilisateurs();
    }
}


async function chargerUtilisateurs() {

    let idCreateur = document.querySelector("#idCreateur").value;

    let reponse = await fetch("https://digicode.cleverapps.io/utilisateurs/" + idCreateur);

    let utilisateurs = await reponse.json();

    let tableau = document.querySelector("#tableauUtilisateurs");

    tableau.innerHTML = "";

    for (let i = 0; i < utilisateurs.length; i++) {

        let utilisateur = utilisateurs[i];

        let ligne = "<tr>";

        ligne += "<td>" + utilisateur.nom + "</td>";
        ligne += "<td>" + utilisateur.prenom + "</td>";
        ligne += "<td>" + utilisateur.dateNaissance + "</td>";
        ligne += "<td>" + utilisateur.lieuNaissance + "</td>";
        ligne += "<td>" + utilisateur.numeroRue + " " + utilisateur.libelleRue + ", " + utilisateur.codePostal + " " + utilisateur.ville + "</td>";

        ligne += "</tr>";

        tableau.innerHTML += ligne;
    }
}

chargerUtilisateurs();