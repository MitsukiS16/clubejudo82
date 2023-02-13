const question = "A que grupo pertence esta técnica - x? "
const answer = "......"

const elem = document.getElementById("content")

const questions = [ "question1",
                    "question2",
                    "question3"];
const answers = ["answer1",
                "answer2",
                "answer3"];
for(let i=0; i<questions.length; i++) {
    const template = 
    
    `<div class="wrap-collabsible"><input id="collapsible" class="toggle" type="checkbox"><label for="collapsible" class="lbl-toggle">${questions[i]}</label><div class="collapsible-content"><div class="content-inner"><p>${answers[i]}</p></div></div></div>`


    
    elem.innerHTML += template;
}



for (let i=0; i<5; i++) {
    console.log("hi")
}