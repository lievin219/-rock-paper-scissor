const computer_choicedisplay = document.getElementById('comp-choice')
const user_choicedisplay = document.getElementById('user-choice')
const resultdisplay = document.getElementById('results')
const possible_choice = document.querySelectorAll('button')
let user_choiceone;
let computer_choice;
let resultz;

possible_choice.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    user_choiceone = e.target.id
    user_choicedisplay.innerHTML = user_choiceone
    generatecomputerchoice()
    getresult()
}))
function generatecomputerchoice() {
    const random = Math.floor(Math.random() * 3) + 1;
 
    if (random === 1) {

        computer_choice = 'rock'
    }
    if (random === 2) {
        computer_choice = 'scissor'
    }
    else if (random === 3) {
        computer_choice = "paper"
    }
    computer_choicedisplay.innerHTML = computer_choice
}

function getresult() {


    if (computer_choice === user_choiceone) {
        resultz = 'it is a draw'
    }
    else if (computer_choice === 'rock' && user_choiceone === 'paper') {
        resultz= 'The user have won! congratuation '
    }
    else if (computer_choice === "rock" && user_choiceone === "scissor") {
        resultz = "you lost"
    }
    else if (computer_choice === "scissor" && user_choiceone === "paper") {
        resultz = "you lost again!"
    }
    else if (computer_choice === "scissor" && user_choiceone === "rock") {
        resultz = " you won !"
    }
    else if (computer_choice === "paper" && user_choiceone === "rock") {
        resultz = " you lost !"
    }
    else if (computer_choice === "paper" && user_choiceone === "scissor") {
        resultz = " you won"
    }
    resultdisplay.innerHTML = resultz

}