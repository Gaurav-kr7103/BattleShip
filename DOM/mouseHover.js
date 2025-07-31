function dynamicHover (selector, playerState) {
    const cells = document.querySelectorAll(`${selector} .cell`);
    //at each cell
    cells.forEach((cell) => {
        let backArr = [];
        cell.addEventListener("mouseover", ()=> {
            const {arr, color} = getArray(cell, playerState, selector);
        //if the functioning is done
            if (arr.length === 0)
                return;
            backArr = arr;
            if (cell.dataset.status === 'unoccupied') {
                // cell.style.backgroundColor = "#A2D638";
                displayFutureValues(arr, color, selector);
            }
        });
        cell.addEventListener("mouseout", ()=> {
            if (cell.dataset.status === 'unoccupied') {
                displayFutureValues(backArr, "white", selector);
            }
        })
    })

    
}

function getArray (cell, playerState, selector) {
    
    let arr = [];
    let color = "green";

    const len = getLenOfShip(playerState);
    if (Number.isNaN(len)) {
        // alert("All ships Placed for player");
        return {arr, color};
    }
    const axis = getAxis();
    const x = Number(cell.dataset.x);
    const y = Number(cell.dataset.y);
    if (axis === 'x') {
        for (let j=y; j<y+len; j++) {
            if (j >= 8) {
                color = "red";
                break;
            }
            const cell = document.querySelector(`${selector} [data-x="${x}"][data-y="${j}"]`);
            if (!cell)
                alert("Cell not found for prediction");
            if (cell.dataset.status === 'occupied') {
                color = "red";
            }
            arr.push({x,y:j});
        }
    } else {
        for (let i=x; i<x+len; i++) {
            if (i >= 8) {
                color = "red";
                break;
            }
            const cell = document.querySelector(`${selector} [data-x="${i}"][data-y="${y}"]`);
            if (!cell)
                alert("Cell not found for prediction");
            if (cell.dataset.status === 'occupied') {
                color = "red";
            }
            arr.push({x:i,y});
        }
    }
    return {arr, color};
}

function getLenOfShip (playerState) {
    return playerState.s === playerState.shipLength.length ? NaN : playerState.shipLength[playerState.s];
}

function getAxis () {
    const axisRotation = document.querySelector(".rotation");
    return axisRotation.value;
}


function displayFutureValues (cellArray, color, selector) {
    cellArray.forEach(({x,y}) => {
        const cell = document.querySelector(`${selector} [data-x="${x}"][data-y="${y}"]`);
        cell.style.outline = `2px solid ${color}`;
    })
}

export {dynamicHover};