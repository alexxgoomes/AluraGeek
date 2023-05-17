const lixeira = document.querySelectorAll(".lixeira");
let produtos = [];
produtos = document.getElementById("produtos");
console.log(produtos);

lixeira.forEach(elemento => {
    elemento.addEventListener("click", (item) => {
        deletaItem(item);
        atualizaLocalStorage();
    });
});

function deletaItem(item) {
    (item.target.parentElement.parentElement.parentElement).remove();
};

function atualizaLocalStorage() {
    localStorage.setItem("item", JSON.stringify(produtos));
};
