document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    this.reset(); // Limpa o formulário após o envio
});
