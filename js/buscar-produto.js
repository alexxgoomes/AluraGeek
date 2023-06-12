import { produtoService } from "./fetch.js";

async function buscarProduto() {
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await produtoService.buscarProduto();
}