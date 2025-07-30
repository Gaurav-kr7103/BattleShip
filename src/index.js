import "./styles.css";
import { addingCells } from "../DOM/placeShipDOM";
import { dynamicHover } from "../DOM/mouseHover";
import { Player } from "../classes/player";

let toggle = true;
const player1 = new Player(); 
addingCells(toggle, player1.board);
dynamicHover(toggle);

toggle = !toggle;
const player2 = new Player();
addingCells(toggle, player2.board);
dynamicHover(toggle);
