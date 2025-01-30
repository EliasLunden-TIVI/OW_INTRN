document.getElementById("startgame").addEventListener("click", function() {
    document.getElementById("Main").style.display = "none"; // Hide title screen
    document.getElementById("Visual").classList.remove("hidden"); // Show game content
    document.getElementById("Choices").classList.remove("hidden"); // Show game content
});