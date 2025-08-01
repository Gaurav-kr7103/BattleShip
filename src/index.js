import "./styles.css";
import { addingCells } from "../DOM/placeShipDOM";
import { Player } from "../classes/player";
import { clearPlayArea } from "../DOM/clearBoard";
import { attackPlayerShip } from "../DOM/attackShip";

function createPlayerState () {
    return {
        player : new Player(),
        shipLength :  [5,4,4,3,3,2,2,2],
        s : 0
    }
}

function getSelector (toggle) {
    const val = toggle ? 1 : 2;
    const selector = `.play-area.p${val}`;
    return selector;
}

const playerState1 = createPlayerState();
const playerState2 = createPlayerState();
let toggle = true;

const playerTurn = {
    isPlayer1Turn : true,
}

startGame();

async function startGame () {
    console.log("player 1 starts placing ship");
    await waitTillPlacementShip (toggle, playerState1);
    console.log("Player 1 ship placement done");

    toggle = !toggle;//false
    console.log("player 2 starts placing ship")
    await waitTillPlacementShip (toggle, playerState2);
    console.log("Player 2 ship placement done");

    while (true) {
        // let attacker = playerTurn.isPlayer1Turn?playerState1 : playerState2;
        let defender = playerTurn.isPlayer1Turn?playerState2 : playerState1;
        try {
            await attackPlayerShip (defender, playerTurn);
        } catch (error) {
            alert(error.message);
            break;
        }
    }
    
}

function waitTillPlacementShip (toggle, playerState) {
    return new Promise ((resolve) => {
        addingCells(getSelector(toggle), playerState);
        document.addEventListener("click", function callback() {
            if (playerState.s === playerState.shipLength.length) {
                document.removeEventListener("click", callback);
                clearPlayArea(getSelector(toggle));
                resolve();
            }
        });
    })
}
