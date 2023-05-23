const listaProdutos = () => {
    return fetch(`http://localhost:3000/produtos`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json();
        };
        throw new Error('Não foi possível carregar os produtos');
    })
};

const criaProduto = (categoria, descricao, nome, preco, url) => {
    return fetch(`http://localhost:3000/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            categoria: categoria,
            descricao: descricao,
            nome: nome,
            preco: preco,
            url: url
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body;
        }
        throw new Error('Não foi possível criar um produto');
    });
};

const deletaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível deletar produto');
        }
    })
}

export const produtoService = {
    listaProdutos,
    criaProduto,
    deletaProduto
};