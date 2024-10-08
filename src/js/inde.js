document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar envio do formulário até a validação

    // Seleciona os campos
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const mensagem = document.getElementById("mensagem");

    // Seleciona as mensagens de erro
    const nomeErro = document.getElementById("nome-erro");
    const emailErro = document.getElementById("email-erro");
    const telefoneErro = document.getElementById("telefone-erro");
    const mensagemErro = document.getElementById("mensagem-erro");

    let isValid = true; // Variável para controlar a validade do formulário

    // Validação do nome
    if (nome.value.trim() === "") {
      nome.classList.add("invalid");
      nomeErro.textContent = "Campo obrigatório";
      nomeErro.style.visibility = "visible";
      isValid = false;
    } else {
      nome.classList.remove("invalid");
      nomeErro.textContent = "";
      nomeErro.style.visibility = "hidden";
    }

    // Validação do e-mail
    if (email.value.trim() === "") {
      email.classList.add("invalid");
      emailErro.textContent = "Campo obrigatório";
      emailErro.style.visibility = "visible";
      isValid = false;
    } else {
      email.classList.remove("invalid");
      emailErro.textContent = "";
      emailErro.style.visibility = "hidden";
    }

    // Validação do telefone
    if (telefone.value.trim() === "") {
      telefone.classList.add("invalid");
      telefoneErro.textContent = "Campo obrigatório";
      telefoneErro.style.visibility = "visible";
      isValid = false;
    } else {
      telefone.classList.remove("invalid");
      telefoneErro.textContent = "";
      telefoneErro.style.visibility = "hidden";
    }

    // Validação da mensagem
    if (mensagem.value.trim() === "") {
      mensagem.classList.add("invalid");
      mensagemErro.textContent = "Campo obrigatório";
      mensagemErro.style.visibility = "visible";
      isValid = false;
    } else {
      mensagem.classList.remove("invalid");
      mensagemErro.textContent = "";
      mensagemErro.style.visibility = "hidden";
    }

    // Se todos os campos estiverem preenchidos, o formulário é enviado
    if (isValid) {
      alert("Formulário enviado com sucesso!");
      // Aqui você pode colocar o código para realmente enviar o formulário (ex. AJAX, etc)
    }
  });
