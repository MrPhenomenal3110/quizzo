function displayScore(score, totalQuestions) {
    const scoreText = document.querySelector(".score-text")
    scoreText.textContent = `Score : ${score} / ${totalQuestions * 10}`
}

function reset () {
    localStorage.removeItem("score")
    localStorage.removeItem("totalQuestions")
}

const button = document.querySelector(".btn")
button.addEventListener("click", () => {
    reset();
    window.location.href = "./index.html"
})

const score = localStorage.getItem("score")
const totalQuestions = localStorage.getItem("totalQuestions")

displayScore(score,totalQuestions)