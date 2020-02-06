const pedraJogada = document.getElementById('pedra');
const papelJogada = document.getElementById('papel');
const tesouraJogada = document.getElementById('tesoura');
const pontuacaoJogador = document.getElementById('jogador-pontos');
const pontuacaoComputador = document.getElementById('computador-pontos');
const mensagemResultado = document.getElementById('mensagem-resultado');

let pontosJogador = parseInt(pontuacaoJogador.innerText);
let pontosComputador = parseInt(pontuacaoComputador.innerText);

function computadorFazJogada() {
  possibilidades = ['Pedra', 'Papel', 'Tesoura'];
  jogadaComputador =
    possibilidades[Math.floor(Math.random() * possibilidades.length)];
  return jogadaComputador;
}

function jogadorVence(jogadaUsuario, jogadaComputador) {
  pontosJogador++;
  pontuacaoJogador.innerText = pontosJogador;
  let resultadoMensagem = `${jogadaUsuario} ganha de ${jogadaComputador}! Você venceu!`;
  mensagemResultado.innerText = resultadoMensagem;
  let vencedor = 'Jogador';
  return vencedor;
}

function computadorVence(jogadaUsuario, jogadaComputador) {
  pontosComputador++;
  pontuacaoComputador.innerText = pontosComputador;
  let resultadoMensagem = `${jogadaComputador} ganha de ${jogadaUsuario}! O computador venceu!`;
  mensagemResultado.innerText = resultadoMensagem;
  let vencedor = 'Computador';
  return vencedor;
}

function empate(jogadaUsuario, jogadaComputador) {
  let resultadoMensagem = `${jogadaUsuario} é igual a ${jogadaComputador}. Empate!`;
  mensagemResultado.innerText = resultadoMensagem;
  return 'Empate';
}

function avaliaJogada(jogadaUsuario, jogadaComputador) {
  switch (jogadaUsuario + jogadaComputador) {
    case 'PedraTesoura':
    case 'PapelPedra':
    case 'TesouraPapel':
      jogadorVence(jogadaUsuario, jogadaComputador);
      break;
    case 'PedraPapel':
    case 'PapelTesoura':
    case 'TesouraPedra':
      computadorVence(jogadaUsuario, jogadaComputador);
      break;
    case 'PedraPedra':
    case 'PapelPapel':
    case 'TesouraTesoura':
      empate(jogadaUsuario, jogadaComputador);
      break;
  }
}

function main() {
  pedraJogada.addEventListener('click', function() {
    jogadaUsuario = 'Pedra';
    jogadaComputador = computadorFazJogada();
    let resultadoVencedor = avaliaJogada(jogadaUsuario, jogadaComputador);
  });

  papelJogada.addEventListener('click', function() {
    jogadaUsuario = 'Papel';
    jogadaComputador = computadorFazJogada();
    let resultadoVencedor = avaliaJogada(jogadaUsuario, jogadaComputador);
  });

  tesouraJogada.addEventListener('click', function() {
    jogadaUsuario = 'Tesoura';
    jogadaComputador = computadorFazJogada();
    let resultadoVencedor = avaliaJogada(jogadaUsuario, jogadaComputador);
  });
}

main();
