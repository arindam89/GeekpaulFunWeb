// Our JavaScript File

const game = document.getElementById("main");
const obstacle = document.getElementById("obstacle");
const hero = document.getElementById("hero");

// Listen for every iteration start with this event.
obstacle.addEventListener("animationiteration", () => {
  const left = Math.floor(Math.random() * 3) * 100;
  obstacle.style.left = left + "px";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    // Move left;
    const old_left = parseInt(window.getComputedStyle(hero).left);
    if (old_left > 0) {
      const new_left = old_left - 100;
      hero.style.left = new_left + "px";
    }
  }

  if (event.key === "ArrowRight") {
    // Move right;
    const old_left = parseInt(window.getComputedStyle(hero).left);
    if (old_left < 200) {
      const new_left = old_left + 100;
      hero.style.left = new_left + "px";
    }
  }
});
