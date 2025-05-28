document.getElementById('playerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const playerX = document.getElementById('playerX').value.trim();
    const playerO = document.getElementById('playerO').value.trim();

    if (playerX && playerO) {
      sessionStorage.setItem("playerX", playerX); // Use sessionStorage
      sessionStorage.setItem("playerO", playerO); // Use sessionStorage
      window.location.href = "/game"; // Redirect to game page
    } else {
      alert("Please enter names for both players.");
    }
});

// Remove the duplicate event listener
// The second listener is unnecessary and can be deleted