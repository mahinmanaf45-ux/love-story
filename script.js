const playBtn = document.getElementById("playBtn");
const seed = document.getElementById("seed");
const ground = document.getElementById("ground");
const tree = document.getElementById("tree");
const leavesDiv = document.getElementById("leaves");
const pigeon = document.getElementById("pigeon");
const letter = document.getElementById("letter");
const gameBtn = document.getElementById("gameBtn");

playBtn.onclick = () => {
  playBtn.style.display = "none";

  // Seed goes down
  seed.style.transition = "1.5s";
  seed.style.top = "75%";

  setTimeout(() => {
    ground.style.display = "block";
    growTree();
  }, 1500);
};

function growTree() {
  let height = 0;
  const grow = setInterval(() => {
    height += 2;
    tree.style.height = height + "px";

    if (height >= 200) {
      clearInterval(grow);
      showLeaves();
    }
  }, 16); // ~60fps
}

function showLeaves() {
  const messages = [
    "I love you ❤️",
    "Forever 🌱",
    "You are my world 🌍",
    "My heart 💖",
    "Always us 🌸"
  ];

  messages.forEach((text, i) => {
    setTimeout(() => {
      const leaf = document.createElement("div");
      leaf.className = "leaf";
      leaf.innerText = text;
      leaf.style.left = 40 + Math.random() * 20 + "%";
      leaf.style.top = 20 + Math.random() * 20 + "%";
      leavesDiv.appendChild(leaf);

      if (i === messages.length - 1) {
        setTimeout(showPigeon, 1500);
      }
    }, i * 800);
  });
}

function showPigeon() {
  pigeon.style.display = "block";
  setTimeout(() => {
    letter.style.display = "block";
  }, 4000);
}

gameBtn.onclick = () => {
  alert("Game starts here 🎮 (next step)");
};
