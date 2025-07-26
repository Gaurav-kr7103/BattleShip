import { GameBoard } from "../classes/gameBoard.js";
import { Ship } from "../classes/ship.js";

test("at location 0,0, length 1" , ()=> {
    const gmb = new GameBoard();
    const ship = new Ship(1);
    expect(gmb.placeShip(ship,0,0,'x')).toBe("ship placed");
})

test("at location 0,0 length 21" , ()=> {
    const gmb = new GameBoard();
    const ship = new Ship(200);
    expect(gmb.placeShip(ship,0,0,'x')).toBe("ship not placed");
})

test("at location 18,0, length 2" , ()=> {
    const gmb = new GameBoard();
    const ship = new Ship(2);
    expect(gmb.placeShip(ship,18,0,'y')).toBe("ship placed");
})

test("attack at 0,0 (1 length ship there)", () => {
    const gmb = new GameBoard();
    const ship = new Ship(1);
    gmb.placeShip(ship, 0, 0, 'x');
    expect(gmb.receiveAttack(0,0)).toBe('attack success');
})

test("attack at 0,0 (no ship there)", () => {
    const gmb = new GameBoard();
    const ship = new Ship(1);
    gmb.placeShip(ship, 1, 1, 'x');
    expect(gmb.receiveAttack(0,0)).toBe('missed shot');
})

test("attack at 0,0 (1 length ship there)", () => {
    const gmb = new GameBoard();
    const ship = new Ship(2);
    gmb.placeShip(ship, 0, 0, 'x');
    gmb.receiveAttack(0,0);
    expect(gmb.receiveAttack(0,0)).toBe('place already attacked');
})

test("are all sunk? (yes)", () => {
    const gmb = new GameBoard();
    const ship1 = new Ship(2);
    gmb.placeShip(ship1,0,0, 'x');
    gmb.receiveAttack(0,0);
    gmb.receiveAttack(0,1);

    const ship2 = new Ship (3);
    gmb.placeShip(ship2, 4,5, 'y');
    expect(gmb.allShipsSunk()).toBe("Not all ships destroyed");
});

test("are all sunk? (yes)", () => {
    const gmb = new GameBoard();
    const ship1 = new Ship(2);
    gmb.placeShip(ship1,0,0, 'x');
    gmb.receiveAttack(0,0);
    gmb.receiveAttack(0,1);

    expect(gmb.allShipsSunk()).toBe("All ships Destroyed");
});