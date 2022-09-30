const startBTN = document.querySelector(".game__start");
const gameContext = document.querySelector(".game__context");
const gameInput = document.querySelector(".game__input");
const cells = document.getElementsByClassName("cell");

resetInputs = () => {
    Array.from(cells).forEach((cell) => {
        cell.value = "";
    })
}

toggleClasses = () => {
    startBTN.parentElement.classList.toggle("hidden");
    gameContext.classList.toggle("hidden");
    gameInput.classList.toggle("hidden");
    resetInputs()
    Array.from(cells)[0].focus();
    Array.from(cells).forEach(cell => {
        cell.style.backgroundColor = "white";
        cell.removeAttribute("disabled");
    })
}

startBTN.addEventListener("click", () => {
    toggleClasses();
})


function checkWord() {
    let guess = ""
    let answer = "words";
    let i = 0;
    Array.from(cells).forEach((cell) => {
        guess += cell.value;
        cell.style.backgroundColor = cell.value === answer[i] ? "green" : "red";
        i++;
    })
    window.alert(guess === answer ? "correct" : "wrong");
    toggleClasses();
}

Array.from(cells).forEach((cell) => {
    cell.addEventListener("keyup", (e) => {
        if (e.keyCode === 8 && cell.previousElementSibling !== null && cell.value.length < 1) {
            cell.previousElementSibling.focus()
            return;
        }
        if (e.keyCode === 13 || cell.value.length === 1) {
            if (cell.nextElementSibling === null) {
                Array.from(cells).forEach(discell => {
                    discell.disabled = true;
                })
                checkWord()
                return;
            }
            cell.nextElementSibling.focus();
        }
    });
})