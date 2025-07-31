export function attackPlayerShip(playerState, playerTurn) {
    return new Promise ((resolve, reject) => {
        const val = playerTurn.isPlayer1Turn ? 2 : 1;
        const selector = `.play-area.p${val}`;

        function handleAttack (event) {
            const cell = event.currentTarget;
            if (cell.dataset.status === 'unoccupied') {
                    cell.style.backgroundColor = "#27F5F5";
                    cell.dataset.status = 'attacked';
                    playerTurn.isPlayer1Turn = !playerTurn.isPlayer1Turn;
                }   
            else if (cell.dataset.status === 'occupied'){
                cell.style.backgroundColor = "black";
                cell.dataset.status = 'destroyed';
                const row = Number(cell.dataset.x);
                const col = Number(cell.dataset.y);
                playerState.player.board.receiveAttack(row, col);
                const res = playerState.player.board.allShipsSunk();
                if (res === "All ships Destroyed"){
                    cleanup();
                    reject(new Error("game over"));
                    return;
                }
                // playerTurn.isPlayer1Turn = !playerTurn.isPlayer1Turn;
            } else {
                return;
            }
            cleanup();
            resolve();
        }

        const cells = document.querySelectorAll(`${selector} .cell`);
        cells.forEach((cell) => {
            cell.addEventListener("click", handleAttack);
        })

        function cleanup() {
            cells.forEach(cell => cell.removeEventListener("click", handleAttack));
        }
    })
}