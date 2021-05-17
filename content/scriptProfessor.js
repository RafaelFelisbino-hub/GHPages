fetch('https://my-json-server.typicode.com/RafaelFelisbino-hub/JSONplaceholder-test/alunos')
.then(response => response.json())
.then(dadosAlunosProfessor => {
    const turma = document.getElementById('turmaProfessor')
    const form = document.getElementById('formProfessor')
    const resposta = document.getElementById('resultadoProfessor')
    br = "<br>"
    form.addEventListener('submit', (professor) => {
        resposta.innerHTML = ""
        dadosAlunosProfessor.forEach(element => {
            if(turma.value == element.turma){
                resposta.innerHTML += `Número: ${element.id} ${br} 
                Nome: ${element.nome} ${br} 
                Turno: ${element.turno} ${br} 
                Turma: ${element.turma} ${br}
                Idade: ${element.idade} ${br} 
                Endereço: ${element.endereço} ${br}${br}`
            }
        });
        professor.preventDefault()
    })
})