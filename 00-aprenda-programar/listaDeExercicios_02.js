/*
Autor: Marcelo Soares
Data: 23/09/2023

1) Faça um programa que calcule o IMC e imprima na tela a condição conforme a tabela abaixo:
IMC = peso / (altura * altura)
IMC em adultos:
- Abaixo de 18.5, abaixo do peso;
- Entre 18.5 e 24.9, peso normal;
- Entre 25 e 29.9, sobrepeso;
- Entre 30 e 39.9, obesidade moderada;
- Acima de 40, obesidade mórbida;
*/

function calculoIMC(peso, altura){
    
    let imc = peso / (altura * altura);
    
    if (imc < 18.5) {
        console.log(`O IMC é ${imc.toFixed(2)}.\n\nAbaixo do peso...`);
    } else if (imc >= 18.5 && imc <= 24.9){
        console.log(`O IMC é ${imc.toFixed(2)}.\n\nPeso normal...`);
    } else if (imc >= 25 && imc <= 29.9){
        console.log(`O IMC é ${imc.toFixed(2)}.\n\nSobrepeso...`);
    } else if (imc >= 30 && imc <= 39.9){
        console.log(`O IMC é ${imc.toFixed(2)}.\n\nObesidade moderada...`);
    } else {
        console.log(`O IMC é ${imc.toFixed(2)}.\n\nObesidade mórbida...`);
    }
}

calculoIMC(60,1.83);
calculoIMC(80,1.83);
calculoIMC(90,1.83);
calculoIMC(100,1.83);
calculoIMC(110,1.83);
calculoIMC(120,1.83);
calculoIMC(150,1.83);