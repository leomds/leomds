const ballSize = 100;
const ball = document.getElementById('ball');
const scoreDiv = document.getElementById('score');
let score = 0;

updateBallPosition();

const changeClickPositionDelay = 80; //in ms

ball.addEventListener('mouseenter', (event) => {
    setTimeout(() =>{
        updateBallPosition();
    }, changeClickPositionDelay);
    changeBallStyle();
})

ball.addEventListener('click', (event) => {
    changeBallStyle();
    addScore();
})

function addScore() {
    score++;
    scoreDiv.textContent = score
}

function changeBallStyle(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    ball.style.backgroundColor = '#'+ randomColor;
    
    var tam = ((Math.floor(Math.random() * 50)) * 10);
    var border = ((Math.floor(Math.random() * 5)) * 10);

    ball.style.width = tam+'px';
    ball.style.height = tam+'px';
    //ball.style.borderRadius = border +'%';
}

function updateBallPosition() {
    let ballX = getRandomX();
    let ballY = getRandomY();

    ball.style.position = 'absolute';
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

function getRandomX() {
    const max = window.innerWidth - ballSize;
    const min = ballSize;
    return Math.floor((Math.random() * (max - min)) + min);
}

function getRandomY() {
    const max = window.innerHeight - ballSize;
    const min = ballSize;

    return Math.floor((Math.random() * (max - min)) + min);
}

console.log(ball);