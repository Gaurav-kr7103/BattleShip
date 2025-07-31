import {Ship} from "../classes/ship";
import { dynamicHover } from "../DOM/mouseHover";

const axisRotation = document.querySelector(".rotation");
axisRotation.addEventListener("click", ()=> {
    let val = axisRotation.value;
    const prev_val = val;

    val = val === 'x'?'y' : 'x';
    axisRotation.value = val;
    axisRotation.textContent = `Rotate Axis to ${prev_val.toUpperCase()}`;
});


function addingCells(selector, playerState) {
    
    const boxParent = document.querySelector(selector);
    for (let i = 0; i < 64; i++) {
        const cell = document.createElement("div");
        cell.dataset.x = Math.floor(i / 8);
        cell.dataset.y = i % 8;
        cell.dataset.status = 'unoccupied';
        cell.setAttribute("class", "cell");
        boxParent.appendChild(cell);
    }
    //adding click listeners for logic
    cellActions(selector, playerState);
    //adding hovering effects
    dynamicHover(selector, playerState);
} 

function cellActions(selector, playerState) {
    const cells = document.querySelectorAll(`${selector} .cell`);
    cells.forEach((cell) => {
            cell.addEventListener(('click'), ()=> {
            console.log("cell clicked");
            placeShipLoc(cell, playerState, selector);
        });
    })
}


function placeShipLoc (cell, playerState, selector) {
    const {player, shipLength} = playerState;
    const gmb = player.board;

    if (playerState.s === shipLength.length) {
        updateShipDisplay(playerState.s, shipLength);
        return;
    }

    let ship = new Ship (shipLength[playerState.s]);
    const row = Number(cell.dataset.x);
    const col = Number(cell.dataset.y);
    const axis = axisRotation.value;
    const res = gmb.placeShip(ship, row, col, axis);
    if (res === "ship placed") {
        UpdateUi(gmb, selector);
        playerState.s++;
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
    updateShipDisplay(playerState.s, shipLength);
}

function updateShipDisplay (s, shipLength) {
    
    const shipLenDisplay = document.querySelector('.sidebar > h3');
    let sizeDisplay = "";
    if (s === shipLength.length) {
        sizeDisplay = `Ship Selection Over`;
    } else {
        sizeDisplay = `Place Ship of Length ${shipLength[s]}`;
    }
    shipLenDisplay.textContent = sizeDisplay;
}

function UpdateUi (gmb, selector) {
    for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
            if (gmb.matrix[i][j] !== null) {
                const cell = document.querySelector(`${selector} [data-x="${i}"][data-y="${j}"]`);
                cell.style.backgroundColor = "blue";
                cell.style.outline = "2px solid white";
                cell.dataset.status = "occupied";
            }
        }
    }
}



export {addingCells};
