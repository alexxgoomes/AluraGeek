async function listaProdutos() {
    const resposta = await fetch(`https://my-json-server.typicode.com/alexxgoomes/json-server-alurageek/produtos`)
    const respostaConvertida = await resposta.json();
    
    return respostaConvertida;
}

async function criaProduto(categoria, descricao, nome, preco, url) {
    const resposta = await fetch(`https://my-json-server.typicode.com/alexxgoomes/json-server-alurageek/produtos`, {
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
    const resposta = await fetch(`https://my-json-server.typicode.com/alexxgoomes/json-server-alurageek/produtos/${id}`, {
        method: 'DELETE'
    })
    const respostaConvertida = resposta.json();

    return respostaConvertida;
}

async function buscaProduto(termoDeBusca) {
    const resposta = await fetch(`https://my-json-server.typicode.com/alexxgoomes/json-server-alurageek/produtos?q=${termoDeBusca}`)
    const respostaConvertida = resposta.json();

    return respostaConvertida;
}

async function detalhaProduto(id) {
    const resposta = await fetch(`https://my-json-server.typicode.com/alexxgoomes/json-server-alurageek/produtos/${id}`)
    const respostaConvertida = resposta.json();

    return respostaConvertida;
}

async function atualizaProduto(id, url, categoria, nome, preco, descricao) {
    const resposta = await fetch(`https://my-json-server.typicode.com/alexxgoomes/json-server-alurageek/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            url: url,
            categoria: categoria,
            nome: nome,
            preco: preco,
            descricao: descricao
        })
    })
    const respostaConvertida = await resposta.json();

    return respostaConvertida;
}

export const produtoService = {
    listaProdutos,
    criaProduto,
    deletaProduto,
    buscaProduto,
    detalhaProduto,
    atualizaProduto
};