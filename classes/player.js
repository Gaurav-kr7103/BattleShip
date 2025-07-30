import { GameBoard } from "./gameBoard"

class Player {
    constructor(name = "Computer") {
        this.name = name;
        this.board = new GameBoard();
    }
}

export {Player};