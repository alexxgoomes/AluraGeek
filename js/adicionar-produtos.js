import checaItens from "./checar-duplicado.js";

let listaDeItens = [];

const form = document.getElementById("form-produto");
const urlDoProduto = document.getElementById("url");
const categoriaDoProduto = document.getElementById("categoria");
const nomeDoProduto = document.getElementById("nome-do-produto");
const precoDoProduto = document.getElementById("preco");
const descricaoDoProduto = document.getElementById("descricao");

const checarOsProdutos = window.localStorage.getItem("produtos");
console.log(checarOsProdutos);

form.addEventListener("submit", evento => {
    evento.preventDefault();
    salvarProduto();
})

function salvarProduto() {
    const urlProduto = urlDoProduto.value;
    const categoriaProduto = categoriaDoProduto.value;
    const nomeProduto = nomeDoProduto.value;
    const precoProduto = precoDoProduto.value;
    const descricaoProduto = descricaoDoProduto.value;

    

    const checarDuplicado = checarOsProdutos.some((elemento) => elemento.nome.toUpperCase() === nomeProduto.toUpperCase());
    console.log(checarDuplicado);

    if(checarDuplicado) {
        alert("Este item já foi adicionado")
    } else {
        listaDeItens ={
            url: urlProduto,
            categoria: categoriaProduto,
            nome: nomeProduto,
            preco: precoProduto,
            descricao: descricaoProduto
        };
    }

    console.log(listaDeItens);
}