fetch('https://my-json-server.typicode.com/RafaelFelisbino-hub/JSONplaceholder-test/alunos')
.then(response => response.json())
.then(dadosAlunos => {
    const nome = document.getElementById('nomeDiretor')
    const form = document.getElementById('formDiretoria')
    const resposta = document.getElementById('resultadoDiretor')
    br = "<br>"
    form.addEventListener('submit', (diretoria) => {
        resposta.innerHTML = ""
        for(i = 0; i < 1; i++)
        resposta.innerHTML = `<h2>Alunos</h2><br>`
        dadosAlunos.forEach(element => {
            resposta.innerHTML += `
            Número: ${element.id} ${br} 
            Nome: ${element.nome} ${br} 
            Turno: ${element.turno} ${br} 
            Turma: ${element.turma} ${br}
            Idade: ${element.idade} ${br} 
            Endereço: ${element.endereço} ${br}${br}`
        });
        diretoria.preventDefault()
    })
})

fetch('https://my-json-server.typicode.com/RafaelFelisbino-hub/JSONplaceholder-test/professores')
.then(response => response.json())
.then(dadosProfessor => {
    const respostaProfessor = document.getElementById('resultadoProfessorDiretor')
    const form = document.getElementById('formDiretoria')
    br = "<br>"
    form.addEventListener('submit', (professor) => {
        respostaProfessor.innerHTML = ""
        for(i = 0; i < 1; i++)
        respostaProfessor.innerHTML = `<h2>Professores</h2><br>`
        dadosProfessor.forEach(element2 => {
            respostaProfessor.innerHTML += `Número: ${element2.id} ${br}
            Nome: ${element2.nome} ${br}
            Turma: ${element2.turma} ${br}
            Registro: ${element2.registro} ${br}${br}`
        });
        professor.preventDefault()
    })
})