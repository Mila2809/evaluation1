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
    constructor(nom, probabiliteAttaque, probabiliteMort, probabiliteMortAttaque) {
      this.probabiliteAttaque = probabiliteAttaque;
      this.probabiliteContreAttaque = probabiliteMort;
      this.degats = probabiliteMortAttaque;
      this.nom = nom;
    }
}
  
let survivant = new Personnage (0.5, 0.7, 0.9);
let personnage = [new Personnage (TableauPrénoms[Math.floor(Math.random() * 4)]+TableauCaractéristique[Math.floor(Math.random() * 4)],0.6,0.7,0.9)];
    [new Personnage (TableauPrénoms[Math.floor(Math.random() * 4)]+TableauCaractéristique[Math.floor(Math.random() * 4)],0.8,0.6,0.7)];
    [new Personnage (TableauPrénoms[Math.floor(Math.random() * 4)]+TableauCaractéristique[Math.floor(Math.random() * 4)],0.6,0.7,0.8)];
    [new Personnage (TableauPrénoms[Math.floor(Math.random() * 4)]+TableauCaractéristique[Math.floor(Math.random() * 4)],0.9,0.6,0.8)];
    [new Personnage (TableauPrénoms[Math.floor(Math.random() * 4)]+TableauCaractéristique[Math.floor(Math.random() * 4)],0.6,0.8,0.7)];
  
let Jason = 100;
console.log(personnage[0].nom);
let tour = 1;
  while (Jason > 0) {
  let indicepersonnagerandom = Math.floor(Math.random()* 4);

    console.log(`Tour ${tour}:`);

if (personnage.probabiliteMort > Math.random()){
    console.log(`${personnage[indicepersonnagerandom].nom} s'est fait tué par Jason`);
    TableauSurvivantsMorts += personnage[Math.floor(Math.random())];
}
else if (personnage.probabiliteMortAttaque > Math.random()){
    Jason -= 15;
    console.log(`${personnage[indicepersonnagerandom].nom} s'est fait tué par Jeson mais lui a mit 15 points de dégâts`);
    TableauSurvivantsMorts += personnage[Math.floor(Math.random())];
    }
else {
    Jason -= 10;
    console.log(`${personnage[indicepersonnagerandom].nom} a esquivé Jason et lui a mit 10 points de dégâts`);
    }

    console.log(`Jason : ${Jason} points de vie`);
    tour++;
  
}

if (Jason <= 0)
console.log("les survivant on gagner")
console.log(`RIP ${TableauSurvivantsMorts}`)
