const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const gameArea = document.getElementById("gameContainer");

const playerW = player.offsetWidth; const playerH = player.offsetHeight;
const gameW = gameArea.offsetWidth; const gameH = gameArea.offsetHeight;

let playerX = 0; let playerY = 75;
let enemyX = Math.random() * ( (gameW - playerW)); let enemyY = Math.random() * ( (gameH - playerH));

let gameOver = false;
let keys = {};

function gameLoop(){

    // handlePlayerMovement();
    // moveEnemyTowardsPlayer();
    // updatePlayerPosition();
    // updateEnemyPosition();
    // checkCollision();
    if(!gameOver){
        requestAnimationFrame(gameLoop);
    }
    else{
        endGame();
    }

}

function resetGame(){
    playerX = 0;  playerY = 75;
    enemyX = Math.random() * ( (gameW - playerW));  enemyY = Math.random() *( (gameH - playerH));

    gameOver = false;
    keys = {};

    
    requestAnimationFrame(gameLoop);
}

function endGame(){
    alert("Idiot, you died, do better next time.\nOr just never play the game again.")
    resetGame();
}

requestAnimationFrame(gameLoop);