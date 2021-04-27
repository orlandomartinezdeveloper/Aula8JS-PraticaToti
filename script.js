function numberReg() {
    let numbReg = document.getElementById("pergunta");
    optReg = numbReg.value;
    formOne = document.getElementById("formFirst");
    formOne.style.display = "block";
    question = document.getElementById("question");
    question.style.display = "none";
};

function capture() {
    //Função do Objeto
    function Person(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };

    //Nome e idade em variaveis
    let nameCapture = document.getElementById("name").value;
    let ageCapture = document.getElementById("age").value;

    //Criação do Objeto
    newPerson = new Person(nameCapture, ageCapture);
    console.log(newPerson);
    insertContact();
    optReg = optReg - 1;
    if (optReg == 0) {
        formOne.style.display = "none";
        document.getElementById("newQuestion").style.display = "block";
    };
};

//Criação do Array
dataBase = [];

//Função para colocar dados no Array
function insertContact() {
    dataBase.push(newPerson);
    console.log(dataBase);
    document.getElementById("tabla").innerHTML += `<tbody><td>${newPerson.nome}</td><td>${newPerson.idade}</td></tbody>`;
};

// Botão para voltar ao formulario de registro
let buttonYes = document.getElementById("buttonYes");
buttonYes.addEventListener('click', yesIdo);
function yesIdo() {
    document.getElementById("newQuestion").style.display = "none";
    question.style.display = "block";
};
// Botão para terminar o processo
let buttonNo = document.getElementById("buttonNo").addEventListener("click", noIdont);
function noIdont() {
    document.getElementById("newQuestion").style.display = "none";
    maxDate();
};
// Recorrer os elementos do objeto
function maxDate() {
    dataBase.forEach(umaParteDoNome => {
        console.log(umaParteDoNome.idade);
        /*
        max = Object.entries(umaParteDoNome.idade).reduce(function (prev, curr) {
            return prev[1] > curr[1] ? prev : curr;
        });

        min = Object.entries(umaParteDoNome.idade).reduce(function (prev, curr) {
            return prev[1] < curr[1] ? prev : curr;
        });
        console.log('La propiedad con el mayor valor es', max[0], 'y su valor es', max[1]);
        console.log('La propiedad con el menor valor es', min[0], 'y su valor es', min[1]);*/
    });

};


