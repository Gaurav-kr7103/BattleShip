# Battleship Game

A classic Battleship game implemented in JavaScript, utilizing OOP principles and DOM manipulation for interactive gameplay between two players.

## Overview

This project recreates the traditional Battleship game where two players take turns placing ships on an 8x8 grid and attack each other’s fleets until all ships of one player are destroyed.

## Features

- Object-oriented design with classes:
  - `Ship` class manages length, hits, and sunk status.
  - `GameBoard` class manages ship placement, attacks, and tracking sunk ships.
  - `Player` class holds player identity and manages their board.
- Interactive ship placement with rotation of axis (`x` or `y`).
- Dynamic hover effects highlighting potential ship placement areas.
- Turn-based attack system with visual feedback for hits, misses, and destroyed ships.
- Game flow control with async/await to await player actions sequentially.
- Responsive UI updates reflecting current game state and player actions.

## Technologies Used

- JavaScript (ES6 modules)
- HTML / CSS for UI layout and styling
- DOM API for dynamic interaction handling and event-driven updates

## Installation / Usage

1. Clone this repository to your local machine:

2. Open `index.html` directly in a modern web browser that supports ES6 modules.

3. For better module support, run a local HTTP server (such as with node http-server):


4. Navigate to the displayed local URL in your browser.

5. Play the game! Follow on-screen prompts to place your ships and launch attacks against your opponent.

## Game Instructions

### Ship Placement

- Players alternate turns placing ships by clicking on their grid.
- Use the **Rotate Axis** button to switch ship orientation (horizontal or vertical).
- When hovering over the grid, cells highlight to show potential ship placement areas.
- Invalid placements are rejected and visually indicated (red highlight).
- Place all ships before moving on to the attack phase.

### Attack Phase

- Players take turns clicking on the opponent’s grid to launch attacks.
- Hits are displayed by turning cells black, misses turn cyan.
- Once all ships of one player are sunk, the game ends.

## Project Structure


- `classes/` contains core game logic classes.
- `DOM/` contains DOM manipulation and event handling code.
- `index.js` initializes the game and controls the game loop.
- `styles.css` contains styling for the UI grid and elements.
- `index.html` provides the page markup.

## Future Improvements

- Implement AI opponent for single-player mode.
- Add animations and sound effects for enhanced user experience.
- Improve responsiveness for multiple device sizes.
- Include scoreboard, game statistics, or history tracking.
- Add drag-and-drop ship placement for intuitive UI.

