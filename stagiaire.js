class Stagiaire {
    nom;
    prenom;


    salutation() {

        return `je m'appelle ${this.prenom} ${this.nom}`;
        // return "je m'appelle "+this.prenom+ " "+this.nom;
    }
    constructor(pPrenom = "", pNom = "") {
        this.prenom = pPrenom.toLowerCase();
        this.nom = pNom.toUpperCase();
    }
}




