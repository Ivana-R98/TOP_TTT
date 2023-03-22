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
                Array.from(Gameboard.divs).forEach(div => {
                    div.classList.add("disable");
                })
            }
        }) 
        return winner; 
    }
    return { winningArr, checkWinner }
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

    //player 1 display elements
    const p1 = document.getElementById("p1Div");
    const p1para = document.getElementById("player1");
    const p1inputDiv = document.getElementById("input1");
    const p1input = document.getElementById("p1Name");
    const p1btn = document.getElementById("p1Btn");
    p1.addEventListener("mouseenter", () => { 
        p1inputDiv.style.display = "block";
        if(timesHovered === 0) {
            p1btn.addEventListener("click", (e) => {
                e.preventDefault();
                p1para.innerText = p1input.value;
            })
            timesHovered++;
        }
    });
    p1.addEventListener("mouseleave", () => {
        p1inputDiv.style.display = "none";
        timesHovered--;
    })

    //player 2 display elements
    const p2 = document.getElementById("p2Div");
    const p2para = document.getElementById("player2");
    const p2inputDiv = document.getElementById("input2");
    const p2input = document.getElementById("p2Name");
    const p2btn = document.getElementById("p2Btn");
    p2.addEventListener("mouseenter", () => { 
        p2inputDiv.style.display = "block";
        if(timesHovered === 0) {
            p2btn.addEventListener("click", (e) => {
                e.preventDefault();
                p2para.innerText = p2input.value;
            })
            timesHovered++;
        }
    });
    p2.addEventListener("mouseleave", () => {
        p2inputDiv.style.display = "none";
        timesHovered--;
    })

    return { main, p1, nameDiv, p1para }
})();