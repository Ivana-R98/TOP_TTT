// the Gameboard object
const Gameboard = (() => {
    const board = [];
    for(let i = 0; i < 9; i++) {
        board.push("");
    }

    const divs = document.querySelectorAll(".item");
    let move = 0;
    let id = 0;
Array.from(divs).forEach(div => {
        div.addEventListener("click", () => { 
            div.style.backgroundColor = "white";
            id = parseInt(div.id);
            
            if(move === 0 || move % 2 === 0) {
                div.innerText = player1.mark;
                let val = div.setAttribute("value","X");
                board[move] = div;
                console.log(div.id, board[move], div.getAttribute("value"), val, board[move].id);
            }
            else {
                div.innerText = player2.mark;
                div.setAttribute("value","O");
                let val = div.getAttribute("value");
                board[move] = div;
                console.log(div.id, board[move], div.getAttribute("value"), val, board); 
            } 
            console.log(div, parseInt(div.id), div.innerText)
            if (move < 9) {
                console.log("check winner", id);
                game.test()
                if(move === 8) {
                    console.log(game.winner);
                }
            }
            move++;
            
        })
    });





    return { board, divs, move, id };
})();


// player factory
const Player = (name, mark) => {
    return { name, mark };
}
const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

// game control
const game = (() => {
    const winningArr = [[0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
    const test = () => {
        if (Gameboard.move === 5) {
            console.log("bla bla works")
            return "kek";
        }
    }
    let winner = false;
    return { winner, winningArr, test }
})();

//display
const display = (() => {

})();




// console.log(player1.name, player2.mark);


/* 
    if(move === 0 && move % 2 === 0) {
        divs.innerText = "x";
        gameboard.push("x");
        divs.dataset.index = i;
        divs.style.backgroundColor = "white";
        click++;
        move++;
        console.log(divs.dataset.index, gameboard[i], click, "x");
    }
    else if(move % 2 != 0) {
        divs.innerText = "o";
        gameboard.push("o");
        divs.dataset.index = i;
        divs.style.backgroundColor = "white";
        click++;
        move++;
        console.log(divs.dataset.index, gameboard[i], click, "o"); 
    } 
*/
