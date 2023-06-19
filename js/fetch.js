async function listaProdutos() {
    const resposta = await fetch(`https://zany-cyan-coral-veil.cyclic.app/produtos`)
    const respostaConvertida = await resposta.json();
    
    return respostaConvertida;
}

async function criaProduto(categoria, descricao, nome, preco, url) {
    const resposta = await fetch(`https://zany-cyan-coral-veil.cyclic.app/produtos`, {
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
    const resposta = await fetch(`https://zany-cyan-coral-veil.cyclic.app/produtos/${id}`, {
        method: 'DELETE'
    })
    const respostaConvertida = resposta.json();

    return respostaConvertida;
}

async function buscaProduto(termoDeBusca) {
    const resposta = await fetch(`https://zany-cyan-coral-veil.cyclic.app/produtos?q=${termoDeBusca}`)
    const respostaConvertida = resposta.json();

    return respostaConvertida;
}

export const produtoService = {
    listaProdutos,
    criaProduto,
    deletaProduto,
    buscaProduto
};