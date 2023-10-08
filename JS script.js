"use strict"

/*  Exo 1 : Le taxi
John essaie de rentrer chez lui en taxi.
Problème : Il a horreur d’écouter Anissa de Wejdene qui passe tout le temps à la radio.
Dès qu’il entend cette musique, il perd 1 de santé mentale et change de taxi.
Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux
rouges de chez lui.
À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
Deux possibilités de fin :
- Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et
qu’il lui a fallu x changements de taxi pour y arriver
- Sa santé mentale tombe à 0, il explose et donc affiche « explosion »
Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
Nous avons besoin d’une liste de 5 musiquesdont Anissa - Wejdene
Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements
64
C&DI – Algorithmie JS
IIM DIG
*/


let santémentale = 10;
let nbEssais = 0;
let nbTaxi = 0;

let tableauMusique=["Anissa de wejden","Boy's de Lizzo","Money de Cardi B","Freak de Doja Cat","Barbie World de Niki Minaj"];
 
function choisirMusique(){
  nbEssais++;
  let Musiquechoisie = tableauMusique[Math.floor(Math.random() * 4)];// si la musique 1 (wejden)sur les 5 alors -1 de santémental + changer de taxie
  console.log(Musiquechoisie);
  if (Musiquechoisie == tableauMusique[0]){
    santémentale -= 1;
    nbTaxi += 1;
  }// si une autre musique que 1 sur les 5 alors rien
}
// repeter l'action 30 fois
while (santémentale > 0 && nbEssais< 30){// si point de santémentale superieur a 0 au bous de 30 tour alors "il est bien arriver"
  let musique = choisirMusique();
  console.log(`Santé mental actuelle : ${santémentale}`);
}

if (santémentale <= 0) {// si point de santémentale inferieur ou egale a 0 au bous de 30 tour alors "explosion"
  console.log("explosion");
} else {
  console.log("Jhon est bien arriver, avec une santé mental de : " + santémentale);
  console.log(`Jhon a pris ${nbTaxi} taxi`)
}

console.log(`Nombre d'essais effectués : ${nbEssais}`)//juste pour verifier les 30 tours
