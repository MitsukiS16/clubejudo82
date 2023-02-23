//const question = "A que grupo pertence esta técnica - x? "
//const answer = "......"

let questionshtml = "";
const questions = [ "P01. Quais são as cores dos cintos?", 
                    "P02. Qual é o nome do criador do Judo?",
                    "P03. Qual é o nome da primeira escola de Judo?", 
                    "P04. Conta a história do judo.",
                    "P05. Dá 3 exemplos de faltas num combate.",
                    "P06. Que tipos de técnicas existem?",
                    "P07. Qual é a cor do cinto mais alto?",
                    "P08. Que formas é possível fazer Ippon?",
                    "P09. Que formas existem de ganhar um combate?",
                    "P10. Quais são os princípios do Judo?",
                    "P11. Em que ano foi criado oficialmente o Judo?",
                    "P12. Quais são os 4 movimentos de uma técnica?",
                    "P13. Dá 3 exemplos de faltas numa luta.",
                    "P14. Dá 3 exemplos de técnicas do grupo Ashi-Waza.",
                    "P15. Dá 3 exemplos de técnicas do grupo Te-Waza.",
                    "P16. Dá 3 exemplos de técnicas do grupo Sutemi-Waza."
                  ];
const answers = [   "R01. ---", 
                    "R02. --", 
                    "R03. --",
                    "R04. --", 
                    "R05. --",
                    "R06. --", 
                    "R07. --",
                    "R08. --", 
                    "R09. --",
                    "R10. --", 
                    "R11. --",
                    "R12. --", 
                    "R13. --",
                    "R14. --", 
                    "R15. --",
                    "R16. --"
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