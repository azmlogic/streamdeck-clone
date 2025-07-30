// Alle Buttons auswählen
const buttons = document.querySelectorAll(".deck-button");

// Für jeden Button eine Onclick Funktion hinzufügen
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.querySelector(".label")?.textContent;

    if (label === "GitHub") {
      window.open("https://github.com", "_blank");
    } 
    else if (label === "Dark") {
      document.body.style.backgroundColor = "#444"; // Wechselt Hintergrundfarbe
    } 
    else if (label === "Reset") {
      document.body.style.backgroundColor = "#1e1e1e"; // Ursprüngliche Hintergrundfarbe
    } 
    else if (label === "Sound") {
      const audio = new Audio(
        "https://www.soundjay.com/buttons/sounds/button-3.mp3"
      );
      audio.play();
    } 
    else if (label === "Clear") {
      console.clear();
      alert("Konsole geleert!");
    } 
    else if (label === "VS Code") {
      window.open("https://vscode.dev", "_blank");
    } 
    else if (label === "Terminal") {
      alert("Terminal öffnen:: Win + R > mt eingabe");
    } 
    else if (label === "Projekte") {
      alert("Hier könnten Projektverzeichnisse oder Links rein");
    } 
    else if (label === "Notizen") {
      window.open("https://keep.google.com", "_blank");
    } 
    else if (label === "Screenshot") {
      const overlay = document.getElementById("screenshot-overlay");
      overlay.classList.add("flash");
      setTimeout(() => {
        overlay.classList.remove("flash");
      }, 300); // Dauer des Flashes

    }
  });
});
