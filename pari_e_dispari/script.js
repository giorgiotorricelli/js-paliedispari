// FUNCTIONS

function pariODispari(scelta, numero) {
    let haiVinto = false;
    const numeroComputer = Math.ceil(Math.random() * 5);
    let totale = Number(numero) + numeroComputer;

    if (totale % 2 === 1) { //nel caso il totale sia dispari
        if (scelta === "dispari") {
            haiVinto = true;
        }
    } else { //nel caso sia pari
        if (scelta === "pari") {
            haiVinto = true;
        }
    }

    if (haiVinto) {
        console.log(`L'avversario ha scelto ${numeroComputer}, la somma è ${totale} quindi HAI VINTO!!`);
    } else {
        console.log(`L'avversario ha scelto ${numeroComputer}, la somma è ${totale} quindi HAI PERSO`);
    }

}

let scegli = "";
let numeroFortunato = "";


for (let i = 0; i < 5; i++) {
    scegli = prompt("Scegli tra pari o dispari!");

    if (scegli.toLowerCase() !== "pari" && scegli.toLowerCase() !== "dispari") {
        if (i === 4) {
            console.error("Hai superato il numero massimo di tentativi. Ricarica la pagina e riprova");
        } else {
            console.error("Inserisci un opzione valida");
        }
    } else {
        for (let x = 0; x < 5; x++) {
            numeroFortunato = prompt("Scegli un numero fortunato da 1 a 5");

            if (Number(numeroFortunato) < 1 || Number(numeroFortunato) > 5 || isNaN(Number(numeroFortunato))) {
                if (i === 4) {
                    console.error("Hai superato il numero massimo di tentativi. Ricarica la pagina e riprova");
                } else {
                    console.error("Inserisci un valore valido");
                }
            } else {
                pariODispari(scegli, numeroFortunato);
                break;
            }

        }
        break;
    }

}