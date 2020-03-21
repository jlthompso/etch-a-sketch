const containerHeight = 650; // px
const containerWidth = containerHeight;
let gridSize = 4; // number of rows
let cells;
let bgShade = 220;
let shadeChange = 0.2;
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
        div.style.setProperty("--entries", 1);
        container.appendChild(div);
        div.addEventListener('mouseenter', function() {
            let numEntries = this.style.getPropertyValue("--entries");
            let newShade = numEntries * bgShade;
            this.style.setProperty("--entries", numEntries - shadeChange);
            this.style.backgroundColor = `rgb(${newShade} ${newShade} ${newShade})`;
        });
    }

    cells = document.querySelectorAll('.cell');
}