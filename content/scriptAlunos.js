fetch('https://my-json-server.typicode.com/RafaelFelisbino-hub/JSONplaceholder-test/alunos')
.then(response => response.json())
.then(dadosAlunos => {
    const nomeAluno = document.getElementById('nomeAluno')
    const form = document.getElementById('formAluno')
    const resposta = document.getElementById('resultadoAluno')

    form.addEventListener('submit', (alunos) => {
        dadosAlunos.forEach(element => {
            br = "<br>"
            if(nomeAluno.value == element.nome){
                resposta.innerHTML = `Número: ${element.id} ${br} 
                Nome: ${element.nome} ${br} 
                Turno: ${element.turno} ${br} 
                Turma: ${element.turma} ${br}
                Idade: ${element.idade} ${br} 
                Endereço: ${element.endereço} ${br}${br}`
            }
        });
        alunos.preventDefault()
    })
})