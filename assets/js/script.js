const canvas = document.getElementById('cvs');
const ctx = canvas.getContext("2d");
let snake = [];
let food = null;
let score = 0;

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