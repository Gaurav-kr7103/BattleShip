function dynamicHover (toggle) {

    const val = toggle ? 1 : 2;
    const selector = `.play-area.p${val}`;

    function getLenOfShip () {
        let txt = document.querySelector('.sidebar > h3').textContent;
        // Get the first number in the string (e.g., "Place Ship of Length 4")
        let match = txt.match(/\d+/);
        if (match) {
            return parseInt(match[0], 10);
        }
        return NaN;
    }

    function getAxis () {
        const axisRotation = document.querySelector(".rotation");
        return axisRotation.value;
    }

    function getArray (cell) {
        const len = getLenOfShip();
        if (Number.isNaN(len))
            alert("All ships Placed for player");
        const axis = getAxis();

        const x = Number(cell.dataset.x);
        const y = Number(cell.dataset.y);

        let arr = [];
        let color = "green";
        if (axis === 'x') {
            for (let j=y; j<y+len; j++) {
                console.log(j);
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

    function displayFutureValues (cellArray, color) {
        cellArray.forEach(({x,y}) => {
            const cell = document.querySelector(`${selector} [data-x="${x}"][data-y="${y}"]`);
            cell.style.outline = `2px solid ${color}`;
        })
    }

    const cells = document.querySelectorAll(`${selector} .cell`);
    //at each cell
    cells.forEach((cell) => {
        let backArr = [];
        cell.addEventListener("mouseover", ()=> {
            const {arr, color} = getArray(cell);
            backArr = arr;
            if (cell.dataset.status === 'unoccupied') {
                // cell.style.backgroundColor = "#A2D638";
                displayFutureValues(arr, color);
            }
        });
        cell.addEventListener("mouseout", ()=> {
            if (cell.dataset.status === 'unoccupied') {
                displayFutureValues(backArr, "white");
            }
        })
    })
}

export {dynamicHover};