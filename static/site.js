let tentativas = 0;

function fugir() {
    tentativas++;
    const btnNao = document.getElementById('btnNao');

    // Se tentar passar o mouse 5 vezes, o botão "NÃO" some!
    if (tentativas >= 5) {
        btnNao.style.display = 'none';
        return;
    }

    // Calcula posições aleatórias dentro da tela
    const larguraJanela = window.innerWidth - 150;
    const alturaJanela = window.innerHeight - 100;

    const novoX = Math.random() * larguraJanela;
    const novoY = Math.random() * alturaJanela;

    btnNao.style.left = novoX + 'px';
    btnNao.style.top = novoY + 'px';
}

function aceitou() {
    alert("Sabíamos que a resposta seria SIM! Felicidades! ❤️");
}