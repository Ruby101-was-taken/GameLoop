const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const playerW = 50; const playerH = 50;
let playerX = 0; let playerY = canvas.height/2 - playerH/2;
const playerSpeed = 3;


const enemyW = 50; const enemyH = 50;
let enemyX = canvas.width - enemyW; let enemyY = canvas.height/2 - enemyH/2;
const enemySpeed = 1;

function gameLoop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(playerX, playerY, playerW, playerH);
    ctx.fillStyle = "red";
    ctx.fillRect(enemyX, enemyY, enemyW, enemyH);

    const dx = playerX - enemyX;
    const dy = playerY - enemyY;
    const distance = Math.sqrt(dx*dx + dy*dy)

    if(distance != 0){
        enemyX += dx/distance * enemySpeed;
        enemyY += dy/distance * enemySpeed;
    }

    

    if(keys.ArrowLeft && playerX > 0){
        playerX-=playerSpeed;
    }
    if(keys.ArrowRight && playerX < canvas.width-playerW){
        playerX+=playerSpeed;
    }
    if(keys.ArrowDown && playerY < canvas.height-playerH){
        playerY+=playerSpeed;
    }
    if(keys.ArrowUp&& playerY > 0){
        playerY-=playerSpeed;
    }
    requestAnimationFrame(gameLoop);
}

let keys = {};

document.addEventListener("keydown", event => {
    keys[event.key] = true;
})
document.addEventListener("keyup", event => {
    keys[event.key] = false;
})

requestAnimationFrame(gameLoop);