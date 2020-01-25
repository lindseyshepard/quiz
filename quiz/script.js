const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')

const answerButtonsElement =document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

let shuffledQuestions, currentQuestionIndex

function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions=questions.sort(()=>Math.random() - .5)
currentQuestionIndex =0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}


function setNextQuestion() {
  
showQuestion(shuffledQuestions[currentQuestionIndex])
}



function showQuestion(question) {
questionElement.innerText=question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}




https://www.youtube.com/watch?v=riDzcEQbX6k



function selectAnswer(e) {


}

const questions = [
    {
        question: 'what is 2 + 2 ?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct:false}
        ]
    }
]