let boardSize = 15;
let board = document.getElementById("board");
let keyboardInput = document.getElementById("keyboardInput");
let direction = 0
let foodIsEaten = true;
let snakePosition = { x: Math.floor((boardSize - 1) / 2), y: Math.floor((boardSize - 1) / 2) };
let foodPosition = {x:0,y:0};

//het board
function drawBoard() {
    for (let j = 0; j < boardSize; j++) {
        for (let i = 0; i < boardSize; i++) {
            board.innerHTML += "<div id='x" + i + "y" + j + "' class='cell'>" + i + "-" + j + "</div>";
        }
        board.innerHTML += "<br>";
    }
}

//clearboard


function clearBoard() {
    /*
    for (let j = 0; j < boardSize; j++) {
        for (let i = 0; i < boardSize; i++) {
            let snakeId = "x" + i + "y" + j;
            document.getElementById(snakeId).style.background = "gray";
        }
    }
*/

    //kan sneller met hieronder

    document.querySelectorAll('.cell').forEach(function (cell) {
        cell.className = "cell";
    });
}


//update de positie

function updatesnakePosition() {
    if (direction == "up") {
        snakePosition.y = snakePosition.y - 1;
    }
    if (direction == "down") {
        snakePosition.y = snakePosition.y + 1;
    }
    if (direction == "right") {
        snakePosition.x = snakePosition.x + 1;
    }
    if (direction == "left") {
        snakePosition.x = snakePosition.x - 1;
    }
}

//resetGame

function resetGame() {
    direction = 0;
    snakePosition = { x: Math.floor((boardSize - 1) / 2), y: Math.floor((boardSize - 1) / 2) };
}

//gameOver

function collisionCheck() {
    if (snakePosition.x < 0 || snakePosition.y < 0 || snakePosition.x > boardSize - 1 || snakePosition.y > boardSize - 1) { resetGame() }
}


function drawSnake() {
    let snakeHeadsnakePosition = "x" + snakePosition.x + "y" + snakePosition.y;
    document.getElementById(snakeHeadsnakePosition).className += " bodySnake";
}


 //teken het food
function drawFood() {
    if (foodIsEaten) {
        let xRandom = Math.floor(Math.random() * (boardSize-1));
        let yRandom = Math.floor(Math.random() * (boardSize-1));
        foodPosition.x = xRandom;
        foodPosition.y = yRandom;
        foodIsEaten = false;
    }
    let foodPositionID = "x" + foodPosition.x + "y" + foodPosition.y;
    document.getElementById(foodPositionID).className += " food";
}


//Game
function gameLoop()
{
    updatesnakePosition();
    collisionCheck();
    clearBoard();
    drawFood();
    drawSnake();
}

//game start

drawBoard(); //tekent het board
setInterval(gameLoop, 500);

//keyboard controls
window.addEventListener("keydown", function (event) {

    if (event.key == "ArrowUp") {
        direction = "up";
    }
    if (event.key == "ArrowDown") {
        direction = "down";
    }
    if (event.key == "ArrowRight") {
        direction = "right";
    }
    if (event.key == "ArrowLeft") {
        direction = "left";
    }

keyboardInput.innerHTML = "direction: " + direction;
}, true);