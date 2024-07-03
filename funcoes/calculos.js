//declaração das funções de calculo

let soma = numeros => numeros.num1 + numeros.num2;

let subtracao = numeros => numeros.num1 - numeros.num2;

let multiplicacao = numeros => numeros.num1 * numeros.num2;    

let divisao = numeros => numeros.num1 / numeros.num2;

function porcentagem(numeros){
    let auxOriginal1 = numeros.num1
    let auxOriginal2 = numeros.num2
    numeros.num2 /= 100;
    numeros.num1 *= numeros.num2
    console.log(auxOriginal2,"% de",auxOriginal1,"equivale a:",numeros.num1,"%"); 
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    porcentagem,
}