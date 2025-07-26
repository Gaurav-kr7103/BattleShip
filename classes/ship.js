class Ship {
    constructor (length = 1, hit = 0, sunk = false) {
        this.length = length;
        this.hits = 0;
        this.sunk = sunk;
    }
    hit () {
        if (this.isSunk()) {
            console.log("Ship already Destroyed");
            return;
        }
        this.hits += 1;
    }
    isSunk () {
        if (this.length === this.hits) {
            this.sunk = true;
        }
        return this.sunk;
    }
}

export {Ship};