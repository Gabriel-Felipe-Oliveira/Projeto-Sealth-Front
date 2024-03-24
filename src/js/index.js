



import {conexao} from"./firebase.js"
import {getCreateUserInput ,validateFormCadastroUser} from "./validators.js";


const button = document.getElementById("open-modal");
const modal = document.getElementById("myModal");
const buttonClosed = document.getElementById("closed-modal");
const overlay = document.getElementById("overlay")
const btnCadastro = document.getElementById("cadastrese");

button.onclick = function (){
    modal.showModal()
    overlay.style.display = "block";

}

buttonClosed.onclick = function(){
    modal.close()
    overlay.style.display = "none";
}

var selectOptionsDay = document.getElementById('selectOptionsDay');

        // Adiciona opções dinamicamente de 1 a 20
for (var i = 1; i <= 31; i++) {
    var option = document.createElement('option');
    option.id = i; 
    option.value = i;
    option.text = i;
    selectOptionsDay.appendChild(option);
}


var selectOptionsMonth = document.getElementById('selectOptionsMonth');
var meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

// Adiciona opções dinamicamente de 1 a 20
for (var i = 0; i <= meses.length - 1; i++) {
var option = document.createElement('option');
option.id =  meses[i]; 
option.value = meses[i];
option.text = meses[i];
selectOptionsMonth.appendChild(option);
}

var selectOptionsYears = document.getElementById('selectOptionsYears');

        // Obtém o ano atual
var anoAtual = new Date().getFullYear();

// Adiciona opções dinamicamente para os anos de 1950 até o ano atual
for (var ano = 1950; ano <= anoAtual; ano++) {
    var option = document.createElement('option');
    option.value = ano;
    option.text = ano;
    selectOptionsYears.appendChild(option);
}

var radioButtons = document.querySelectorAll('.popup-input-radio');
        radioButtons.forEach(function(radioButton) {
            radioButton.addEventListener('click', function() {
                // Desmarca todos os outros botões de rádio quando um é clicado
                radioButtons.forEach(function(otherRadioButton) {
                    if (otherRadioButton !== radioButton) {
                        otherRadioButton.checked = false;
                    }
                });
            });
});

btnCadastro.onclick = function Cadastro(){

    const userInput = getCreateUserInput();

    validateFormCadastroUser(userInput);
 var id1 = "id2"
    const user = {
       id1 : id1  = {
        name: userInput.name,
        lastname: userInput.lastname,
        email: userInput.email,
        password: userInput.password,
        birthday: userInput.birthday,
        gender: userInput.gender,
        }
    }

    if(validateFormCadastroUser){

        conexao(user)
        alert("tudo certo");


    }

}



