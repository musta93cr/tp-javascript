function constante(){
    return 33;
}
console.log(constante());

function bonjourUntel(prenom){
   
    return  'bonjour ' + prenom;
}
let  resultat = bonjourUntel('marcel');
console.log(resultat);

function calcul(a,b){
    return a * b + a + b;
}
let calcul1 = calcul(3,8)
console.log(calcul1);

let calcul2 = calcul(4,9)
console.log(calcul2);

function moyenne(tableau){
    if (!Array.isArray(tableau)) {
    return "Erreur : le paramètre doit être un tableau";
    }
    
     if(tableau.length===0){
        return 0;
     }
     let somme = 0;
     for(let i =0;i<tableau.length;i++){
        if(typeof tableau[i] !=='number'){
        return "il ya un élément qui n'est pas un nombre";
     }
        somme +=tableau[i];
     }
        return somme / tableau.length;
}

console.log(moyenne([10, 15, 20, 5]));
console.log(moyenne([]));
console.log(moyenne('hello js'));


function calculer(a, b) {

return {
    Somme: a + b,
    Soustraction: a - b,
    Multiplication: a * b,
    Division: a / b
};

}

let resultatcalcul = calculer(10, 5);

console.log(resultatcalcul);


function creerGestionnaire() {

return {
    taches: [],

    ajouterTache(description) {
        this.taches.push({
            description: description,
            terminee: false
        });
    },

    terminerTache(index) {
        if (index >= 0 && index < this.taches.length) {
            this.taches[index].terminee = true;
        }
    },

    afficherTaches() {
        for (let i = 0; i < this.taches.length; i++) {

            let etat = this.taches[i].terminee
                ? "Terminée"
                : "Non terminée";

            console.log(
                i + " - " + this.taches[i].description + " : " + etat
            );
        }
    }
};

}


let gestionnaire = creerGestionnaire();


gestionnaire.ajouterTache("Apprendre JavaScript");
gestionnaire.ajouterTache("Faire les exercices");
gestionnaire.ajouterTache("Créer un projet");


gestionnaire.terminerTache(1);

gestionnaire.afficherTaches();

/* 
function creerGestionnaire(){
    let gestionnaire = {
        taches:[],
        ajouterTache(description){
            let nvTache = {"description": description, 
                           "termine": false};
            this.taches.push(nvTache);
        },
        terminerTache(index){
            this.taches[index].termine = true;
        },
        afficherTaches(){
            console.log(this.taches);
        }
    }
    return gestionnaire;
}

let ges1 = creerGestionnaire();
ges1.afficherTaches();
ges1.ajouterTache("Terminer la correction du TP");
ges1.afficherTaches();
ges1.terminerTache(0);
ges1.afficherTaches();
*/
