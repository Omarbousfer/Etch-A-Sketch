let container = document.getElementById("grid-container");

let grid = new Array(16);
for (let i = 0; i < 16; i++) {
    grid[i] = new Array(16);
};

for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
        grid[row][col] = document.createElement("div");
        grid[row][col].classList.add("grid-item");
        container.appendChild(grid[row][col]);
    };
};

document.getElementById("clear-button").addEventListener("click", clearGrid);

function clearGrid() {
  var gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(function (item) {
    item.style.backgroundColor = "white";
  });
}


var gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach(function (item) {
  item.addEventListener("mouseover", changeColor);
});

function changeColor(e) {
  e.target.style.backgroundColor = "black";
}
