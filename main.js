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

function jogadorVence(jogadaUsuario, jogadaComputador) {
  pontosJogador++;
  pontuacaoJogador.innerText = pontosJogador;
  let resultadoMensagem = `${jogadaUsuario} ganha de ${jogadaComputador}! Você venceu!`;
  mensagemResultado.innerText = resultadoMensagem;
}

function computadorVence(jogadaUsuario, jogadaComputador) {
  pontosComputador++;
  pontuacaoComputador.innerText = pontosComputador;
  let resultadoMensagem = `${jogadaComputador} ganha de ${jogadaUsuario}! O computador venceu!`;
  mensagemResultado.innerText = resultadoMensagem;
}

function empate(jogadaUsuario, jogadaComputador) {
  let resultadoMensagem = `${jogadaUsuario} é igual a ${jogadaComputador}. Empate!`;
  mensagemResultado.innerText = resultadoMensagem;
}

function avaliaJogada(jogadaUsuario, jogadaComputador) {
  let vencedor;
  switch (jogadaUsuario + jogadaComputador) {
    case "PedraTesoura":
    case "PapelPedra":
    case "TesouraPapel":
      jogadorVence(jogadaUsuario, jogadaComputador);
      vencedor = "Jogador";
      break;
    case "PedraPapel":
    case "PapelTesoura":
    case "TesouraPedra":
      computadorVence(jogadaUsuario, jogadaComputador);
      vencedor = "Computador";
      break;
    case "PedraPedra":
    case "PapelPapel":
    case "TesouraTesoura":
      empate(jogadaUsuario, jogadaComputador);
      vencedor = "Ninguem";
      break;
  }
  console.log(vencedor);

  return vencedor;
}

function pintaBorda(vencedorJogada, jogadaUsuario) {
  if (jogadaUsuario === "Pedra") {
    opcaoJogada = pedraJogada;
  } else if (jogadaUsuario === "Papel") {
    opcaoJogada = papelJogada;
  } else {
    opcaoJogada = tesouraJogada;
  }
  switch (vencedorJogada) {
    case "Jogador":
      opcaoJogada.classList.add("borda-vitoria");
      setTimeout(() => {
        opcaoJogada.classList.remove("borda-vitoria");
      }, 500);
      break;
    case "Computador":
      opcaoJogada.classList.add("borda-derrota");
      setTimeout(() => {
        opcaoJogada.classList.remove("borda-derrota");
      }, 500);
      break;
    case "Ninguem":
      opcaoJogada.classList.add("borda-empate");
      setTimeout(() => {
        opcaoJogada.classList.remove("borda-empate");
      }, 500);
      break;
  }
}

function main() {
  pedraJogada.addEventListener("click", function() {
    jogadaUsuario = "Pedra";
    jogadaComputador = computadorFazJogada();
    let vencedorJogada = avaliaJogada(jogadaUsuario, jogadaComputador);
    pintaBorda(vencedorJogada, jogadaUsuario);
  });

  papelJogada.addEventListener("click", function() {
    jogadaUsuario = "Papel";
    jogadaComputador = computadorFazJogada();
    let vencedorJogada = avaliaJogada(jogadaUsuario, jogadaComputador);
    pintaBorda(vencedorJogada, jogadaUsuario);
  });

  tesouraJogada.addEventListener("click", function() {
    jogadaUsuario = "Tesoura";
    jogadaComputador = computadorFazJogada();
    let vencedorJogada = avaliaJogada(jogadaUsuario, jogadaComputador);
    pintaBorda(vencedorJogada, jogadaUsuario);
  });
}

main();
