// VALIDAR LOGIN

const emailLogin = document.getElementById('emailLogin')
const senhaLogin = document.getElementById('senhaLogin')
const formLogin = document.getElementById('formLogin')

formLogin.addEventListener("submit", (validaLogin) =>{
    let contadorLogin = 0
    let regexEmailLogin = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if(!regexEmailLogin.test(emailLogin.value)){
        document.getElementById('emailInvalidoLogin').innerText = 'E-mail inválido'
        contadorLogin++
    }

    else if(regexEmailLogin.test(emailLogin.value))
    document.getElementById('emailInvalidoLogin').innerText = ''

    if(senhaLogin.value == ''){
        document.getElementById('senhaInvalidaLogin').innerText = 'Senha inválida'
        contadorLogin++
    }

    if(contadorLogin >0){
        validaLogin.preventDefault()
    }
})