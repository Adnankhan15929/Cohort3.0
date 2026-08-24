// const main = document.querySelector("main");

// main.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// setInterval(() => {
//     console.log("hey");
// }, 1000);

// setTimeout(() => {
//     console.log("i am timeout");
// }, 10000);

// let random = Math.random()*10
// let r =Math.floor(random) //down
// // let r =Math.ceil(random) //topp
// console.log(r);

const main = document.querySelector("main");
const btn = document.querySelector("button");
const time = document.querySelector(".timer");
const score = document.querySelector(".score");
const gameover = document.querySelector(".gameover");

const box = document.createElement("div");
box.classList.add("box");

let interval;
let gameTimeout;
let resetTimeout;

let tim = 0;
let sc = 0;
let gameRunning = false;

const boxColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

const boxLocation = () => {
  box.style.backgroundColor = boxColor();

  let hi = main.clientHeight - box.offsetHeight;
  let wi = main.clientWidth - box.offsetWidth;

  const rY = Math.random() * hi;
  const rX = Math.random() * wi;

  box.style.top = `${rY}px`;
  box.style.left = `${rX}px`;
};

box.addEventListener("click", () => {
  if (!gameRunning) return;

  sc++;
  score.textContent = sc;

  // Move box immediately after clicking
  boxLocation();
});

btn.addEventListener("click", () => {
  // Clear old timers if game is restarted
  clearInterval(interval);
  clearTimeout(gameTimeout);
  clearTimeout(resetTimeout);

  main.append(box);
  // Reset game
  tim = 0;
  sc = 0;

  time.textContent = tim;
  score.textContent = sc;

  gameover.style.display = "none";
  gameRunning = true;

  // Show box immediately
  boxLocation();

  interval = setInterval(() => {
    tim++;
    time.textContent = tim;

    boxLocation();
  }, 1000);

  // End game after 10 seconds
  gameTimeout = setTimeout(() => {
    clearInterval(interval);

    gameRunning = false;
    gameover.style.display = "flex";

    // Hide box
    box.style.display = "none";

    // Reset after 3 seconds
    resetTimeout = setTimeout(() => {
      time.textContent = 0;
      score.textContent = 0;

      tim = 0;
      sc = 0;

      gameover.style.display = "none";
    }, 3000);
  }, 10000);
});
