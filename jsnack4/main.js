//Snack 4 (sia con for che con while):
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



const invitati = [

    'Sandro',
    'Beppe',
    'Gianni'

]

let nomeInvitato = 0;

let i = 0;

while ( i < 3) {
    
    const nomeInvitato = prompt('Qualè il tuo nome?')
    console.log(nomeInvitato);

i++

if ( nomeInvitato === invitati ) {
    
    console.log('il tuo nome è nella lista degli invitati');

} else {
    
    console.log('il tuo nome non è nella lista degli invitati');
}
}