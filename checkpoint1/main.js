// // Task:1
let phrase = prompt("Entrez une phrase 👇")

let nombreDeMots = 0;
let nombreDeVoyelles = 0;
let nombreDeCaracteres = 0;

for (let i = 0; i < phrase.length; i++) {
  let caractereMinuscule = phrase[i].toLowerCase();
  if (caractereMinuscule === 'a' || caractereMinuscule === 'e' || caractereMinuscule === 'i' || caractereMinuscule === 'o' || caractereMinuscule === 'u' || caractereMinuscule === 'y') {
    nombreDeVoyelles++;
  }
  
  if (caractereMinuscule === ' ') {
    nombreDeMots++;
  }
  nombreDeCaracteres++;
}
nombreDeMots++;

document.write("La phrase : " + phrase+"<br>"+"<br>" )
document.write("Nombre de voyelles : " + nombreDeVoyelles + "<br>");
document.write("Nombre de mots : " + nombreDeMots)
console.log("ya rien dans la console pour le task 1")


// Task :2
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
let set3 = [];
for (let i = 0; i < set1.length; i++) {
  if (!set3.includes(set1[i])) {
    set3.push(set1[i]);
  }
}
  for (let i = 0; i < set2.length; i++) {
    if (!set3.includes(set2[i])) {
     set3.push(set2[i]);
    }
  }

let sum = 0;
for (let i = 0; i < set3.length; i++) {
  sum += set3[i];
}
console.log (set3)
console.log(sum);