import { GameBoard } from "../classes/gameBoard";
import {Ship} from "../classes/ship";

const axisRotation = document.querySelector(".rotation");
axisRotation.addEventListener("click", ()=> {
    let val = axisRotation.value;
    const prev_val = val;

    val = val === 'x'?'y' : 'x';
    axisRotation.value = val;
    axisRotation.textContent = `Rotate Axis(to ${prev_val.toUpperCase()})`;
});


function addingCells() {
    const boxParent = document.querySelectorAll(".play-area");
    boxParent.forEach((Box)=> {
        for (let i = 0; i < 64; i++) {
            const square = document.createElement("div");
            square.dataset.x = Math.floor(i / 8);
            square.dataset.y = i % 8;
            square.dataset.status = 'unoccupied';
            square.setAttribute("class", "cell");
            Box.appendChild(square);
        }
    }) 
    cellActions();
} 

function cellActions() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
            cell.addEventListener(('click'), ()=> {
            console.log("cell clicked");
            placeShipLoc(cell);
        });
    })
}

let gmb = new GameBoard();

const shipLength = [5,4,4,3,3,2,2,2];
let s = 0;

function updateShipDisplay () {
    
    const shipLenDisplay = document.querySelector('.sidebar > h3');
    let sizeDisplay = "";
    if (s === shipLength.length) {
        sizeDisplay = `Ship Selection Over`;
    } else {
        sizeDisplay = `Place Ship of Length ${shipLength[s]}`;
    }
    shipLenDisplay.textContent = sizeDisplay;
}

function placeShipLoc (cell) {
    if (s == shipLength.length) {
        updateShipDisplay();
        return;
    }
    let ship = new Ship (shipLength[s]);
    const row = Number(cell.dataset.x);
    const col = Number(cell.dataset.y);
    const axis = axisRotation.value;
    const res = gmb.placeShip(ship, row, col, axis);
    if (res === "ship placed") {
        cell.dataset.status = "occupied";
        UpdateUi(gmb, ship);
        s++;
    } else {
        cell.style.backgroundColor = "red";
        setTimeout(() => {
            if (cell.dataset.status === 'unoccupied') {
                cell.style.backgroundColor = "#ccc";
            } else {
                cell.style.backgroundColor = "blue";
                console.log("blue");
            }
        }, 1000);
    }
    updateShipDisplay();
}


function UpdateUi (gmb, ship) {
    for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
            if (gmb.matrix[i][j] !== null) {
                const cell = document.querySelector(`[data-x="${i}"][data-y="${j}"]`);
                cell.style.backgroundColor = "blue";
                cell.style.outline = "2px solid white";
                cell.dataset.status = "occupied";
            }
        }
    }
}



export {addingCells};
