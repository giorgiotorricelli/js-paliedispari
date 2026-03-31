//FUNCTIONS

function isPalindromo(parola) {
    let primaMeta = parola.slice(0, Math.floor(parola.length / 2));
    let secondaMeta = parola.slice(Math.ceil(parola.length / 2));
    let secondaMetaInvertita = "";

    for (let i = secondaMeta.length - 1; i >= 0; i--) {
        secondaMetaInvertita += secondaMeta[i];
    }
    
    
    if (primaMeta === secondaMetaInvertita) {
        console.log(`"${parola}" è un palindromo`);
    } else {
        console.log(`"${parola}" non è un palindromo`);
    }
}


let parolaDaVerificare = prompt("Inserisci una parola o un numero:");
isPalindromo(parolaDaVerificare);

