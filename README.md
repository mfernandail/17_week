# 🎮 Mini Games Collection
A collection of simple and fun mini games built with **HTML, CSS, and JavaScript**.  

---

## ✊ Rock, Paper, Scissors
Classic game where you play against the computer.

### 📌 Features
- User can select Rock, Paper, or Scissors.
- CPU randomly generates its move.
- Scoreboard to keep track of wins and losses.
- Reset button to restart the game.

### 🧠 Lessons Learned
- Handling **DOM events** with `addEventListener`.
- Using **dataset attributes** for cleaner event delegation.
- Updating the UI dynamically with `.textContent`.
- Practicing **game logic** with conditionals and arrays.

---

## 🔢 Guess the Number
Try to guess the secret number between 1 and 100.

### 📌 Features
- Random number is generated at the start of the game.
- User gets feedback: *Too high*, *Too low*, or *You win!*.
- Attempts counter shows how many tries were made.
- Reset button to restart the game with a new random number.
- Input also works with the **Enter key** for convenience.

### 🧠 Lessons Learned
- Input validation using `isNaN` and value ranges.
- Using `Math.random()` and `Math.floor()` for random numbers.
- Structuring the game with small reusable functions.
- Improving UX with focus and input clearing.

---
## 🎲 Dice Game
A two-player turn-based dice game inspired by Pig Game.  
Players roll the dice to accumulate points, but if they roll a **1**, they lose the round points!  
They can **Hold** to secure points before switching turns. First to reach 100 wins.

### 📌 Features
- Two-player turn system
- Roll button to throw the dice
- Hold button to secure accumulated points
- Reset option to restart the game
- Keeps track of total wins (rounds)

### 🧠 Lessons Learned
- Turn-based game logic
- Using functions to switch players
- Managing game state (current turn, total points, round points)
- Updating multiple DOM elements dynamically
- Implementing win **conditions**