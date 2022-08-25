const resizeBtn = document.querySelector(".resize");
const blackBtn = document.querySelector(".black");
const rainbowBtn = document.querySelector(".rainbow");
const resetBtn = document.querySelector(".reset");

let setGrid = (size) => {
  const grid = document.querySelector(".grid");
  if (size > 100 || size < 1) {
    window.alert("Number must be between 1 and 100!");
    return;
  }

  grid.innerHTML = "";
  grid.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr);`);
  for (let i = 0; i < size ** 2; i++) {
    let item = document.createElement("div");
    item.classList.add("item");
    grid.appendChild(item);
  }

  const items = document.querySelectorAll(".item");
  items.forEach((item) =>
    item.addEventListener("mouseover", (e) => {
      e.target.setAttribute("style", "background-color: #171717");
    })
  );
};

setGrid(4);

resizeBtn.addEventListener("click", () => {
  let size = prompt("Set grid size! (maximum 100)");
  setGrid(size);
});

blackBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  items.forEach((item) =>
    item.addEventListener("mouseover", (e) => {
      e.target.setAttribute("style", "background-color: #171717");
    })
  );
});

rainbowBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  items.forEach((item) =>
    item.addEventListener("mouseover", (e) => {
      const r = randomBetween(0, 255);
      const g = randomBetween(0, 255);
      const b = randomBetween(0, 255);
      e.target.setAttribute("style", `background-color: rgb(${r},${g},${b}`);
    })
  );
});

resetBtn.addEventListener('click', () => {
    const items = document.querySelectorAll(".item");
    items.forEach(item => item.setAttribute('style', 'background-color: aliceblue;'));
})