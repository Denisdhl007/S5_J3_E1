/*

Une boucle est un constructeur de code qui permet de répéter une série d'instructions à plusieurs reprises. En JavaScript, il existe plusieurs types de boucles : for, while, do...while et for...of.

Voici comment elles fonctionnent :

-La boucle for est utilisée pour répéter une série d'instructions un nombre défini de fois. Elle possède trois parties : une initialisation, une condition et une incrémentation. Par exemple :

<!-- ========== -->
for (let i = 0; i < 10; i++) {
  console.log(i);
}
<!-- ========== -->
Cette boucle affichera les nombres de 0 à 9 dans la console.
<!-- ======================================================================================================================== -->
-La boucle while est utilisée pour répéter une série d'instructions tant qu'une condition est vraie. Par exemple :

<!-- ========== -->
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
<!-- ========== -->
Cette boucle affichera également les nombres de 0 à 9 dans la console.

<!-- ======================================================================================================================== -->

La boucle do...while est similaire à la boucle while, mais elle exécute au moins une fois les instructions avant de vérifier la condition. Par exemple :

<!-- ========== -->
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
<!-- ========== -->
Cette boucle affichera également les nombres de 0 à 9 dans la console.


<!-- Attention c'est pas forcement a montrer -->

<!-- ======================================================================================================================== -->

La boucle for...of est utilisée pour itérer sur les éléments d'un itérable, comme un tableau ou une chaîne de caractères. Par exemple :

<!-- ========== -->

const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}
<!-- ========== -->

Cette boucle affichera les nombres 1, 2, 3, 4 et 5 dans la console.

Il est important de se souvenir de mettre une condition d'arrêt dans les boucles pour éviter de créer une boucle infinie.

J'espère que cette explication vous a été utile. Si vous avez d'autres questions, n'hésitez pas à me poser.

*/




// Écrivez une boucle for qui affiche les nombres de 1 à 10 dans la console.`
for (let step = 1; step <= 10; step++) {
  console.log(step);
}


//Écrivez une boucle while qui affiche les nombres de 10 à 1 dans la console.
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>le chiffre est " + i;
  i++;
}

// ou

for (var i = 10; i > 0; i--) {
  console.log([i]);
}

// ou

let result = '';
let i = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 5);
console.log(result);


//Écrivez une boucle do...while qui affiche les nombres pairs de 2 à 20 dans la console.
let i=1 
while (i<=20){
  if(i%2==0){
  console.log(i)
  }
  i++
}

// ou
let pair = 2;
do {
    console.log(pair);
    pair += 2;
} while (pair <= 20);





//Écrivez une boucle for...of qui affiche chaque élément d'un tableau de mots (par exemple, ["un", "deux", "trois"]).
const numbers = ["un", "deux", "trois"];
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} 

// ou
let tab = ["un", "deux", "trois"];
for(e of tab){
    console.log(e);
};


/*TEST*/

/*

let players = ['Jim', 'Shawna', 'Andrew', 'Lora', 'Aimee', 'Nick'];
console.log(players);

*/

/*

let players = ['Jim', 'Shawna', 'Andrew', 'Lora', 'Aimee', 'Nick'];
console.log(players);

*/

/*
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);
console.log(result);
*/

/*
let numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
*/

/*
for (let index = 0; index < theArray.length; ++index) {
  const element = theArray[index];
  // ...use `element`...
}
*/



//Écrivez une boucle for qui calcule la somme des nombres de 1 à 10 et affiche le résultat dans la console.

let nums = ['1','2','3','4','5','6','7','8','9','10'];
let sum = 0;
for(let i=0; i < nums.length; i++){
    sum += parseInt(nums[i]);
}
console.log(sum);


//Écrivez une boucle while qui demande à l'utilisateur de saisir un nombre jusqu'à ce qu'il saisisse un nombre positif.
let person = prompt(`Please enter a postivie number`)
console.log(person);

//Écrivez une boucle for qui affiche les nombres de 1 à 10 en utilisant l'instruction break pour sortir de la boucle lorsque le nombre atteint 5.



for (let i = 0; i <= 10; i++) {
  console.log(i)
  if(i == 5){
      break;
  }    
};

/*
test

let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);
function myFunction(item) {
    console.log(item);
}
*/



//Écrivez une boucle for qui affiche les nombres de 1 à 10 en utilisant l'instruction continue pour passer à l'itération suivante lorsque le nombre est pair.
for (let i = 1; i <= 10; i++) {
  if (i%2 == 0){
      continue;
  }
  console.log(i);
};
