import {produtoService} from "./fetch.js";
import mostraLinha from "./mostrar-produto.js";

async function buscarProduto(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await produtoService.buscaProduto(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

            busca.forEach(elemento => lista.appendChild(
                mostraLinha(elemento.url, elemento.descricao, elemento.nome, elemento.preco, elemento.id)));
}
                
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento));
