class GameBoard {
    constructor () {
        this.row = 8;
        this.col = 8;
        this.matrix = Array.from(
            { length: this.row }, () => Array(this.col).fill(null));

        this.ships= [];
    }

    #placeValue (ship, len, i, j, isX_axis) {
        //base cases
        if (len === 0)
            return true;
        if (i >= this.row || j >= this.col)
            return false;
        if (this.matrix[i][j] !== null)
            return false;
        //recursive cases

        this.matrix[i][j] = ship;
        let isValid = true;

        if (isX_axis) {
            isValid = this.#placeValue (ship, len-1, i, j+1, true);
        } else {
            isValid = this.#placeValue (ship, len-1, i+1, j, false);
        }

        if (!isValid)
            this.matrix[i][j] = null;
        return isValid;
    }

    placeShip(ship, x, y, axis) {
        let len = ship.length;

        let res = true;
        if (axis === 'x') {
            res = this.#placeValue(ship, len, x, y, true);
        } else {
            res = this.#placeValue(ship, len, x, y, false);
        }

        if (res) {
            this.ships.push(ship);
            return "ship placed";
        } else {
            return "ship not placed";
        } 
    }

    receiveAttack(x, y) {
        if (this.matrix[x][y] === null){
            return "missed shot";
        } else if (this.matrix[x][y] === 'hit') {
            return "place already attacked";
        } else {
            let ship = this.matrix[x][y];
            ship.hit();
            this.matrix[x][y] = 'hit';
            return 'attack success';
        }
    }

    allShipsSunk() {
        const allSunk = this.ships.reduce((ans,curr) => ans && curr.isSunk(), true);
        return allSunk? "All ships Destroyed" : "Not all ships destroyed"; 
    }
}
export {GameBoard};