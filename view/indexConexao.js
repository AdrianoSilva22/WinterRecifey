// const selectElement = document.getElementById('meuSelect')

// const url = "http://localhost:3000/servico"
// function getServico() {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       data.forEach(optionData => {
//         const option = document.createElement('option')
//         option.value = optionData.cod_servico
//         option.textContent = optionData.ocupacao
//         selectElement.appendChild(option)
//       });
//     })
//     .catch(e => console.error(e))
// }

// getServico()




clienteObjeto = {}
function cliente(callback) {
  
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    clienteObjeto = {
      cpf: document.getElementById("cpf").value,
      telefone: document.getElementById("telefone").value,
      email: document.getElementById("email").value,
      nome: document.getElementById("nome").value,
    }

    return callback(clienteObjeto)
  });

}

cliente((objeto) => {
  console.log(objeto);
});




// const urlPost = "http://localhost:3000/cadastrar"

// function postCadastrar() {
//   fetch(urlPost, {
//     cpf: "",
//     telefone: "",
//     email: "",
//     nome: "",
//     cod_servico_cliente: "",

//   })
//     .then(response => response.json())

// }

// postCadastrar()