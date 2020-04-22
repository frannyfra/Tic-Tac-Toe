const board = ["", "", "",
    "", "", "",
    "", "", ""];

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


const squares = Array.from(document.querySelectorAll(".square"))
console.log(squares)

const render = () => {
    board.forEach((mark, index) => {
        console.log(index)
        console.log(mark)
        squares[index].textContent = mark;
    })
}
render();


let turn = "X";

// const getWinner = () => {
//     winningCombos.forEach((combo, index) => {
//         console.log(combo, index);

//     })

// }
// getWinner()

const handleTurn = (event) => {
    let index = squares.findIndex((square) => {
        return square === event.target;
    })
    board[index] = turn;
    console.log(board, "iam the board");
    turn = (turn === "X") ? "O" : "X";

    // win = getWinner();

    render();
}
document.getElementById("board").addEventListener("click", handleTurn);


