/*
Autor: Marcelo Soares
Data: 23/09/2023

1) Faça um programa que calcule a média de 3 notas, imprima na tela e a sua classificação conforme a tabela abaixo:
Média = (nota 1 + nota 2 + nota 3) / 3;
Classificação:
- Menor que 5, reprovado;
- Entre 5 e 7, recuperação;
- Acima de 7, Aprovado.
*/

function calculoMediaNotas(nota1, nota2, nota3){
    
    let media = (nota1 + nota2 + nota3)/3;
    
    if (media < 5) {
        console.log(`A média foi ${media.toFixed(1)}.\n\nAluno foi reprovado!`);
    } else if (media >= 5 && media <= 7){
        console.log(`A média foi ${media.toFixed(1)}.\n\nAluno está de recuperação!`);
    } else {
        console.log(`A média foi ${media.toFixed(1)}.\n\nAluno está aprovado!`);
    }
}

calculoMediaNotas(5,8.7,9);