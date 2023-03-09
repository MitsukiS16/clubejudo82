//const question = "A que grupo pertence esta técnica - x? "
//const answer = "......"

let questionshtml = "";
const questions = [ "P01. Cores dos cintos?", 
                    "P02. Nome do criador do Judo?",
                    "P03. Nome da primeira escola de Judo?", 
                    "P04. História do judo?",
                    "P05. 3 exemplos de faltas em combate.",
                    "P06. Tipos de técnicas?",
                    "P07. Cor do cinto mais alto?",
                    "P08. Formas de fazer Ippon?",
                    "P09. Formas de ganhar um combate?",
                    "P10. Princípios do Judo?",
                    "P11. Ano em que foi criado oficialmente o Judo?",
                    "P12. 4 Movimentos de uma técnica?",
                    "P13. 3 Exemplos de faltas numa luta.",
                    "P14. 3 Exemplos de técnicas do grupo Ashi-Waza.",
                    "P15. 3 Exemplos de técnicas do grupo Te-Waza.",
                    "P16. 3 Exemplos de técnicas do grupo Sutemi-Waza."
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