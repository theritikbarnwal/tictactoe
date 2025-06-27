
# 🎮 Tic Tac Toe – Web Technology Project

A fun and interactive **Tic Tac Toe** web application built as a Web Technology project by a team of three students. Two players can compete by taking turns to place their symbols (X or O) on a 3x3 grid. The first to align three symbols horizontally, vertically, or diagonally wins!

---

## 🌟 Features

- **📝 Player Name Input**  
  Landing page to enter and save player names using `localStorage`.

- **🟦 Interactive Game Board**  
  A responsive 3x3 grid for players to place X or O by clicking cells.

- **🏆 Win/Draw Detection**  
  Automatically detects when a player wins or if the game ends in a draw.

- **🎯 Game Controls**  
  - `New Game`: Starts a fresh game.
  - `Reset`: Clears the current board.

- **📱 Responsive Design**  
  Built using **Tailwind CSS** for compatibility across all screen sizes.

- **🎨 Animations**  
  Includes custom animations like `funkyFade` and glow effects on hover.

- **👥 Player Name Display**  
  A "View Players" button shows currently saved player names.

---

## 🛠️ Technologies Used

- **HTML5** – Structure for landing and game pages  
- **CSS3** – Styling with:
  - Tailwind CSS (`output.css`)
  - Custom animations (`landingStyle.css`)  
- **JavaScript** – Logic, game flow, and localStorage integration  
- **Tailwind CSS** – Utility-first framework for modern UI

---

## 📂 File Structure

```
tic-tac-toe/
├── index.html           # Main game page with the Tic Tac Toe board
├── landing.html         # Landing page for entering player names
├── script.js            # Game logic and event handling
├── landing.js           # Player name form handling
├── output.css           # Compiled Tailwind CSS
├── landingStyle.css     # Custom animations and effects
├── input.css            # Tailwind source file for building output.css
```

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd tic-tac-toe
```

### 2️⃣ Open the Application

- Open `landing.html` in a web browser to enter player names.
- Or open `index.html` directly if names are already saved in `localStorage`.

### 3️⃣ (Optional) Modify & Build Tailwind CSS

Ensure Node.js is installed, then:

```bash
npm install -D tailwindcss
npx tailwindcss init
npx tailwindcss -i input.css -o output.css
```

---

## 🎲 How to Play

1. Open `landing.html` and enter names for **Player X** and **Player O**.
2. Click **Start Game** to save names and launch the game board.
3. Players take turns to click grid cells to place X or O.
4. Game will announce a **win** or a **draw** automatically.
5. Use:
   - **New Game** to restart the match.
   - **Reset** to clear the board.
6. Click **View Players** to view saved names.

---

## 👨‍💻 Team Members College Group Project

- **Ritik Barnwal** (23DBCAD078) 🌟  
- **Prashant Saud** (23DBCAD071) 🌟  
- **Prashant Raj** (23DBCAD070) 🌟

---

Enjoy the game! 🎉