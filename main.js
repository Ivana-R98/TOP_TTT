// the Gameboard object
const Gameboard = (() => {
    const board = Array(9).fill("");
    const divs = document.querySelectorAll(".item");
    let move = 0;
    let id;
    Array.from(divs).forEach(div => {
        div.addEventListener("click", (e) => { 
            if(div.innerText === "") {
                div.style.backgroundColor = "white";
                id = parseInt(div.id);
                if(move === 0 || move % 2 === 0) {
                    div.innerText = player1.mark;
                    board[e.target.id] = player1.mark;
                }
                else if(move % 2 !== 0) {
                    div.innerText = player2.mark;
                    board[e.target.id] = player2.mark;
                } 
                console.log(board);
                // console.log(id, div.innerText);
                if (move < 9) {
                    if(move > 3) {
                        //check if someone won
                        Game.checkWinner()
                        console.log(Game.winner)
                    }
                    if(move === 8)
                    console.log("Tie!");
                }
                move++;
            }
        })
    });
    return { board, divs };
})();


// player factory
const Player = (name, mark) => {
    return { name, mark };
}
const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

// game control
const Game = (() => {
    let winner = false;
    const winningArr = [[0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

    const checkWinner = () => {
        winningArr.forEach(item => {
            if(Gameboard.board[item[0]] === player1.mark 
                && Gameboard.board[item[1]] === player1.mark 
                && Gameboard.board[item[2]] === player1.mark) {
                console.log(`Winner ${player1.name}`);
                winner = true; return winner;
            }
            else if(Gameboard.board[item[0]] === player2.mark 
                && Gameboard.board[item[1]] === player2.mark 
                && Gameboard.board[item[2]] === player2.mark) {
                console.log(`Winner ${player2.name}`);
                winner = true; return winner;
            }
        })
        return { winner }
    }
    return { winningArr, checkWinner, winner}
})();

//display
// const display = (() => {

// })();