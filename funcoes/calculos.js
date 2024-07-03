//declaração das funções de calculo

let soma = numeros => numeros.num1 + numeros.num2;

let subtracao = numeros => numeros.num1 - numeros.num2;

let multiplicacao = numeros => numeros.num1 * numeros.num2;    

let divisao = numeros => numeros.num1 / numeros.num2;


module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
}