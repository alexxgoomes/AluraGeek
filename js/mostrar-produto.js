import { produtoService } from "./fetch.js";

export default function mostraLinha(url, descricao, nome, preco, id) {
    const mostraProduto = document.createElement('div');
    if (mostraProduto.classList) {
        mostraProduto.classList.add("item");
    } else {
        mostraProduto.className = "item";
    };
    const conteudo = `
            <a href="#" class="topicos__imagem__link">
                <img src="${url}" alt="${descricao}" class="topicos__imagem">
            </a>
            <p class="topicos__descricao">${nome}</p>
            <p class="topicos__valor">${preco}</p>
            <a href="#" class="topicos__link">Ver produto</a>
    `
    mostraProduto.innerHTML = conteudo;
    mostraProduto.dataset.id = id;
    return mostraProduto;
};

const starwars = document.querySelector('[data-starwars]');
const consoles = document.querySelector('[data-consoles]');
const diversos = document.querySelector('[data-diversos]');

async function render() {
        try {
            const listaProdutos = await produtoService.listaProdutos();

            listaProdutos.forEach(elemento => {
                if(elemento.categoria == 'Star Wars') {
                    starwars.appendChild(mostraLinha(elemento.url, elemento.descricao, elemento.nome, elemento.preco, elemento.id));
                } else if(elemento.categoria == 'Consoles') {
                    consoles.appendChild(mostraLinha(elemento.url, elemento.descricao, elemento.nome, elemento.preco, elemento.id));
                } else {
                    diversos.appendChild(mostraLinha(elemento.url, elemento.descricao, elemento.nome, elemento.preco, elemento.id));
                }
            });
        } catch(erro) {
            console.log(erro)
            //window.location.href="./erro.html"
        }
}

render();