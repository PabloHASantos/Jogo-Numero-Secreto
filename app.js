let listaNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// Essa função pega a tag selecionada e insere o texto descrito como parametro dentro da tag selecionada
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}
// essa função vai exibir a mensagem inicial
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 100: ');
}

exibirMensagemInicial();

// Essa função verifica o chute se está correto
function verificarChute() {
    let chute = document.querySelector('input').value;
    

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`; 
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior'); 
        }
        tentativas++;
        limparCampo();
    }
}

// Essa função gera um número aleatório
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaNumeroSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite){
        listaNumeroSorteados = [];
   }
    if (listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

//Essa função limpa o campo
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

// essa função vai reiniciar o jogo
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
