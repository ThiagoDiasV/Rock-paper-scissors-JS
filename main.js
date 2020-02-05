const pedraJogada = document.getElementById("pedra");
const papelJogada = document.getElementById("papel");
const tesouraJogada = document.getElementById("tesoura");
const pontuacaoJogador = document.getElementById("jogador-pontos");
const pontuacaoComputador = document.getElementById("computador-pontos");
const mensagemResultado = document.getElementById("mensagem-resultado");

let pontosJogador = parseInt(pontuacaoJogador.innerText);
let pontosComputador = parseInt(pontuacaoComputador.innerText);

function computadorFazJogada() {
  possibilidades = ["Pedra", "Papel", "Tesoura"];
  jogadaComputador =
    possibilidades[Math.floor(Math.random() * possibilidades.length)];
  return jogadaComputador;
}

function jogadorVence() {}

function avaliaJogada(jogadaUsuario, jogadaComputador) {
  switch (jogadaUsuario + jogadaComputador) {
    case "PedraTesoura":
    case "PapelPedra":
    case "TesouraPapel":
      console.log("Jogador venceu!");
      break;
    case "PedraPapel":
    case "PapelTesoura":
    case "TesouraPedra":
      console.log("Computador venceu!");
      break;
    case "PedraPedra":
    case "PapelPapel":
    case "TesouraTesoura":
      console.log("Empate!");
      break;
  }
}

function main() {
  pedraJogada.addEventListener("click", function() {
    jogadaUsuario = "Pedra";
    jogadaComputador = computadorFazJogada();
    avaliaJogada(jogadaUsuario, jogadaComputador);
  });

  papelJogada.addEventListener("click", function() {
    jogadaUsuario = "Papel";
    jogadaComputador = computadorFazJogada();
    avaliaJogada(jogadaUsuario, jogadaComputador);
  });

  tesouraJogada.addEventListener("click", function() {
    jogadaUsuario = "Tesoura";
    jogadaComputador = computadorFazJogada();
    avaliaJogada(jogadaUsuario, jogadaComputador);
  });
}

main();
