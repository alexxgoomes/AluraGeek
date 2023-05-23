    const itens = document.querySelectorAll(".item");
    const seletor = document.querySelector("[data-adicionar]");
    let descricao = [];

    const adicionar  = seletor.addEventListener("submit", (e) => {
        e.preventDefault();
        
        itens.forEach((item) => {
            descricao.push(item.innerHTML);
        });
        
        localStorage.setItem("produtos", JSON.stringify(descricao));
        window.location.href = "./adicionar-produtos.html";
    });

