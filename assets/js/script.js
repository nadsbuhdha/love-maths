document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type')==='submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }
    runGame('addition');
})

/**main game loop, called when the script is first loaded */
function runGame(gameType) {

let num1 = Math.floor(Math.random() * 25 + 1);
let num2 = Math.floor(Math.random() * 25 + 1);
 
if (gameType === 'addition') {
    displayAdditionQuestion(num1, num2);
} else {
    alert (`Unknow game type: ${gameType}`);
    throw `Unknow game type: ${gameType}.Aborting!`
}
}

/**check answer against first element in array */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();

    let isCorrect = userAnswer === calculatedAnswer[0]

    if (isCorrect) {
        alert('Hey you got it correct! :D')
    } else {
        alert(`you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}`)
    }

    runGame(calculatedAnswer[1]);

}

//** gets numbers and operators and returns correct answer from the dom*/
function calculateCorrectAnswer() {
    let operand1 = parseInt (document.getElementById('operand1').innerText);
    let operand2 = parseInt (document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, 'addition']; 
    } else {
        alert (`unimplemented operator ${operator}`)
        throw `unimplemented operator ${operator}.Aborting!`;
    }



}

function increcemntScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}