const prompt = require("prompt-sync")({ sigint: true });

function ehNumero(num) {
    return isNaN(Number(num))
}

function maiorNumero(num) {

    if(ehNumero(num)) {
        let array = num.split("");
    
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if(array[i] > array[j]) {
                    let aux = array[j];
                    array[j] = array[i];
                    array[i] = aux;
                }
            }
        }
        return array.join("");
    }
    
        console.log(`Númer o inválido`)
        return false
    }

let numero = prompt(`Digite um algarismo: `);

let maior = maiorNumero(numero);
console.log(maior);

// let maior = numero.split('').sort((a, b) => b - a).join('');

// console.log(`O Maior número possível com o seu algarismo é: ${maior}`)