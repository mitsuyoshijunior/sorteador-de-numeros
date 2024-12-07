function sortear() {

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;


    if(de >= ate){
        alert("Escolha outro intervalo de números. O 'de' não pode ser maior que o 'até'.")
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }

    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alterarStatusDoBotao();
}

function gerarNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusDoBotao() {
    let btnReinicar = document.getElementById('btn-reiniciar');

    if (btnReinicar.classList.contains('container__botao-desabilitado')) {
        btnReinicar.classList.remove('container__botao-desabilitado');
        btnReinicar.classList.add('container__botao');
    }
    
}

function alterarStatusDoBotao2() {
    let btnReinicar = document.getElementById('btn-reiniciar');

    if (btnReinicar.classList.contains('container__botao')) {
        btnReinicar.classList.remove('container__botao');
        btnReinicar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum até agora</label>';

    alterarStatusDoBotao2();
}
