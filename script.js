// Botão para escolher quantas pessoas deseja cadastrar e chamar o seguente formulario
function numberReg() {
    let numbReg = document.getElementById("pergunta");
    optReg = numbReg.value;
    formOne = document.getElementById("formFirst");
    formOne.style.display = "block";
    formOne.style.position = "absolute";
    formOne.setAttribute("class", "question animate__animated animate__backInUp");
    question = document.getElementById("question");
    question.setAttribute("class", "question animate__animated animate__backOutUp");
    question.style.position = "absolute";
};

function capture() {
    //Função do Objeto
    function Person(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };

    //Nome e idade em variaveis
    let nameCapture = document.getElementById("name").value;
    let ageCapture = parseInt(document.getElementById("age").value);

    //Criação do Objeto
    newPerson = new Person(nameCapture, ageCapture);
    console.log(newPerson);
    insertContact();
    optReg = optReg - 1;
    if (optReg == 0) {
        formOne.setAttribute("class", "question animate__animated animate__backOutDown");
        newQuestion();
    };
    // Ligação para a Pergunta se quer adicionar mais pessoas
    function newQuestion() {
        newQuestion = document.getElementById("newQuestion");
        newQuestion.style.display = "block";
        newQuestion.setAttribute("class", "question animate__animated animate__backInDown");
        formOne.style.display = "none";
    };
};

//Criação do Array
dataBase = [];

//Pessoa Maior Impressão
function pessoaMaior(dataBase) {
    ordenarPessoas(dataBase);
    document.getElementById('maiorQueTodos').innerHTML = (`A pessoa com maior idade é ${dataBase[0].nome} e tem ${dataBase[0].idade} anos`);
}

//Ordenar Pessoas
function ordenarPessoas(dataBase) {
    dataBase.sort((a, b) => {
        if (a.idade < b.idade) {
            return 1
        } else if (a.idade > b.idade) {
            return -1
        } else {
            return 0
        }
    });
}

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
    document.getElementById("newQuestion").style.position = "absolute";
    question.style.display = "block";
    question.setAttribute("class", "question animate__animated animate__backInDown");
    newQuestion.setAttribute("class", "question animate__animated animate__backOutDown");
    newQuestion.style.display = 'none';
};
// Botão para terminar o processo
let buttonNo = document.getElementById("buttonNo").addEventListener("click", noIdont);
function noIdont() {
    document.getElementById("newQuestion").style.display = "none";
    maxDate();
};
// Recorrer os elementos do objeto
function maxDate() {
    pessoaMaior(dataBase);
    document.getElementById('answer').style = "display:flex; flex-direction:column; align-items:center;"
};

//Voltar de novo para o começo do Programa
function novoCalculo() {
    document.getElementById('answer').style.display = "none";
    question.style.display = "block";
    question.setAttribute("class", "question animate__animated animate__backInDown");
}
