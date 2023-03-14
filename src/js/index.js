const botoes = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        botao.classList.add('selecionado');

        desativarImagemAtiva();

        imagens[indice].classList.add('ativa');
    })
})

function desativarImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

