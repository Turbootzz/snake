let boardSize = 15;
let board = document.getElementById("board");
let keyboardInput = document.getElementById("keyboardInput");
let direction = 0

let position = {x:9, y:9};
let snake [];

//het board
function drawBoard() {
    for (let j = 0; j < boardSize; j++) {
        for (let i = 0; i < boardSize; i++) {
            board.innerHTML += "<div id='x" + i + "y" + j + "' class='cell'>" + i + "-" + j + "</div>";
        }
        board.innerHTML += "<br>";
    }
}




function drawSnake() {
    let snakeHeadPosition = "x" + position.x + "y" + position.y;
    document.getElementById(snakeHeadPosition).style.background = "red";
}

drawBoard(); //tekent het board
drawSnake(); //tekent de snake

// let halfBoardSize = Math.round(boardSize / 2) - 1;
// let snakeHeadPosition = "x" + halfBoardSize + "y" + halfBoardSize;
// console.log(snakeHeadPosition);
// let head = document.getElementById(snakeHeadPosition).style.background = "red";

// window.addEventListener("keydown", function(event)) {
//     keyboardInput.innerHTML = event.key;
//     if (event.key == "ArrowUp")
//     {
//         direction = "up";
//     }
//     if (event.key == "ArrowDown")
//     {
//         direction = "down";
//     }
//     if (event.key == "ArrowRight")
//     {
//         direction = "right";
//     }
//     if (event.key == "ArrowLeft")
//     {
//         direction = "left";
//     }
//     keyboardInput.innerHTML = direction;
// }