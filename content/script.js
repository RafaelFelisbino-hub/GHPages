//   VALIDAR FORMULÁRIO
const name = document.getElementById('nomeCadastro')
const email = document.getElementById('emailCadastro')
const senha = document.getElementById('senhaCadastro')
const senhaConfirmar = document.getElementById('senhaConfirmar')
const form = document.getElementById('formCadastro')

form.addEventListener("submit", (valida) =>{
    let contador = 0
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    // NOME
    if(name.value == '' || name.value == null){
        document.getElementById('nomeInvalido').innerText = 'Campo obrigatório'
        contador++
    }

    if(name.value != '')
    document.getElementById('nomeInvalido').innerText = ''

    // SENHA
    if(senha.value == '' || senha.value == null){
        document.getElementById('senhaInvalida').innerText = 'Campo obrigatório'
        contador++
    }

    else if(senha.value != '')
    document.getElementById('senhaInvalida').innerText = ''

    // CONFIRMAR SENHA
    if(senhaConfirmar.value != senha.value){
        document.getElementById('senhaConfirmarInvalida').innerText = 'As senhas devem ser iguais'
        contador++
    }
    // E-MAIL
    
    if(!regexEmail.test(email.value)){
        document.getElementById('emailInvalido').innerText = 'E-mail inválido'
        contador++
    }

    else if(regexEmail.test(email.value))
    document.getElementById('emailInvalido').innerText = ''
    
    // PREVENT DEFAULT
    if(contador >0){
        valida.preventDefault()
    }
})