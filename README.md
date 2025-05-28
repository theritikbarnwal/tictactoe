Tic Tac Toe - Web Technology Project 🎮
Overview 🌟
This is a Tic Tac Toe web application developed as a Web Technology Project by a team of three students. The game allows two players to compete by taking turns placing their symbols (X or O) on a 3x3 grid, with the goal of aligning three symbols horizontally, vertically, or diagonally. The project uses HTML, CSS (with Tailwind CSS), and JavaScript to create an interactive and visually appealing game with a landing page for entering player names. 🕹️
Features ✨

Player Name Input 📝: Players can enter their names on a landing page, which are saved using localStorage and displayed during the game.
Interactive Game Board 🟦: A 3x3 grid where players take turns placing X or O.
Win/Draw Detection 🏆: Automatically detects a winner or a draw based on standard Tic Tac Toe rules.
Game Controls 🎯: Includes "New Game" and "Reset" buttons to start or clear the game.
Responsive Design 📱: Built with Tailwind CSS for a modern, responsive UI that works on various devices.
Animations 🎨: Custom animations (funkyFade) and hover effects (glow) enhance the user experience.
Player Name Display 👥: A "View Players" button shows the saved player names.

Technologies Used 🛠️

HTML5 📄: Structure for the landing and game pages.
CSS3 🎨: Styling with Tailwind CSS (output.css) and custom animations (landingStyle.css).
JavaScript 💻: Game logic, form handling, and local storage for player names.
Tailwind CSS 🌈: Utility-first CSS framework for responsive and modern styling.

File Structure 📂
├── index.html          # Main game page with the Tic Tac Toe board 🟰
├── landing.html        # Landing page for entering player names 📋
├── script.js           # Game logic and event handling for the game page ⚙️
├── landing.js          # Form submission logic for the landing page 📥
├── output.css          # Compiled Tailwind CSS styles 🎨
├── landingStyle.css    # Custom animations and hover effects ✨
├── input.css           # Tailwind CSS input file for build process 🛠️

Setup Instructions 🚀

Clone the Repository 📥:
git clone <repository-url>
cd tic-tac-toe


Open the Application 🌐:

Open landing.html in a web browser to enter player names. 🖱️
Alternatively, open index.html directly if player names are already set in localStorage. 🎲


Optional: Build Tailwind CSS (if modifying styles) 🛠️:

Ensure Node.js is installed. 🔧
Install Tailwind CSS:npm install -D tailwindcss
npx tailwindcss init


Build output.css from input.css:npx tailwindcss -i input.css -o output.css


How to Play 🎲

Open landing.html and enter names for Player X and Player O. ✍️
Click "Start Game" to save names and redirect to the game board (index.html). 🚀
Take turns clicking the 3x3 grid to place X or O. 🟥
The game detects a win or draw and displays a message. 🥳
Use the "New Game" button to start a new game (if the current game is over) or "Reset" to clear the board. 🔄
Click "View Players" to see the saved player names. 👀

Team Members 👨‍💻

Ritik Barnwal (23DBCAD078) 🌟
Prashant Saud (23DBCAD071) 🌟
Prashant Raj (23DBCAD070) 🌟