const prompt = require("prompt-sync")({ sigint: true });

let numero = prompt(`Digite um algarismo: `)

let maior = numero.split('').sort((a, b) => b - a).join('');

console.log(`O Maior número possível com o seu algarismo é: ${maior}`)