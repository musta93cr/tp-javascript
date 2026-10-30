let societe ={
    nom : 'google',
    siegeSocial : 'googleplex,MOunyain View,California,United States',
    fondateurs :[
        {nom:'page',
        prenom:'Larry',
        dateNaissance: '26/03/1973',
        lieuNaissance:'usa'


        },
        
        {nom:'Brin',
        prenom:'Sergey',
        dateNaissance: '21/08/1973',
        lieuNaissance:'urss'

        }
        
    ],
    chiffresAffaires:[
        {
            annee:'2008',
            montant:16.49
        },
        { annee:'2021',
            montant:37.97

        },
        { annee:'2016',
            montant:89.46},
        { annee:'2018',
            montant:136.2}
    ]
};

for ( let i =0;i<=societe.fondateurs.length-1;i++){
    console.log(societe.fondateurs[i]);
};

for(let i =0;i<=societe.chiffresAffaires.length-1;i++){
    console.log(societe.chiffresAffaires[i]);
};