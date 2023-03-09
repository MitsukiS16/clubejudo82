//const question = "A que grupo pertence esta técnica - x? "
//const answer = "......"

let questionshtml = "";
const questions = [ "Qual é a idade mínima para inscrever o meu filho/a?.",
                    "Qual o equipamento que devo comprar?",
                    "onde posso comprar o equipamento para o meu filho/a?",
                    "Em quantas aulas por semana posso inscrever o meu filho/a?",
                    "Posso desistir a qualquer altura?",
                    "O valor da inscrição inclui seguro? É obrigatório?"
                  ];
const answers = [   "ola 1",
                    "ola 2",
                    "ola 3",
                    "ola 4",
                    "ola 5",
                    "ola 6"
                  ];
for(let i=0; i<questions.length; i++){
    questionshtml += 
    `
    <li>
    <div class="wrap-collabsible">
    <input id="collapsible${i}" class="toggle" type="checkbox">
    <label for="collapsible${i}" class="lbl-toggle">${questions[i]}</label>
    <div class="collapsible-content">
      <div class="content-inner">
        <p>${answers[i]}</p>
      </div>
    </div>
  </div>
    </li>
    `
}
const questionUL = document.getElementById("questions");
questionUL.innerHTML = questionshtml;


/*

        <h2>${questions[i]}</h2>
        <p>${answers[i]}</p>
        */