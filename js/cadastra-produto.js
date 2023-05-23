import { produtoService } from "./fetch.js";

const fromulario = document.querySelector('[data-formulario]');

fromulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    try {
        const categoria = evento.target.querySelector('[data-categoria]').value;
        const descricao = evento.target.querySelector('[data-descricao]').value;
        const nome = evento.target.querySelector('[data-nome]').value;
        const preco = evento.target.querySelector('[data-preco]').value;
        const url = evento.target.querySelector('[data-url]').value;

        await produtoService.criaProduto(categoria, descricao, nome, preco, url);
        window.location.href = "../produtos.html";
    } catch(erro) {
        console.log(erro);
        window.location.href = "../erro.html";
    }
    });