//declaração de variáveis/funções;
const prompt = require("prompt-sync")();
const calculos = require("./funcoes/calculos.js");
let indices;
let app = true;
let tentativas = 0;
let opcaoUsuario;
function menu(){
    console.log(`Você deseja fazer qual operação?
    [+]Adição
    [-]Subtração
    [/]Divisão
    [X]Multiplicação
    [%]Porcentagem
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
        };
    }else{
        console.log("Não foi digitado um número, por favor, tente novamente: ")
        return false;
    };
}
//-----------------------------------------------------------
//programa "principal"
while(app == true){
    if(!opcaoUsuario){
     opcaoUsuario = prompt(menu()).toLowerCase().trim();
    }
    switch(opcaoUsuario){
        case '+':
            indices = digiteNum()
            if(indices){
                console.log(calculos.soma(indices));        
                opcaoUsuario = undefined;
            }
            break;
        case '-':
            indices = digiteNum();
            if(indices){
                console.log(calculos.subtracao(indices));
                opcaoUsuario = undefined;
            }
            break;
        case '/':
            indices = digiteNum();
            if(indices){
                console.log(calculos.divisao(indices));
                opcaoUsuario = undefined;
            }
            break;
        case "x":
            indices = digiteNum();
            if(indices){
                console.log(calculos.multiplicacao(indices));
                opcaoUsuario = undefined;
            }
            break;
        case '%':
            console.log('O primeiro número será a "base", o segundo será a porcentagem que deseja saber (1 - 100%): ')
            indices = digiteNum();
            if(indices){
                calculos.porcentagem(indices);
                opcaoUsuario = undefined;
            }
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


