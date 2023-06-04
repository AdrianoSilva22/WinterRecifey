const selectElement = document.getElementById("meuSelect");

const url = "http://localhost:3000/servico";
function getServico() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((optionData) => {
        const option = document.createElement("option");
        option.value = optionData.cod_servico;
        option.textContent = optionData.ocupacao;
        selectElement.appendChild(option);
      });
    })
    .catch((e) => console.error(e));
}

getServico();

const urlPost = "http://localhost:3000/cadastrar";

function cliente(callback) {
  let clienteObjeto = {};
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    clienteObjeto = {
      cpf: document.getElementById("cpf").value,
      telefone: document.getElementById("telefone").value,
      email: document.getElementById("email").value,
      nome: document.getElementById("nome").value,
      select: document.getElementById("meuSelect").value,
    };

    fetch(urlPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cpf: clienteObjeto.cpf,
        telefone: clienteObjeto.telefone,
        email: clienteObjeto.email,
        nome: clienteObjeto.nome,
        cod_servico_cliente: clienteObjeto.select,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    return callback(clienteObjeto);
  });
}
cliente((objeto) => {
  console.log(objeto);
});
