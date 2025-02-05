const colorPickers = document.querySelectorAll(".color-code");
const buttons = document.querySelectorAll(".btns")
const closeModal = document.querySelector(".close-btn")
const modalContainer = document.querySelector(".modal")
const startGame = document.querySelector(".start-btn")
const gameScore = document.querySelector(".game-score")
const modalContent = document.querySelector(".box")
const newGame = document.querySelector(".restart")


const colors = ["black", "babypowder", "khaki", "orange", "coquelicot", "purple"];
let colorRandom = colors[Math.floor(Math.random() * colors.length)];
console.log("Target Color:", colorRandom);


let userScore = 0
let computerScore = 0

window.addEventListener("load", ()=>{
    modalContainer.classList.add("show")
})

closeModal.addEventListener("click", ()=>{
    modalContainer.classList.remove("show")
})

startGame.addEventListener("click", ()=>{
    modalContainer.classList.remove("show")
})

newGame.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    gameScore.innerHTML = `score = 0 : 0`;
    startGame.textContent = "Restart Game";  
    modalContainer.classList.add("show");
});


colorPickers.forEach((colorPicker) => {
    colorPicker.addEventListener("click", () => {
        const chosenColor = colorPicker.textContent.trim().toLowerCase();

        if (chosenColor === colorRandom.toLowerCase()) {
            userScore++;
            modalContent.innerHTML = `<p>Correct Guess! You won</p><span>${userScore} : ${computerScore}</span>`
        } else {
            computerScore++;
            modalContent.innerHTML = `<p>Wrong Guess! You lost</p><span>${userScore} : ${computerScore}</span>`
        }
        startGame.textContent = "Continue Playing"
        modalContainer.classList.add("show")
        gameScore.textContent = `${userScore} : ${computerScore}`
        
        resetTargetColor()
    });
});


function resetTargetColor(){
    colorRandom = colors[Math.floor(Math.random() * colors.length)];
    console.log("New Target Color:", colorRandom);
}


