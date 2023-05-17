const form = document.getElementById("form-produto");
const urlDoProduto = document.getElementById("url");
const categoriaDoProduto = document.getElementById("categoria");
const nomeDoProduto = document.getElementById("nome-do-produto");
const precoDoProduto = document.getElementById("preco");
const descricaoDoProduto = document.getElementById("descricao");

const checarOsProdutos = JSON.parse(localStorage.getItem("produtos"));

let listaDeItens = [];

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

    const checarDuplicado = checarOsProdutos.some((elemento) => elemento.toUpperCase() === nomeProduto.toUpperCase());

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

    localStorage.setItem("itemNovo", JSON.stringify(listaDeItens));
    window.location.href = "./produtos.html"

    const produtoNovo = document.getElementById("produtos");
    console.log(produtoNovo);
}



{/*function AdicionarProduto() {
    const urlProduto = urlDoProduto.value;
    const categoriaProduto = categoriaDoProduto.value;
    const nomeProduto = nomeDoProduto.value;
    const precoProduto = precoDoProduto.value;
    const descricaoProduto = descricaoDoProduto.value;

    listaDeItens ={
        url: urlProduto,
        categoria: categoriaProduto,
        nome: nomeProduto,
        preco: precoProduto,
        descricao: descricaoProduto
    };

    produtoNovo.innerHTML = `
        <div class="item">
            <a href="#" class="topicos__imagem__link">
                <div class="lixeira">
                    <img class="produto__lixeira" src="./img/Lixeira.svg" alt="Lixeira">
                </div>
                <img src="./img/Kylo-ren.svg" alt="Boneco do Kylo Ren" class="topicos__imagem">
            </a>
            <p class="topicos__descricao">Kylo Ren</p>
            <p class="topicos__valor">R$ 60,00</p>
            <a href="#" class="topicos__link">Ver produto</a>
        </div>
     `
}*/}