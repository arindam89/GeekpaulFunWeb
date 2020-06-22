// Our JavaScript File

const game = document.getElementById("main");
const obstacle = document.getElementById("obstacle");
const hero = document.getElementById("hero");

// Listen for every iteration start with this event.
obstacle.addEventListener("animationiteration", () => {
  const left = Math.floor(Math.random() * 3) * 100;
  obstacle.style.left = left + "px";
});

const moveLeft = () => {
  const old_left = parseInt(window.getComputedStyle(hero).left);
  if (old_left > 0) {
    const new_left = old_left - 100;
    hero.style.left = new_left + "px";
  }
};

const moveRight = () => {
  const old_left = parseInt(window.getComputedStyle(hero).left);
  if (old_left < 200) {
    const new_left = old_left + 100;
    hero.style.left = new_left + "px";
  }
};

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    // Move left;
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    // Move right;
    moveRight();
  }
});

// Making things touch friendly
const left_area = document.getElementById("left");
const right_area = document.getElementById("right");

left_area.addEventListener("touchstart", moveLeft);
right_area.addEventListener("touchstart", moveRight);

// Game condition checker, runs every 10ms

setInterval(() => {
  const obstacle_left = parseInt(window.getComputedStyle(obstacle).left);
  const obstacle_top = parseInt(window.getComputedStyle(obstacle).top);
  const hero_left = parseInt(window.getComputedStyle(hero).left);

  if (obstacle_left == hero_left && obstacle_top > 400 && obstacle_top < 600) {
    obstacle.style.transition = "none";
    obstacle.remove();
    alert("Collision");
  }
}, 10);
