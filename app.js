let youScore = 0;
let computronScore = 0;
const youScore_span = document.getElementById("youScore");
const computronScore_span = document.getElementById("computronScore");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputronChoice() {
    const choices = ['r', 'p', 's'];
    const RandomNumber = Math.floor(Math.random() * 3);
    return choices[RandomNumber];
} 

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(youChoice, computronChoice) {
    const smallUserWord = "You".fontsize(3).sub();
    const smallCompWord = "Computron".fontsize(3).sub();
    const youChoice_div = document.getElementById(youChoice);
    youScore++;
    youScore_span.innerHTML = youScore;
    result_p.innerHTML = `${convertToWord(youChoice)}${smallUserWord} beats ${convertToWord(computronChoice)}${smallCompWord}. You win!`
    youChoice_div.classList.add('green-glow');
    setTimeout(() => youChoice_div.classList.remove('green-glow'),300);
}

function lose(youChoice, computronChoice) {
    const smallUserWord = "You".fontsize(3).sub();
    const smallCompWord = "Computron".fontsize(3).sub();
    const youChoice_div = document.getElementById(youChoice);
    computronScore++;
    computronScore_span.innerHTML = computronScore;
    result_p.innerHTML = `${convertToWord(youChoice)}${smallUserWord} loses to ${convertToWord(computronChoice)}${smallCompWord}. You lost...`
    youChoice_div.classList.add('red-glow');
    setTimeout(() => youChoice_div.classList.remove('red-glow'),300);
}

function draw(youChoice, computronChoice) {
    const smallUserWord = "You".fontsize(3).sub();
    const smallCompWord = "Computron".fontsize(3).sub();
    const youChoice_div = document.getElementById(youChoice);
    result_p.innerHTML = `${convertToWord(youChoice)}${smallUserWord} equals ${convertToWord(computronChoice)}${smallCompWord}. It's a draw.`
    youChoice_div.classList.add('grey-glow');
    setTimeout(() => youChoice_div.classList.remove('grey-glow'),300);
}

function game(youChoice) {
    const computronChoice = getComputronChoice();
    switch (youChoice + computronChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(youChoice, computronChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(youChoice, computronChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(youChoice, computronChoice);
            break;
    }
}



function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();


















