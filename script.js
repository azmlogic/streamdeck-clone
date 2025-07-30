// Alle Buttons auswählen
const buttons = document.querySelectorAll(".deck-button");

// Für jeden Button eine Onclick Funktion hinzufügen
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.querySelector(".label")?.textContent;

    if (label === "GitHub") {
      window.open("https://github.com", "_blank");
    } else if (label === "Theme") {
      document.body.style.backgroundColor = "#762723";
    } else if (label === "Reset") {
      document.body.style.backgroundColor = "#1e1e1e"; // Ursprüngliche Hintergrundfarbe
    } else if (label === "Sound") {
      const audio = new Audio(
        "https://www.soundjay.com/buttons/sounds/button-3.mp3"
      );
      audio.play();
    } else if (label === "Clear") {
      console.clear();
      alert("Konsole geleert!");
    } else if (label === "VS Code") {
      window.open("https://vscode.dev", "_blank");
    } else if (label === "Terminal") {
      alert("Terminal öffnen:: Win + R > mt eingabe");
    } else if (label === "Projekte") {
      alert("Hier könnten Projektverzeichnisse oder Links rein");
    } else if (label === "Notizen") {
      window.open("https://keep.google.com", "_blank");
    } else if (label === "Screenshot") {
      const overlay = document.getElementById("screenshot-overlay");
      overlay.classList.add("flash");
      setTimeout(() => {
        overlay.classList.remove("flash");
      }, 300); // Dauer des Flashes

      // Ton abspielen
      const sound = document.getElementById("shutter-sound");
      sound.currentTime = 0;
      sound.play();
    } else if (label === "Lock") {
      const overlay = document.getElementById("screenshot-overlay");
      overlay.style.backgroundColor = "black";
      overlay.classList.add("flash");

      const message = document.getElementById("screenshot-message");
      message.textContent = "System Locked 🔒";
      message.classList.add("show");

      setTimeout(() => {
        overlay.classList.remove("flash");
        overlay.style.backgroundColor = "white";
        message.classList.remove("show");
        message.textContent = "Screenshot gespeichert ✅"; // Zurücksetzen
      }, 1500);
    } else if (label === "Dark" || label === "Light") {
      const isDark = document.body.classList.toggle("dark");

      // Update Icon & Text
      const icon = button.querySelector(".icon");
      const labelSpan = button.querySelector(".label");

      if (isDark) {
        icon.textContent = "🌙";
        labelSpan.textContent = "Light";
      } else {
        icon.textContent = "🌞";
        labelSpan.textContent = "Dark";
      }

      // Overlay Feedback
      const overlay = document.getElementById("screenshot-overlay");
      const message = document.getElementById("screenshot-message");

      overlay.style.backgroundColor = isDark ? "#121212" : "white";
      overlay.classList.add("flash");

      message.textContent = isDark
        ? "Dark Mode aktiviert 🌙"
        : "Light Mode aktiviert ☀️";
      message.classList.add("show");

      setTimeout(() => {
        overlay.classList.remove("flash");
        message.classList.remove("show");
      }, 1500);
    }
  });
});
