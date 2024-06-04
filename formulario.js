const nombre = document.getElementById('name')
const telefono = document.getElementById('tel')
const email = document.getElementById('email')
const formulario = document.getElementById('form')
const nombreValor = nombre.value

const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('small')
    aviso.innerText = msje

    formControl.className = 'form-control falla'
}

const validaOK = (input, msje) => {
    const formControl = input.parentElement
    formControl.className = 'form-control ok'
    
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    validaCampos()
})

const validaCampos = ()=> {
    const nombreValor = nombre.value
    const telefonoValor = telefono.value
    const emailValor = email.value;

    if(!nombreValor){
        console.log('campo vacio')
        validaFalla(nombre, 'campo vacio')
    }else{
        console.log(nombreValor)
        validaOK(nombre, nombreValor)
    }

    if(!telefonoValor){
        console.log('campo vacio')
        validaFalla(telefono, 'campo vacio')
    }else{
        console.log(telefonoValor)
        validaOK(telefono, telefonoValor)
    }

    if(!emailValor){
        console.log('campo vacio')
        validaFalla(email, 'campo vacio')
    }else{
        console.log(emailValor)
        validaOK(email, emailValor)
    }

}


