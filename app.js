let listaNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50.');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let tentativasPorExtenso = numeroPorExtenso(tentativas);
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativasPorExtenso} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Errou! O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'Errou! O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * numeroLimite) + 1;
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function numeroPorExtenso(numero) {
    const numeros = {
        1: 'um',
        2: 'dois',
        3: 'três',
        4: 'quatro',
        5: 'cinco',
        6: 'seis',
        7: 'sete',
        8: 'oito',
        9: 'nove',
        10: 'dez',
        11: 'onze',
        12: 'doze',
        13: 'treze',
        14: 'quatorze',
        15: 'quinze',
        16: 'dezesseis',
        17: 'dezessete',
        18: 'dezoito',
        19: 'dezenove',
        20: 'vinte',
        21: 'vinte e um',
        22: 'vinte e dois',
        23: 'vinte e três',
        24: 'vinte e quatro',
        25: 'vinte e cinco',
        26: 'vinte e seis',
        27: 'vinte e sete',
        28: 'vinte e oito',
        29: 'vinte e nove',
        30: 'trinta',
        31: 'trinta e um',
        32: 'trinta e dois',
        33: 'trinta e três',
        34: 'trinta e quatro',
        35: 'trinta e cinco',
        36: 'trinta e seis',
        37: 'trinta e sete',
        38: 'trinta e oito',
        39: 'trinta e nove',
        40: 'quarenta',
        41: 'quarenta e um',
        42: 'quarenta e dois',
        43: 'quarenta e três',
        44: 'quarenta e quatro',
        45: 'quarenta e cinco',
        46: 'quarenta e seis',
        47: 'quarenta e sete',
        48: 'quarenta e oito',
        49: 'quarenta e nove',
        50: 'cinquenta'
    };
    return numeros[numero] || numero;
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}
