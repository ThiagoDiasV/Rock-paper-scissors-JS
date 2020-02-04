const pedraJogada = document.getElementById("pedra");
const papelJogada = document.getElementById("papel");
const tesouraJogada = document.getElementById("tesoura");
const pontuacaoJogador = document.getElementById("jogador-pontos");
const pontuacaoComputador = document.getElementById("computador-pontos");
const mensagemResultado = document.getElementById("mensagem-resultado");

const possibilidades = ["Pedra", "Papel", "Tesoura"];
let pontosJogador = parseInt(pontuacaoJogador.innerText);
let pontosComputador = parseInt(pontuacaoComputador.innerText);

function computadorFazJogada(possibilidades) {
  let jogadaComputador =
    possibilidades[Math.floor(Math.random() * possibilidades.length)];
  return jogadaComputador;
}

function verificaVencedor(jogadaUsuario, jogadaComputador) {
  if (jogadaUsuario === "Pedra") {
    if (jogadaComputador === "Papel") {
      vencedor = "Computador";
      mensagem = "Papel enrola pedra.";
    } else if (jogadaComputador === "Tesoura") {
      vencedor = "Jogador";
      mensagem = "Pedra amassa tesoura.";
    } else {
      mensagem = "Empate";
      vencedor = "Empate";
    }
  } else if (jogadaUsuario === "Papel") {
    if (jogadaComputador === "Pedra") {
      vencedor = "Jogador";
      mensagem = "Papel enrola pedra.";
    } else if (jogadaComputador === "Tesoura") {
      vencedor = "Computador";
      mensagem = "Tesoura corta papel.";
    } else {
      mensagem = "Empate";
      vencedor = "Empate";
    }
  } else if (jogadaUsuario === "Tesoura") {
    if (jogadaComputador === "Pedra") {
      vencedor = "Computador";
      mensagem = "Pedra amassa tesoura.";
    } else if (jogadaComputador === "Papel") {
      vencedor = "Jogador";
      mensagem = "Tesoura corta papel.";
    } else {
      mensagem = "Empate";
      vencedor = "Empate";
    }
  }
  return [vencedor, mensagem];
}

pedraJogada.addEventListener("click", function() {
  let opcaoUsuario = "Pedra";
  let opcaoComputador = computadorFazJogada(possibilidades);
  resultadoVencedor = verificaVencedor(opcaoUsuario, opcaoComputador);
  vencedor = resultadoVencedor[0];
  mensagem = resultadoVencedor[1];
  if (vencedor === "Jogador") {
    mensagemResultado.innerText = mensagem + " Você venceu!";
    pedraJogada.style.borderColor = "#49a83d";
    pontosJogador += 1;
    pontuacaoJogador.innerText = pontosJogador.toString();
  } else if (vencedor === "Computador") {
    mensagemResultado.innerText = mensagem + " Você perdeu!";
    pedraJogada.style.borderColor = "#d9183b";
    pontosComputador += 1;
    pontuacaoComputador.innerText = pontosComputador.toString();
  } else {
    mensagemResultado.innerText = "Empate!";
    pedraJogada.style.borderColor = "#FFF";
  }
});

papelJogada.addEventListener("click", function() {
  let opcaoUsuario = "Papel";
  let opcaoComputador = computadorFazJogada(possibilidades);
  resultadoVencedor = verificaVencedor(opcaoUsuario, opcaoComputador);
  vencedor = resultadoVencedor[0];
  mensagem = resultadoVencedor[1];
  if (vencedor === "Jogador") {
    mensagemResultado.innerText = mensagem + " Você venceu!";
    papelJogada.style.borderColor = "#49a83d";
    pontosJogador += 1;
    pontuacaoJogador.innerText = pontosJogador.toString();
  } else if (vencedor === "Computador") {
    mensagemResultado.innerText = mensagem + " Você perdeu!";
    papelJogada.style.borderColor = "#d9183b";
    pontosComputador += 1;
    pontuacaoComputador.innerText = pontosComputador.toString();
  } else {
    mensagemResultado.innerText = "Empate!";
    papelJogada.style.borderColor = "#FFF";
  }
});

tesouraJogada.addEventListener("click", function() {
  let opcaoUsuario = "Tesoura";
  let opcaoComputador = computadorFazJogada(possibilidades);
  resultadoVencedor = verificaVencedor(opcaoUsuario, opcaoComputador);
  vencedor = resultadoVencedor[0];
  mensagem = resultadoVencedor[1];
  if (vencedor === "Jogador") {
    mensagemResultado.innerText = mensagem + " Você venceu!";
    tesouraJogada.style.borderColor = "#49a83d";
    pontosJogador += 1;
    pontuacaoJogador.innerText = pontosJogador.toString();
  } else if (vencedor === "Computador") {
    mensagemResultado.innerText = mensagem + " Você perdeu!";
    tesouraJogada.style.borderColor = "#d9183b";
    pontosComputador += 1;
    pontuacaoComputador.innerText = pontosComputador.toString();
  } else {
    mensagemResultado.innerText = "Empate!";
    tesouraJogada.style.borderColor = "#FFF";
  }
});
