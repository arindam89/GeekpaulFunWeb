const game = document.getElementById("main");
const hero = document.getElementById("hero");
const tree = document.getElementById("tree");

function handleClick() {
  if (hero.classList.contains("jumping")) {
    hero.classList.remove("jumping");
  }
  hero.classList.add("jumping");
  setTimeout(() => {
    hero.classList.remove("jumping");
  }, 400);
}

game.addEventListener("click", handleClick);

document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    handleClick();
  }
});

setInterval(() => {
  const heroY = parseInt(window.getComputedStyle(hero).top);
  const treeX = parseInt(window.getComputedStyle(tree).left);

  // Game Over Condition
  if (treeX < 30 && treeX > 10 && heroY > 160) {
    tree.style.transition = "none";
    alert("Game over");
    tree.remove();
  }
}, 10);
