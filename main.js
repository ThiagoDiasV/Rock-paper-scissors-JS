const pedraJogada = document.getElementById("pedra");
const papelJogada = document.getElementById("papel");
const tesouraJogada = document.getElementById("tesoura");
const pontuacaoJogador = document.getElementById("jogador-pontos");
const pontuacaoComputador = document.getElementById("computador-pontos");
const mensagemResultado = document.getElementById("mensagem-resultado");

const possibilidades = ["Pedra", "Papel", "Tesoura"];

function verificaJogada(jogadaUsuario, jogadaComputador) {
  if (jogadaUsuario === "Papel") {
    if (jogadaComputador === "Pedra") {
      return "Pedra enrola papel. Você venceu!";
    } else if (jogadaComputador === "Tesoura") {
      return "Tesoura corta papel. Você perdeu!";
    } else {
      return "Empate!";
    }
  } else if (jogadaUsuario === "Pedra") {
    if (jogadaComputador === "Papel") {
      return "Papel enrola pedra. Você perdeu!";
    } else if (jogadaComputador === "Tesoura") {
      return "Pedra amassa tesoura. Você venceu!";
    } else {
      return "Empate!";
    }
  } else if (jogadaUsuario === "Tesoura") {
    if (jogadaComputador === "Pedra") {
      return "Pedra amassa tesoura. Você perdeu!";
    } else if (jogadaComputador === "Papel") {
      return "Tesoura corta papel. Você venceu!";
    } else {
      return "Empate!";
    }
  }
}

pedraJogada.addEventListener("click", function() {
  let jogadaUsuario = "Pedra";
  let jogadaComputador =
    possibilidades[Math.floor(Math.random() * possibilidades.length)];
  let mensagemJogada = verificaJogada(jogadaUsuario, jogadaComputador);
  mensagemResultado.innerText = mensagemJogada;
});

papelJogada.addEventListener("click", function() {
  let jogadaUsuario = "Papel";
  let jogadaComputador =
    possibilidades[Math.floor(Math.random() * possibilidades.length)];
  let mensagemJogada = verificaJogada(jogadaUsuario, jogadaComputador);
  mensagemResultado.innerText = mensagemJogada;
});

tesouraJogada.addEventListener("click", function() {
  let jogadaUsuario = "Tesoura";
  let jogadaComputador =
    possibilidades[Math.floor(Math.random() * possibilidades.length)];
  let mensagemJogada = verificaJogada(jogadaUsuario, jogadaComputador);
  mensagemResultado.innerText = mensagemJogada;
});
