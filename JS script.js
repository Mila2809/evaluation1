"use stict"

// Exo 2 : Le tueur en série
// Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt.
// Une équipe de choc est présente pour le neutraliser.
// Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie.
// Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…),
// une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2)
// Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une
// caractéristique prise de celles disponibles (toujours aléatoire).
// Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason :
// Le tueur attaque un des survivants :
// - soit le survivant meurt
// - soit le survivant esquive et inflige 10 points de dégâts
// - soit le survivant inflige 15 points de dégâts mais meurt
// Les morts seront affichés à la fin
// Un message est attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort,
// Les survivants ont gagné mais RIP à X, X, X…)


//fiche personnage Jason
//tableau = clichés
//tableau = prénoms
//mettre des dégâts
//mourir
//mourir + dégâts
//afichés les mort

let TableauPrénoms=["Sarah","Mike","Courtney","Louis","Ashley"]
let TableauCaractéristique=["Intelo","Sportif","Blonde","Nerd","Rebel"]
let TableauSurvivantsMorts=''

class Personnage {
    // Le constructeur initialise les attributs du personnage lors de sa création
    constructor(nom, probabiliteAttaque, probabiliteContreAttaque, degats) {
      this.nom = nom; // Le nom du personnage
      this.probabiliteAttaque = probabiliteAttaque; // Probabilité d'attaquer avec succès
      this.probabiliteContreAttaque = probabiliteContreAttaque; // Probabilité de contre-attaque
      this.degats = degats; // Les dégâts infligés par le personnage
    }
  
    // Méthode pour attaquer un autre personnage
    attaquer(cible) {
      // Vérifie si l'attaque réussit en comparant à la probabilité d'attaque
      if (Math.random() < this.probabiliteAttaque) {
        // Affiche un message d'attaque réussie
        console.log(`${this.nom} attaque ${cible.nom} et inflige ${this.degats} points de dégâts.`);
        // Appelle la méthode encaisserDegats de la cible pour lui infliger des dégâts
        cible.encaisserDegats(this.degats);
      } else {
        // Affiche un message d'échec d'attaque
        console.log(`${this.nom} rate son attaque contre ${cible.nom}.`);
      }
    }
}
  
let survivant = new Personnage ("...", 0.5, 0.7, 0.9);
let personnage = [new Personnage (TableauPrénoms[Math.floor(Math.random() * 4)]+TableauCaractéristique[Math.floor(Math.random() * 4)],0.5,0.7,0.9)];
    [new Personnage (TableauPrénoms[Math.floor(Math.random() * 4)]+TableauCaractéristique[Math.floor(Math.random() * 4)],0.5,0.6,0.9)];
    [new Personnage (TableauPrénoms[Math.floor(Math.random() * 4)]+TableauCaractéristique[Math.floor(Math.random() * 4)],0.5,0.7,0.8)];
    [new Personnage (TableauPrénoms[Math.floor(Math.random() * 4)]+TableauCaractéristique[Math.floor(Math.random() * 4)],0.6,0.6,0.8)];
    [new Personnage (TableauPrénoms[Math.floor(Math.random() * 4)]+TableauCaractéristique[Math.floor(Math.random() * 4)],0.6,0.8,0.7)];
  
  let Jason = 100;

let tour = 1;
  while (Jason.pointsDeVie > 0) {
    console.log(`Tour ${tour}:`);
    personnage[Math.floor(Math.random()* 4)].attaquer(Jason);

    if
    console.log(personnage.probabiliteAttaque > [Math.floor(Math.random()* 4)]){
        Jason - 10
    }

  if (personnage.probabiliteAttaque > [Math.floor(Math.random()* 4)]){
  } else { 
    TableauSurvivantsMorts += personnage[Math.floor(Math.random()* 4)].prenom
  }

    console.log(`${Jason.nom} : ${Jason.pointsDeVie} points de vie`);
    tour++;
  }
  
