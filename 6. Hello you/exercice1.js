/**
 * Créer ici le projet « Hello You ».
 */
const annee = window.parseInt(prompt("Entrez votre année de naissance :"), 10);
const userName = window.prompt("Quel est votre prénom ?");
const userLastname = window.prompt("Quel est votre nom ?");
const mois = window.parseInt(prompt("Entrez le mois de naissance (1-12) :"), 10);
const jour = window.parseInt(prompt("Entrez le jour de naissance (1-31) :"), 10);
const dateActuelle = new Date();
const dateNaissance = new Date(annee, mois - 1, jour);
let age = dateActuelle.getFullYear() - dateNaissance.getFullYear();


if (
  isNaN(annee) || isNaN(mois) || isNaN(jour) ||
  (dateActuelle.getTime() < dateNaissance.getTime())
) {
  console.log("Les nombres ne sont pas valides ou la date de naissance est incorrecte.");
} else {

  if (
    dateActuelle.getMonth() < dateNaissance.getMonth() ||
    (dateActuelle.getMonth() === dateNaissance.getMonth() &&
      dateActuelle.getDate() < dateNaissance.getDate())
  ) {
    age--;
  }
  console.log("Salut " + userName + ' ' + userLastname + ', cette année tu as ' + age + ' ans.');
}
