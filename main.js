let stagiaire1 = ['Martin', 'DUPONT'];
let stagiaire2 = ['Vincent', 'MARTIN'];
let stagiaires = [stagiaire1, stagiaire2];

console.log(stagiaires[1][0]);

/**
 * 	Est-ce que ce que l’écriture permet de savoir facilement ce que l’on affiche ?
 * Non.
 * 
 * 	Est-ce que l’on peut empêcher d’éventuelles inversions dans l’ordre des informations ?
 *
 */

let stagiaireA = new Stagiaire();
stagiaireA.nom = "DUPONT";
stagiaireA.prenom = "Martin";

let stagiaireB = new Stagiaire();
stagiaireB.nom = "MARTIN";
stagiaireB.prenom = "Vincent";

stagiaires = [stagiaireA, stagiaireB];

console.log(stagiaires);

console.log(stagiaires[1].prenom);

console.log(stagiaires[0].salutation());


let anotherStagiaire = new Stagiaire("Lucette", "Anderson");
console.log(anotherStagiaire);


let classe = new Classe("DWWM");
classe.ajouterStagiaire(stagiaires);
/*console.log(classe);*/

let options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};
 classe.dateDebut = new Date (2022, 10, 1).toLocaleDateString("fr-FR", options);
 classe.dateFin = new Date (2023, 06, 25).toLocaleDateString("fr-FR", options);

console.log (classe);
