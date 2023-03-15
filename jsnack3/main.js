//Il software deve chiedere per 10 volte all’utente di inserire un numero.







//Il programma stampa la somma di tutti i numeri inseriti.
let sum = 0;

for (let i = 0; i < 10; i++) {

    let numberRequest = prompt('inserisci un numero') 
    sum += numberRequest
}

console.log(sum);




//SNACK 3
/*Rifare con WHILE LOOP:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */



let i = 0;

while (i < 10 ) {
    
    let numberRequest = prompt('inserisci un numero') 
    sum += numberRequest

    i++
}

console.log(sum);