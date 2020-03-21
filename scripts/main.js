const containerHeight = 650; // px
const containerWidth = containerHeight;
let gridSize = 4; // number of rows
let cells;
const container = document.querySelector('#container');
container.style.width = containerWidth + "px";
container.style.height = containerHeight + "px";

createGrid(gridSize);

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', function() {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
    gridSize = Number(prompt("Enter number of rows."));
    cells.forEach((cell) => {
        container.removeChild(cell);
    })
    createGrid(gridSize);
});

function createGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    let numCells = Math.pow(gridSize, 2);
    for (let i = 0; i < numCells; i++) {
        var div = document.createElement('div');
        div.className = "cell";
        container.appendChild(div);
        div.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'blue';
        });
    }

    cells = document.querySelectorAll('.cell');
}