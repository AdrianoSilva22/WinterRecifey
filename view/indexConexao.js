const selectElement = document.getElementById('meuSelect')

const url = "http://localhost:3000/servico"
function getServico(){
fetch(url)
.then(response => response.json())
.then(data =>{
    data.forEach(optionData => {
      const option = document.createElement('option')
      option.value = optionData.cod_servico
      option.textContent = optionData.ocupacao
      selectElement.appendChild(option)
    });
})
.catch( e => console.error(e))
}

getServico()