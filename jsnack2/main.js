//L’utente inserisce due parole in successione, con due prompt.
const firstWord = prompt('inserisci una parola')
console.log(firstWord);

const secondWord = prompt('inserisci una parola')
console.log(secondWord);

//Il software stampa prima la parola più corta, poi la parola più lunga.


const words = [
    'firstWord',
    'secondWord'
];

for (let i = 0; i < words.length; i++) {
    console.log (words[i]);
    
}








/* if (firstWord.length > secondWord.length) {
       
    console.log('la prima parola ${firstWord} è più lunga della seconda ${secondWord}');

} else if (firstWord.length < secondWord.length){
    
    console.log('la prima parola ${firstWord} è più lunga della seconda ${secondWord}');
} */