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
                if (move < 9) {
                    if(move > 3) {
                        //check if someone won
                        Game.checkWinner()
                    }
                    if(move === 8 && !Game.checkWinner())
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
                Gameboard.divs[item[0]].style.border = "5px rgb(36, 252, 3) solid";
                Gameboard.divs[item[1]].style.border = "5px rgb(36, 252, 3) solid";
                Gameboard.divs[item[2]].style.border = "5px rgb(36, 252, 3) solid";
                const p = document.getElementById("para");
                p.classList.add("para");
                p.innerText = `${player1.name} won!`;
                winner = true;
            }
            else if(Gameboard.board[item[0]] === player2.mark 
                && Gameboard.board[item[1]] === player2.mark 
                && Gameboard.board[item[2]] === player2.mark) {
                Gameboard.divs[item[0]].style.border = "5px rgb(36, 252, 3) solid";
                Gameboard.divs[item[1]].style.border = "5px rgb(36, 252, 3) solid";
                Gameboard.divs[item[2]].style.border = "5px rgb(36, 252, 3) solid";
                const p = document.getElementById("para");
                p.classList.add("para");
                p.innerText = `${player2.name} won!`;
                winner = true;
            }
            if(winner === true) {
                const body = document.
                Array.from(Gameboard.divs).forEach(div => {
                    div.classList.add("disable");
                })
            }
        }) 
        return winner; 
    }
    return { winningArr, checkWinner }
})();
//display functions
const displayController = (() => {
    const createTextBox = () => {
        const div = document.createElement("div")
        const input = document.createElement("input");
        const submitBtn = document.createElement("button");
        div.classList.add("name")
        submitBtn.innerText = "Submit";
        input.setAttribute("type", "text");
        input.setAttribute("value", "Player 1");
        input.classList.add("input");
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            display.p1.innerText = input.value;
            display.nameDiv.appendChild(div);
            div.appendChild(input);
            div.appendChild(submitBtn);
            console.log(display.nameDiv);
        })
    }
    return { createTextBox }
})();

//display buttons, player names, who won
const display = (() => {
    // reset btn
    let timesHovered = 0;
    const main = document.getElementById("main")
    const resetBtn = document.createElement("button");
    resetBtn.innerText = "Play again";
    resetBtn.addEventListener("click", () => {
        location.reload();
    })
    resetBtn.classList.add("btn");
    main.appendChild(resetBtn); 
    const nameDiv = document.getElementById("nameDiv");
    const p1 = document.getElementById("player1");
    p1.addEventListener("mouseenter", () => { 
        if(timesHovered === 0) {
            displayController.createTextBox;
            timesHovered++;
            console.log(timesHovered)
        }
    });
    p1.addEventListener("mouseleave", () => {
        timesHovered--;
    }) 

    return { main, p1, nameDiv }
})();