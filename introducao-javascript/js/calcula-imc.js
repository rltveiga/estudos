var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientesList = document.querySelectorAll(".paciente");

for(var i =0; i < pacientesList.length;i++){

    var pacienteLine = pacientesList[i];

    var tdPeso = pacienteLine.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = pacienteLine.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = pacienteLine.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        pacienteLine.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        pacienteLine.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
    
}

var addBotton = document.querySelector("#adicionar-paciente");
addBotton.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var name = form.nome.value; 
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var patientTr = document.createElement("tr");

    var nomeTd = document.createElement("td");;
    var pesoTd = document.createElement("td");;
    var alturaTd = document.createElement("td");;
    var gordraTd = document.createElement("td");;
    var imcTd = document.createElement("td");;

    nomeTd.textContent = name;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gordraTd.textContent = gordura

    patientTr.appendChild(nomeTd);
    patientTr.appendChild(pesoTd);
    patientTr.appendChild(alturaTd);
    patientTr.appendChild(gordraTd);
    
    var table = document.querySelector("#tabela-pacientes");
    table.appendChild(patientTr);
})