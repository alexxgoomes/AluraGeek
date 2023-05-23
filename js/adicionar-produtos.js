import {produtoService} from './fetch.js';

function criaNovaLinha(url, descricao,nome, preco, id) {
    const linhaNovoProduto = document.createElement('div');
    if (linhaNovoProduto.classList) {
        linhaNovoProduto.classList.add("item");
    } else {
        linhaNovoProduto.className = "item";
    };
    const conteudo = `
            <a href="#" class="topicos__imagem__link">
                <div class="lixeira">
                    <img class="produto__lixeira" src="./img/Lixeira.svg" alt="Lixeira">
                </div>
                <img src="${url}" alt="${descricao}" class="topicos__imagem">
            </a>
            <p class="topicos__descricao">${nome}</p>
            <p class="topicos__valor">${preco}</p>
            <a href="#" class="topicos__link">Ver produto</a>
    `
    linhaNovoProduto.innerHTML = conteudo;
    linhaNovoProduto.dataset.id = id;
    return linhaNovoProduto;
};

const produto = document.querySelector('[data-produtos]');

produto.addEventListener("click", async (evento) => {
    let botaoDeletar = evento.target.className === 'produto__lixeira';
    if(botaoDeletar){
        try {
            const linhaProduto = evento.target.closest('[data-id]');
            let id = linhaProduto.dataset.id;
            await produtoService.deletaProduto(id);
            linhaProduto.remove();
        } catch(erro) {
            console.log(erro);
            window.location.href = '../erro.html';
        };
    };
});

async function render() {
    try {
        const listaProdutos = await produtoService.listaProdutos();

        listaProdutos.forEach(elemento => {
        produto.appendChild(criaNovaLinha(elemento.url, elemento.nome, elemento.preco, elemento.id));
    });
    } catch(erro) {
        console.log(erro);
        window.location.href = '../erro.html';
    };
    
};

render();


/*function duplicado() {
    const nomeProduto = nomeDoProduto.value;

    const checarDuplicado = checarOsProdutos.some((elemento) => elemento.toUpperCase() === nomeProduto.toUpperCase());

    if(checarDuplicado) {
        alert("Este item já foi adicionado")
    }
};*/