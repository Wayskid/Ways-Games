const containerBody = document.querySelector(".containerBody");
const hideGame = document.querySelector(".hideGame");
const popupStart = document.querySelector(".popupStart");
const inputName = document.querySelector(".inputName");
const nameBtn = document.querySelector(".nameBtn");
const playerName = document.querySelector(".playerName");
const numberInput = document.querySelector(".numberInput");
const enterNumber = document.querySelector(".enterNumber");
const yScore = document.querySelector(".yScore");
const hScore = document.querySelector(".hScore");
const tryCorrect = document.querySelector(".tryCorrect");
const theNumber = document.querySelector(".theNumber");
const qstMark = document.querySelector(".qstMark");
const highLow = document.querySelector(".highLow");
const restart = document.querySelector(".restart");
const tryAgain = document.querySelector(".tryAgain");
const winConfetti = document.querySelector("#my-canvas");



//Input Your and Start The Game


inputName.addEventListener("keyup", () => {
    if (inputName.value.length > 1) {
        nameBtn.classList.remove("disable");

        nameBtn.addEventListener("click", (e) => {
                e.preventDefault();
                containerBody.classList.remove("hideGame");
                popupStart.classList.add("closePopup")
                playerName.innerText = inputName.value;
        })
    }
});


//Game Play

    let randomNum = Math.floor((Math.random() * 20)) + 1;
    theNumber.innerText = randomNum;
    let hiddenNum = parseFloat(theNumber.innerText);

// const myScore = parseFloat(yScore.innerText);
// const myScoreShown = myScore - 1;


enterNumber.addEventListener("click", (e) => {
    const trial = numberInput.value;
    if (trial == randomNum) {
        theNumber.classList.remove("hidden");
        theNumber.classList.add("blink");
        qstMark.classList.add("hidden");
        highLow.innerText ="Correct!!! Click Restart To Play Again";
        tryAgain.innerText ="";
        winConfetti.className = "";
    }
    else if (trial < randomNum){
        tryAgain.innerText ="Try Again!";
        highLow.innerText ="Too Low!!!";
        yScore.innerText = parseFloat(yScore.innerText) - 1;
    }
    else if (trial > randomNum){
        tryAgain.innerText ="Try Again!";
        highLow.innerText ="Too High!!!";
        yScore.innerText = parseFloat(yScore.innerText) - 1;
}



})

restart.addEventListener("click", ()=>{
    randomNum = Math.floor((Math.random() * 20)) + 1;
    theNumber.innerText = randomNum;
    hiddenNum = parseFloat(theNumber.innerText);
    winConfetti.className = "hideConfetti";
    theNumber.classList.add("hidden");
    theNumber.classList.remove("blink");
    qstMark.classList.remove("hidden");
    yScore.innerText = "20"
    // tryCorrect.classList.add("hidden");
    numberInput.value = "";
})








var confettiElement = document.getElementById('my-canvas');
var confettiSettings = { target: confettiElement };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();  