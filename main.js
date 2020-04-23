
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
const squares = Array.from(document.querySelectorAll("#square"));
const resetButton = document.getElementById("reset-button");
const boardContainer = document.getElementById("board");
console.log(squares)
let messages = document.querySelector("h2");
let turn = "X";
let win;
let board;

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
            setTimeout(function () { alert(`${win} wins the game!`), initialise() }, 400);
        }
    })
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

resetButton.addEventListener("click", initialise);
boardContainer.addEventListener("click", handleTurn);




