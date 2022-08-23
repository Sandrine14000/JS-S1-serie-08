class Classe {
    intitule;
    listeStagiaire;

    constructor (intitule =""){
        this.intitule=intitule;
        this.listeStagiaire = new Array();
    }

     ajouterStagiaire(stagiaire) {
       return this.listeStagiaire.push(stagiaire);
    }
}


