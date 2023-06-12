async function listaProdutos() {
    const resposta = await fetch(`http://localhost:3000/produtos`)
    const respostaConvertida = await resposta.json();
    
    return respostaConvertida;
}

async function criaProduto(categoria, descricao, nome, preco, url) {
    const resposta = await fetch(`http://localhost:3000/produtos`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            categoria: categoria,
            descricao: descricao,
            nome: nome,
            preco: preco,
            url: url
        })
    })
    const respostaConvertida = await resposta.json();

    return respostaConvertida;
}

async function deletaProduto(id) {
    const resposta = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })
    const respostaConvertida = resposta.json();

    return respostaConvertida;
}

async function buscarProduto(termoDeBusca) {
    const resposta = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const produtoService = {
    listaProdutos,
    criaProduto,
    deletaProduto,
    buscarProduto
};