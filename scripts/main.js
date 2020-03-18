const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    var div = document.createElement('div');
    div.className = "cell";
    container.appendChild(div);
}

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseenter', (e) => {
        cell.style.backgroundColor = 'blue';
    });
});
