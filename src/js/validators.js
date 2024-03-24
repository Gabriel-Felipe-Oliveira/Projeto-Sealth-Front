

let formCadastro = document.getElementById("cadastro");


export function validateFormCadastroUser(userInput) {
   

    if (userInput.name === '' && userInput.lastname === '' && userInput.email === '' && userInput.password === '' && userInput.gender === null) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if(userInput.name === ''){
        alert('Por favor prencha nome ')
        return
    }

    if(userInput.lastname === ''){
        alert('Por favor prencha o sobrenome  ')
        return
    }
    if(userInput.email === ''){
        alert('Por favor prencha o email ')
        return
    } else if(userInput.email !== ''){
        validateEmail(userInput.email)

    }
    if(userInput.password === ''){
        alert('Por favor prencha a senha ')
        return
    }else if(userInput.password !== ''){
        validatePassword(userInput.password)
    }
    

    return true;
}

function validateEmail(email) {
    const emailRegex = /@.*\.com/;
    if (!emailRegex.test(email)) {
        throw new Error("Email inválido");
    }
    return true
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        throw new Error("Senha inválida. A senha deve conter pelo menos uma letra minúscula, e um tamanha maio que 8.");
    }
}




export function getCreateUserInput() {

    console.log(formCadastro);
    
    const name = formCadastro.name.value.trim();
    const lastname = formCadastro.lastname.value.trim();
    const email = formCadastro.email.value.trim();
    const password = formCadastro.password.value.trim();
   const day = formCadastro.selectOptionsDay.value;
   const month =formCadastro.selectOptionsMonth.value;
   const years =formCadastro.selectOptionsYears.value;
   const birthday = concatenarData(day,month,years)
   const gender = obterValorDoRadioMarcado();

    return { name,lastname, email, password ,birthday,gender};
}

function obterValorDoRadioMarcado() {

    const radios = document.querySelectorAll('.popup-input-radio');
    let valorDoRadioMarcado;

    radios.forEach(radio => {
        if (radio.checked) {
            // Se o rádio estiver marcado, armazena o valor
            valorDoRadioMarcado = radio.value;
        }
    });

    return valorDoRadioMarcado;

}
function concatenarData(day , month , years) {
    
    if (day && month && years) {
    const dataConcatenada = day + '-' + month + '-' + years;

    console.log('Data concatenada:', dataConcatenada);
    return dataConcatenada
    } else {
        throw new Error("Por favor, selecione todos os campos de data.");
    }
}