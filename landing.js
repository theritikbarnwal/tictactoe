document.getElementById('playerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const playerX = document.getElementById('playerX').value.trim();
    const playerO = document.getElementById('playerO').value.trim();

    if (playerX && playerO) {
      localStorage.setItem("playerX", playerX);
      localStorage.setItem("playerO", playerO);
      window.location.href = "index.html"; // or your actual game page
    } else {
      alert("Please enter names for both players.");
    }
  });


  document.getElementById('playerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const playerX = document.getElementById('playerX').value;
    const playerO = document.getElementById('playerO').value;
});
