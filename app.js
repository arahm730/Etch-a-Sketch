let container = document.querySelector('#container');

let slider = document.getElementById("scroller");
let length = slider.value;

let output = document.getElementById("length");
output.innerHTML = "Length: " + length;

slider.oninput = function() {
    output.innerHTML = "Length: " + this.value;
    length = this.value;
};

slider.addEventListener("mouseup", () => {
    reset();
});

makeRows(length);

let squares = document.getElementsByClassName('square');
for (let i =0; i < squares.length; i++){
    squares[i].addEventListener('mouseover', () => {
        squares[i].style.backgroundColor = "black";
    })
};

let colorBlack = document.getElementById('black');
colorBlack.addEventListener('click', () => {
    for (let i =0; i < squares.length; i++){
        squares[i].addEventListener('mouseover', function() {
            squares[i].style.backgroundColor = "black";
        })
    };
});

let colorWhite = document.getElementById('white');
colorWhite.addEventListener('click', () => {
    for (let i =0; i < squares.length; i++){
        squares[i].addEventListener('mouseover', function() {
            squares[i].style.backgroundColor = "white";
        })
    };
});

let colorRandom = document.getElementById('randomColor');
colorRandom.addEventListener('click', () => {
    for (let i =0; i < squares.length; i++){
        squares[i].addEventListener('mouseover', function() {
            squares[i].style.backgroundColor = randomColor();
        })
    };
});

let colorPicker = document.getElementById('pickColor');
colorPicker.addEventListener('input', (e) => {
    for (let i =0; i < squares.length; i++){
        squares[i].addEventListener('mouseover', function() {
            squares[i].style.backgroundColor = e.target.value;
        })
    };
});

let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    reset();
});

function reset() {
    container.innerHTML = "";
    makeRows(length);
}

function makeRows(length) {
    for (let i = 0; i < length; i++)
    {
        let row = document.createElement('div');
        row.classList.add('row')
        for (let j = 0; j < length; j++)
        {
            let cell = document.createElement('div');
            cell.classList.add('square');
            let cellHeight = (500-2*length) / length
            cell.style.width = cellHeight+"px";
            cell.style.height = cellHeight+"px";
            cell.style.display = "inline-block"
            row.appendChild(cell);   
        }
    container.appendChild(row);
    };
}

function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
