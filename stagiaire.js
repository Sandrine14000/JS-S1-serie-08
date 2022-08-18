class Stagiaire {
    nom;
    prenom;


    salutation() {

        return `je m'appelle ${this.prenom} ${this.nom}`;
        // return "je m'appelle "+this.prenom+ " "+this.nom;
    }
    constructor(prenom, nom="") {
        this.prenom = prenom.toLowerCase();
        this.nom = nom.toUpperCase();
    }
}