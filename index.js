//declaração de variáveis/importações;
const prompt = require("prompt-sync")();
const calculos = require("./funcoes/calculos.js");
const funcionalidades = require("./funcoes/funcionalidades.js")
let indices;
let app = true;
let opcaoUsuario;

//-----------------------------------------------------------
//programa "principal"
while (app == true) {
  if (!opcaoUsuario) {
    opcaoUsuario = prompt(funcionalidades.menu()).toLowerCase().trim();
  }
  switch (opcaoUsuario) {
    case "+":
      indices = funcionalidades.digiteNum();
      if (indices) {
        console.log(calculos.soma(indices));
        opcaoUsuario = undefined;
      }
      break;
    case "-":
      indices = funcionalidades.digiteNum();
      if (indices) {
        console.log(calculos.subtracao(indices));
        opcaoUsuario = undefined;
      }
      break;
    case "/":
      indices = funcionalidades.digiteNum();
      if (indices) {
        console.log(calculos.divisao(indices));
        opcaoUsuario = undefined;
      }
      break;
    case "x":
      indices = funcionalidades.digiteNum();
      if (indices) {
        console.log(calculos.multiplicacao(indices));
        opcaoUsuario = undefined;
      }
      break;
    case "%":
      console.log(
        'O primeiro número será a "base", o segundo será a porcentagem que deseja saber (1 - 100%): '
      );
      indices = funcionalidades.digiteNum();
      if (indices) {
        calculos.porcentagem(indices);
        opcaoUsuario = undefined;
      }
      break;
    case "5":
      console.log("Encerrando sistema...");
      app = false;
      break;
    default:
      console.log("Opção não válida tente novamente:");
      opcaoUsuario = undefined;
  }
}
