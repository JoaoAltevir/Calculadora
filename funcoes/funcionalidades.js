const prompt = require("prompt-sync")();

function menu() {
    console.log(`Você deseja fazer qual operação?
      [+]Adição
      [-]Subtração
      [/]Divisão
      [X]Multiplicação
      [%]Porcentagem
      [5]Sair
      Digite sua opção: `);
  }
  
  function verificaNum(num) {
    return isNaN(num);
  }
  function digiteNum() {
    let numeros = {};
    numeros.num1 = +prompt("Informe o primeiro número: ");
    if (verificaNum(numeros.num1) == false) {
      numeros.num2 = +prompt("Informe o segundo número: ");
      if (verificaNum(numeros.num2) == false) {
        return numeros;
      } else {
        console.log("Não foi digitado um número, tente novamente: ");
      }
    } else {
      console.log("Não foi digitado um número, por favor, tente novamente: ");
      return false;
    }
  }

module.exports = {
    menu,
    digiteNum,
}