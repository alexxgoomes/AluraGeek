import { produtoService } from "./fetch.js";

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');

const inputURL = document.querySelector("[data-url]");
const inputCategoria = document.querySelector("[data-categoria]");
const inputNome = document.querySelector("[data-nome]");
const inputPreco = document.querySelector("[data-preco]");
const inputDescricao = document.querySelector("[data-descricao]");

produtoService.detalhaProduto(id)
.then(dados => {
    inputURL.value = dados.url;
    inputCategoria.value = dados.categoria;
    inputNome.value = dados.nome;
    inputPreco.value = dados.preco;
    inputDescricao.value = dados.descricao;
});

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", evento => {
    evento.preventDefault();
    produtoService.atualizaProduto(id, inputURL.value, inputCategoria.value, inputNome.value, inputPreco.value, inputDescricao.value)
    .then(()=> {
        window.location.href = "./editado.html"
    })
})