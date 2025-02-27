/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 3;
let y = 6;

if (x > y) {
  console.log("x è maggiore di y");
} else {
  console.log("x non è maggiore di y");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (x !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let z = 10;

if (z % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let a = 5;

if (x=== 8 || a === 8 || x+a === 8) {
  console.log("il valore è 8")
} else {
  console.log("Non è quel valore")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 23;

let shippingCost = 10; 

let totalPay;


if(totalShoppingCart > 50) {
  totalShoppingCart = totalPay
} else {
  totalPay = totalShoppingCart + shippingCost
}

console.log(totalPay)


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let discount = totalShoppingCart * 0.2
console.log(discount)

totalShoppingCart = totalShoppingCart - discount
console.log(totalShoppingCart)

if(totalShoppingCart > 50) {
  totalShoppingCart = totalPay
} else {
  totalPay = totalShoppingCart + shippingCost
}


console.log(totalPay)


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


let num1 = 15;
let num2 = 42;
let num3 = 27;


let sortedNumbers;


if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    sortedNumbers = [num1, num2, num3];
  } else {
    sortedNumbers = [num1, num3, num2];
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    sortedNumbers = [num2, num1, num3];
  } else {
    sortedNumbers = [num2, num3, num1];
  }
} else {
  if (num1 >= num2) {
    sortedNumbers = [num3, num1, num2];
  } else {
    sortedNumbers = [num3, num2, num1];
  }
}

console.log("Numeri ordinati dal più alto al più basso:", sortedNumbers);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let myFavouriteNumber = 12;

console.log(typeof myFavouriteNumber)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num4 = 7

if(num4 % 2 === 0) {
  console.log("il numero è pari")
} else {
  console.log("il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
 let val = 2


if (val < 10 && val >= 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Verona"

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()

console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = [];

for (let i = 0; i <= 10; i ++) {
  array.push(i)
}

console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.pop();
array.push(100)

console.log(array)
