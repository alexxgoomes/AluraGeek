const camposDoFormulario = document.querySelectorAll('[required');
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    window.location.href = './index.html';
})

camposDoFormulario.forEach(campo => {
    campo.addEventListener("blur", () => verificaCampo(campo));   
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooShort'
];

const mensagens = {
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um email válido."
},
    senha: {
        valueMissing: "O campo de senha não pode estar vazio.",
        typeMismatch: "Por favor, preencha uma senha válida.",
        tooShort: "Por favor, preencha uma senha válida."
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
};