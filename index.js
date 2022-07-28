//b.Scrie o functie care care verifica daca un email, primit ca parametru este valid si afiseaza un mesaj sugestiv daca este sau nu. Un email este valid daca are minim 6 caractere, contine carcterul “@” si caracterul “.” 
//Sfat: functie returneaza o valoare booleana si se verifica in exterioul functiei, pe baza valoarii returnate de apelul functiei ce mesaj se afiseaza
//Exemplu: Input: clau@yah.com => Output: “Email-ul este valid”
// Exemplu: Input: clau@yahoooo => Output: “Email-ul este invalid”
function isValidEmail(email) {
  let validRegex = /[@]/;
  let validRegex1 = /[.]/;
  if (email.length > 6 && email.match(validRegex) && email.match(validRegex1)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isValidEmail('biasele@yahoo.com'));
console.log(isValidEmail('biasele@yahoocom'));
console.log(isValidEmail('biaseleyahoo.com'));
console.log(isValidEmail('biaseleyahoocom'));

// d.Scrie o functie care interschimba 2 variabile si afiseaza valorile lor la consola inainte si dupa interschimbare.
let a = 3;
let b = 4;
let c = a;
function changeVariable(a, b) {
  console.log(a, b)
}
changeVariable(a, b);
a = b;
b = c;
console.log(a, b);

// e.Scrie o functie care sa returneze suma numerelor consecutive de la x la y, unde x si y sunt  primiti ca parametrii ai functiei.
// Sfat: Foloseste intructiunea for pentru a parcurge numerele de la x la y si aduna intr-o variabila sum initializata cu 0, adunarea numerelor pas cu pas.
let sum = 0;
function calculateSumOfNumbers(x, y) {
  for (let i = x; i <= y; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(calculateSumOfNumbers(2, 5));

// f.Scrie o functie care primeste ca parametru un numar si afiseaza la consola daca numarul este par sau impar.
function getImparity(num) {
  if (num % 2 == 0) {
    console.log("par")
  }
  else {
    console.log("impar")
  }
}
getImparity(19);

// g.Scrie o functie care primeste ca parametru un numar si returneaza o variabila booleana care indica daca numarul este par sau nu. In afara functiei verifica valoarea returnata de functie si afiseaza un mesaj corespunzator in fuctie de valoarea returnata.
function getParity(a) {
  if (a % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(getParity(15))

// h.Scrie o functie care primeste ca parametru o nota de la 10 la 4 si afiseaza echivalentul notei in litera corespunzatoare. Pentru nota 10 se afiseaza “A” etc
function getCorrespondingLetter(grade) {
  switch (grade) {
    case 10:
      console.log("A");
      break;
    case 9:
      console.log("B");
      break;
    case 8:
      console.log("C");
      break;
    case 7:
      console.log("D");
      break;
    case 6:
      console.log("E");
      break;
    case 5:
      console.log("F");
      break;
    case 4:
      console.log("G");
      break;
    default:
      break;
  }
}
getCorrespondingLetter(8);

//i. Scrie o functie care primeste ca parametru o nota de la 10 la 4 si returneaza echivalentul notei in litera corespunzatoare. Pentru nota 10 se afiseaza “A” etc
function getCorrespondentLetter2(grade2) {
  switch (grade2) {
    case 10:
      return "A";
      break;
    case 9:
      return "B";
      break;
    case 8:
      return "C";
      break;
    case 7:
      return "D";
      break;
    case 6:
      return "E";
      break;
    case 5:
      return "F";
      break;
    case 4:
      return "G";
      break;
  }
}
console.log(getCorrespondentLetter2(7));

// j.Scrie o functie care primeste ca parametrii 2 numere si returneaza minimul dintre ele
function getMinimumOfNumbers(a, b) {
  return Math.min(a, b);
}
console.log(getMinimumOfNumbers(17, 13))

//k. Scrie o functie care primeste ca parametrii 3 numere si returneaza maximul dintre ele
function getMaxOfNumbers(a, b, c) {
  return Math.max(a, b, c);
}
console.log(getMaxOfNumbers(22, 86, 78));

//l. Scrie o functie care verifica daca un numar introdus de la tastatura este numar prim (adica daca se imparte exact doar la 1 si la el insusi). Functia returneaza o valoare booleana. In afara functiei se verifica valoarea returnata de apelul functiei si se afiseaza un mesaj corespunzator.
// Sfat: Parcurge cu un for numerele de la 2 pana la el insusi si daca se imparte exact la vreunul atunci nu este prim.
function isPrime(num) {
  let sqrtNum = Math.floor(Math.sqrt(num));
  for (let i = 2; i < sqrtNum + 1; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(71));
console.log(isPrime(25));

// m.Scrie o functie care simuleaza serviuciul RO-ALERT care primeste 3 parametrii: un param boolean isRaining, un parametru boolean isSnowing si un parametru numeric windSpeed. Daca previziunea pentru vreme este “rainy” sau previziunea este “snowing” si viteaza vantului este mai mare decat 30, afiseaza in consola mesajul “Ramai in casa, este periculos afara”. Altfel, afiseaza mesajul: “S-ar putea sa fie frumos afara”
function simulateRoAlert(isRaining, isSnowing, windSpeed) {
  if (isRaining || isSnowing && windSpeed > 30) {
    console.log("Ramai in casa, este periculos afara")
  }
  else {
    console.log("S-ar putea sa fie frumos afara")
  }
}
simulateRoAlert(true, true, 67);

// n.Scrie o functie care primeste ca parametru un numar, afiseaza in consola “fizz” daca numarul este multimplu de 3, “buzz” daca numarul este multiplu de 5 si “fizzbuzz” daca numarul este divizibil atat cu 3 cat si cu 5.
function displayMultiply(x) {
  if ((x % 3 === 0) && (x % 5 !== 0)) {
    console.log("fizz")
  }
  if ((x % 5 === 0) && (x % 3 !== 0)) {
    console.log("buzz")
  }
  if ((x % 3 === 0) && (x % 5 === 0)) {
    console.log("fizzbuzz")
  }
}
displayMultiply(27)

//o. Scrie o functie care primeste ca parametru un numar, returneaza stringul “fizz” daca numarul este multimplu de 3, “buzz” daca numarul este multiplu de 5 si “fizzbuzz” daca numarul este divizibil atat cu 3 cat si cu 5.
function displayMultiply2(x) {
  if ((x % 3 === 0) && (x % 5 !== 0)) {
    return "fizz"
  }
  if ((x % 5 === 0) && (x % 3 !== 0)) {
    return "buzz"
  }
  if ((x % 3 === 0) && (x % 5 === 0)) {
    return "fizzbuzz"
  }
}
console.log(displayMultiply2(15));

// p. Scrie o functie care sa primeasca de la tastatura un numar (intre 1 si 5) si sa afiseze ziua corespunzatoare din saptamana. Pentru valoarea 2 se afiseaza “Tuesday” sau “Marti”.
function displayCorrespondingDay(day) {
  switch (day) {
    case 1:
      console.log("Luni");
      break;
    case 2:
      console.log("Marti");
      break;
    case 3:
      console.log("Miercuri");
      break;
    case 4:
      console.log("Joi");
      break;
    case 5:
      console.log("Vineri");
      break;
    default:
      console.log("E weekend");
      break;
  }
}
displayCorrespondingDay(2)

//q.  Scrie o functie care sa primeasca de la tastatura un numar (intre 1 si 5) si sa returneze ziua corespunzatoare din saptamana. Pentru valoarea 2 se afiseaza “Tuesday” sau “Marti”.
function displayCorrespondingDay2(day) {
  switch (day) {
    case 1:
      return "Luni";
      break;
    case 2:
      return "Marti";
      break;
    case 3:
      return "Miercuri";
      break;
    case 4:
      return "Joi";
      break;
    case 5:
      return "Vineri";
      break;
    default:
      return "E weekend";
      break;
  }
}
console.log(displayCorrespondingDay2(3))


//r.  Scrie o functie care verifica daca un an este bisect. Un an este bisect daca este divizibil cu 400 sau cu 4 si in acelasi timp nu este divizibil cu 100. (Implementeaza functia folosind prima abordare care iti vine in minte si apoi implementeaz-o folosind restul abordarilor: return, fara return, params, fara params, etc)
//1.
function isleapYear(x) {
  if (x % 400 === 0 || (x % 4 === 0 && x % 100 !== 0)) {
    console.log("Anul este bisect")
  }
  else {
    console.log("Anul nu este an bisect")
  }
}
isleapYear(2022);

//2.
function isleapYear2(x) {
  if (x % 400 === 0 || (x % 4 === 0 && x % 100 !== 0)) {
    return "Anul este bisect";
  }
  else {
    return "Anul nu este an bisect";
  }
}
console.log(isleapYear2(2020));


function isleapYear3(x) {
  return (x % 400 === 0 || (x % 4 === 0 && x % 100 !== 0));
}
console.log(isleapYear3(2001));
console.log(isleapYear3(2016));

// s.Scrie o functie care simuleaza un joc de ghicit pe baza a 2 variabile primite ca parametru: guess si answer
// daca raspunsul este mai mic decat solutia (adica valoarea variabilei guess, afiseaza “nu ai ghicit, numarul este prea mic”
// daca raspunsul este mai mare decat solutia, afiseaza “nu ai ghicit, numarul este prea mare”
// daca raspunsul este egal cu solutia, afiseaza “ai ghicit”
function simulateGuessingGame(guess, answer) {
  if (answer < guess) {
    console.log("nu ai ghicit, numarul este prea mic");
  }
  if (answer > guess) {
    console.log("nu ai ghicit, numarul este prea mare");
  }
  if (answer == guess) {
    console.log("ai ghicit");
  }
}
simulateGuessingGame(3, 6);

// t.Scrie o functie care primeste 3 parametri: 2 numere intregi si un string care semnifica numele operatiei (operation: add/substract/divide/multiply). In functie de operatia specificata in string, efectueaza operatia pe cele 2 numere si returneaza rezultatul.
// Exemplu: input: (2,5, “add”) => output: 7
function divideOperation(a, b, divide) {
  return a / b;
}
console.log(divideOperation(9, 3, "divide"));

// u.Scrie o functie care returneaza numarul de zile dintr-o anumita luna. (Scrie functie folosind toate abordarile care iti vin in minte) Atentie: nu duplica numele functiei
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(3, 2020))

function displayDaysInMonth(month, year) {
  console.log(new Date(year, month, 0).getDate())
}
displayDaysInMonth(2, 1996);
displayDaysInMonth(2, 1999);

// v.Scrie o functie care care calculeaza varsta unui catel in anii unui om. Varsta unui catel in anii unui om este egala cu 7 * varsta catelului. Si returneaza rezultatul
function calculateDogAge(years) {
  years = years * 7;
  return years;
}
console.log(calculateDogAge(6));

// w.Scrie o functie care afiseaza numele si varsta unui catel (numele si varsta catelului sunt variabile gloable). In interiorul functiei se apeleaza functia de mai sus pentru a calcula si afisa varsta cateluilui si in anii umani.
let name = "Rex";
function displayDogName() {
  console.log(name + " is " + calculateDogAge(4) + " years old")
}
displayDogName();

