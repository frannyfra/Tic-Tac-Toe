
//---DOM Manipulation ---
const squares = Array.from(document.querySelectorAll("#square"));
const restartButton = document.getElementById("restart-button");
const userXScore = document.getElementById("playerXScore");
const userOScore = document.getElementById("playerOScore");
let messages = document.querySelector("h3");

//---constant and variable declaration---
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let playerXScore = 0;
let playerOScore = 0;
let turn = "X";
let win;
let board;

//---Initialise
const initialise = () => {
    squares.forEach(square =>
        square.innerHTML = "");

    board = ["", "", "",
        "", "", "",
        "", "", ""];

    messages.textContent = "Play again!"
}
initialise()

const render = () => {
    board.forEach((mark, index) => {
        if (squares[index].textContent === "") squares[index].textContent = mark;
    });
    messages.textContent = (win === 'T') ? `That's a tie` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
}
render();

const getWinner = () => {
    let winner;
    winningCombos.forEach((combo, index) => {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = board[combo[0]];
            setTimeout(function () { alert(`${win} wins the game!`), oneMoreTurnGame() }, 400);
        }
    })
    if (winner === "X") {
        userXScore.innerText = (playerXScore += 1)
    } else if (winner === "O") {
        userOScore.innerText = (playerOScore += 1)
    } else null;
    if (winner) {
        squares.forEach(square => {
            square.removeEventListener("click", handleTurn);
        })
    }
    return winner ? winner : board.includes('') ? null : 'T';
}

const handleTurn = (event) => {
    const index = squares.findIndex((square) => {
        if (square.innerHTML === "") {
            return square === event.target;
        }
        else null;
    })
    board[index] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();
    render();
}

squares.forEach(square => {
    square.addEventListener("click", handleTurn
        , { once: true }
    );
})

const restartGame = () => {
    initialise()
    userXScore.innerText = 0;
    userOScore.innerText = 0;

    squares.forEach(square => {
        square.addEventListener("click", handleTurn
            , { once: true }
        );
    })
}
restartButton.addEventListener("click", restartGame);

const oneMoreTurnGame = () => {
    initialise()

    squares.forEach(square => {
        square.addEventListener("click", handleTurn
            , { once: true }
        );
    })
}

