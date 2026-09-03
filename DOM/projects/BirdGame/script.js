let game = document.querySelector(".game");
let bird = document.querySelector(".birdImg");

let birdTop = 200;

setInterval(() => {
  if (gameFlag) return;
  birdTop += 2;
  bird.style.top = birdTop + "px";
  if (birdTop < 0 || birdTop > game.clientHeight) {
    gameOver();
  }
}, 20);

document.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    birdTop -= 60;
  }
});

function createPipe() {
  if (gameFlag) return;
  let topPipe = document.createElement("div");
  let btmPipe = document.createElement("div");

  topPipe.classList.add("pipe");
  btmPipe.classList.add("pipe");

  topPipe.style.top = "0px";
  btmPipe.style.bottom = "0px";

  let gap = 100;
  let gameH = game.clientHeight;
//   console.log(gameH);
  

  let maxHeight = gameH - gap - 70;
  let TPH = Math.random() * maxHeight + 50;
  let BPH = maxHeight - TPH - gap;

  topPipe.style.height = TPH + "px";
  btmPipe.style.height = BPH + "px";
  game.append(topPipe, btmPipe);

  let leftMove = game.clientWidth;
//   console.log(leftMove);
  
  topPipe.style.left = leftMove + "px";
  btmPipe.style.left = leftMove + "px";
  let move = setInterval(() => {
    leftMove -= 2;
    topPipe.style.left = leftMove + "px";
    btmPipe.style.left = leftMove + "px";

    let birdRect = bird.getBoundingClientRect();
    let TopRect = topPipe.getBoundingClientRect();
    let BtmRect = btmPipe.getBoundingClientRect();
    // console.log(birdRect);
    
    if (
      birdRect.right > TopRect.left &&
      birdRect.left < TopRect.right &&
      (birdRect.top < TopRect.bottom || birdRect.bottom > BtmRect.top)
    ) {
      gameOver();
      clearInterval(move);
    }
    if (leftMove < -40) {
      topPipe.remove();
      btmPipe.remove();
      clearInterval(move);
    }
  }, 20);
}
setInterval(createPipe, 2000);

let gameFlag = false;
function gameOver() {
  if (gameFlag) return;
  gameFlag = true;
  alert("Game is over!!!");
  location.reload();
}
