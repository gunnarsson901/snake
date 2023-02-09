const canvas = document.getElementById('cvs');
const ctx = canvas.getContext("2d");
let snake = [];
let food = null;
let score = 0;
canvas.style.border = '1px solid black';
// create snake
for (let i = 0; i < 5; i++) {
    snake.push({x: i, y: 0});
}

// draw snake 
function drawSnake() {
    ctx.fillStyle = "green";
    snake.forEach(segment => {
        ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
    });
}

// move the snake 
function moveSnake() {
    // Add new head to segment in direction of movement
    const head = {x: snake[0].x + xSpeed, y: snake[0].y + ySpeed};
    snake.unshift(head);
    //remove the tail segment
    snake.pop();
}

// create food
function generateFood() {
    food = {x: Math.floor(Math.random() * canvas.width / 10),
    y: Math.floor(Math.random() * canvas.height / 10)};
}

function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * 10, food.y * 10, 10, 10);
}

function checkColision() {
    //If head collides with wall
    if(snake[0].x * 10 >= canvas.width || snake[0].x < 0 || snake[0].y * 10 >= canvas.height || snake[0].y < 0){
        endGame();
    }

    //If head collides with the body
    for(let i = 1; i < snake.length; i++) {
        if(snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            endGame;
        }
    }
}

function endGame() {
    clearInterval(gameLoop);
}