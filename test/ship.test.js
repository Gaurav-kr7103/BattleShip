import {Ship} from "../classes/ship";

test("ship has been hit", ()=> {
    let ship = new Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
})

test("ship not sunk", () => {
    let ship = new Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
})

test ("ship Sunk", () => {
    let ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
})