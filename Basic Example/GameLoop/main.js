const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const gameArea = document.getElementById("gameContainer");

const playerW = player.offsetWidth; const playerH = player.offsetHeight;
const playerSpeed = 8;
const gameW = gameArea.offsetWidth; const gameH = gameArea.offsetHeight;

let playerX = 0; let playerY = 75;
let enemyX = Math.random() * ( (gameW - playerW)); let enemyY = Math.random() * ( (gameH - playerH));

const enemySpeed = 5;

let gameOver = false;
let keys = {};

function gameLoop(){

    handlePlayerMovement();
    moveEnemyTowardsPlayer();
    updatePlayerPosition();
    updateEnemyPosition();
    checkCollision();
    if(!gameOver){
        requestAnimationFrame(gameLoop);
    }
    else{
        endGame();
    }

}

document.addEventListener("keydown", event => {
    keys[event.key] = true;
})
document.addEventListener("keyup", event => {
    keys[event.key] = false;
})

function handlePlayerMovement(){
    if(keys.ArrowLeft && playerX > 0){
        playerX -= playerSpeed;
    }
    if(keys.ArrowUp && playerY > 0){
        playerY -= playerSpeed;
    }
    if(keys.ArrowRight && playerX < gameW-playerW){
        playerX += playerSpeed;
    }
    if(keys.ArrowDown && playerY < gameH-playerH){
        playerY += playerSpeed;
    }
}
function moveEnemyTowardsPlayer(){
    const dxs = getDXDY(playerX, playerY, enemyX, enemyY);
    const distance = getDistance(playerX, playerY, enemyX, enemyY);
    if(distance>0){
        enemyX+=dxs[0]/distance * enemySpeed;
        enemyY+=dxs[1]/distance * enemySpeed;
    }
}
function updatePlayerPosition(){
    player.style.left = `${playerX}px`;
    player.style.top = `${playerY}px`;
}
function updateEnemyPosition(){
    enemy.style.left = `${enemyX}px`;
    enemy.style.top = `${enemyY}px`;
}
function checkCollision(){
    const collisionDistance = playerW/2 + enemy.offsetWidth/2; 
    if(getDistance(playerX, playerY, enemyX, enemyY) < collisionDistance){
        player.style.opacity = 0;
        gameOver = true;
    }
}

function getDistance(x1, y1, x2, y2){
    const dx = x1-x2; const dy = y1-y2;
    return Math.sqrt(dx*dx+dy*dy);
}
function getDXDY(x1, y1, x2, y2){
    const dx = x1-x2; const dy = y1-y2;
    return [dx, dy];
}

function resetGame(){
    player.style.opacity = 100;
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