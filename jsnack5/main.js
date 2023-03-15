//Snack 5
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.



const emptyArray = [

    ''

]

let number = 0;

let i = 0;

while ( i < 6 ) {
    
    
let number = prompt('inserisci un numero')
console.log(number);

i++

    
}

if (number % 3 == i && number % 5 == i) {
    
    console.log('il tuo numero è dispari');

    emptyArray = number

} else {
    
    console.log('il tuo numero è pari');

}