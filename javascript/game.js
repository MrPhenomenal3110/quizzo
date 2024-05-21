const questionText = document.querySelector(".question-text");
const questionNumber = document.querySelector(".question-number");
const questionCountText = document.querySelector(".question-count-text");
const choice1 = document.querySelector("#choice-1");
const choice2 = document.querySelector("#choice-2");
const choice3 = document.querySelector("#choice-3");
const choice4 = document.querySelector("#choice-4");
const choices = document.querySelectorAll(".individual-choice");

var currentQuestion = 0;
var score = 0;

var questions = [
    {
        number: 1,
        text: "Which country has the largest land area ?",
        choice1: "China",
        choice2: "United States of America",
        choice3: "Canada",
        choice4: "Russia",
        answer: "Russia",
    },
    {
        number: 2,
        text: "Who directed the movie 'Inception' ?",
        choice1: "Steven Spielberg",
        choice2: "Christopher Nolan",
        choice3: "James Cameron",
        choice4: "Quentin Tarantino",
        answer: "Christopher Nolan",
    },
    {
        number: 3,
        text: "What is the value of π (pi) rounded to two decimal places ?",
        choice1: "2.14",
        choice2: "3.14",
        choice3: "3.41",
        choice4: "2.41",
        answer: "3.14",
    },
    {
        number: 4,
        text: "Which country won the FIFA World Cup in 2018 ?",
        choice1: "Brazil",
        choice2: "Germany",
        choice3: "France",
        choice4: "Argentina",
        answer: "France",

    },
    {
        number: 5,
        text: "Who is known as the 'King of Pop' ?",
        choice1: "Elvis Presley",
        choice2: "Michael Jackson",
        choice3: "Prince",
        choice4: "Madonna",
        answer: "Michael Jackson",
    },

];

function shuffleQuestions(){
    questions.sort(() => Math.random() - 0.5)
    questions.forEach((question, index) => {
        question.number = index + 1
    })
}


var totalQuestions = questions.length;
localStorage.setItem("totalQuestions", totalQuestions);

function showQuestion() {
    var q = questions[currentQuestion];
    questionCountText.textContent = `${q.number} / ${totalQuestions}`;
    questionText.textContent = q.text;
    choice1.textContent = q.choice1;
    choice2.textContent = q.choice2;
    choice3.textContent = q.choice3;
    choice4.textContent = q.choice4;
    questionNumber.textContent = `Question ${q.number} : `;
}

var clicked = false


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if(clicked == true) return
        clicked = true
        if (choice.innerText.toString().trim() === questions[currentQuestion].answer.toString().trim()) {
            choice.classList.add("correct");
            score+=10;
        }
        else{
            choice.classList.add("incorrect");
        }
        choice.classList.add("selected");
        currentQuestion++;
        if (currentQuestion === totalQuestions) {
            localStorage.setItem("score", score);
            setTimeout(() => {
                choice.classList.remove("correct");
                choice.classList.remove("incorrect");
                choice.classList.remove("selected");
                window.location.href = "./score.html";
            },1500 );
            return
        }
        else{
            setTimeout(() => {
                choice.classList.remove("correct");
                choice.classList.remove("incorrect");
                choice.classList.remove("selected");
                showQuestion();
                clicked = false
            },1500 )
        }
    })
})

shuffleQuestions();
showQuestion()