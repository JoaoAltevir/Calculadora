//declaração de variáveis/funções;
const prompt = require("prompt-sync")();
const calculos = require("./funcoes/calculos.js");
let indices;
let app = true;
let tentativas = 0;
function menu(){
    console.log(`Você deseja fazer qual operação?
    [+]Adição
    [-]Subtração
    [/]Divisão
    [X]Multiplicação
    [5]Sair
    Digite sua opção: `)
}
function verificaNum(num){
    return isNaN(num);
}
function digiteNum(){
    let numeros = {};
    numeros.num1 = +prompt("Informe o primeiro número: ")
    if(verificaNum(numeros.num1) == false){
        numeros.num2 = +prompt("Informe o segundo número: ")
        if(verificaNum(numeros.num2) == false){
            return numeros;            
        }else{
            console.log("Não foi digitado um número, tente novamente: ")
            numeros.num2 = undefined;
        };
    }else{
        console.log("Não foi digitado um número, por favor, tente novamente: ")
        numeros.num1 = undefined;
    };
}
//-----------------------------------------------------------
//programa "principal"
while(app == true){
    let opcaoUsuario = prompt(menu()).toLowerCase().trim();
    switch(opcaoUsuario){
        case '+':
            indices = digiteNum()
            console.log(calculos.soma(indices));
            opcaoUsuario = undefined;
            break;
        case '-':
            indices = digiteNum();
            console.log(calculos.subtracao(indices));
            opcaoUsuario = undefined;
            break;
        case '/':
            indices = digiteNum();
            console.log(calculos.divisao(indices));
            opcaoUsuario = undefined;
            break;
        case "x":
            indices = digiteNum();
            console.log(calculos.multiplicacao(indices));
            opcaoUsuario = undefined;
            break;
        case '5':
            console.log("Encerrando sistema...")
            app = false;
            break;
        default:
            console.log("Opção não válida tente novamente:")
            opcaoUsuario = undefined;
            tentativas++;
    }
}


