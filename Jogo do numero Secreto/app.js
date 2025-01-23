let numerosSorteados = [];

let numeroLimite = 10; 

let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1; 

mensagemInicial();

function exibirTextoNaTela(tag, texto){
    
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1' , 'Jogo do Numero Secreto' ) ; 
    exibirTextoNaTela('p' , 'Escolha um numero entre 1 a 10' ) ; 
}

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Numero Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero entre 1 a 10';

function verificarChute() {
    let chute = document.querySelector('input').value ;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`

        exibirTextoNaTela('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled')

    }else{
       if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero é secreto é menor.');
        }else{
            exibirTextoNaTela('p', 'o numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   
   let quantidadeNumerosSorteados = numerosSorteados.length;

   if(quantidadeNumerosSorteados == numeroLimite){
        numerosSorteados = [];
   }

   if(numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
   } else{
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido ;
   }
   
}

function limparCampo(){
        chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}