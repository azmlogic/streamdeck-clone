// Alle Buttons auswählen
const buttons = document.querySelectorAll(".deck-button");

// Für jeden Button eine Onclick Funktion hinzufügen
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.querySelector(".label")?.textContent;
      // Button #1
    if (label === "GitHub") {
      window.open("https://github.com", "_blank");

      // Button #2
    } else if (label === "Refresh") {
      location.reload();

      // Button #3
    } else if (label === "AI Chat") {
      document.getElementById("chat-overlay").classList.remove("hidden");
      
      // Button #4
    } else if (label === "Sound") {
      const audio = new Audio(
        "https://www.soundjay.com/buttons/sounds/button-3.mp3"
      );
      audio.play();

      // Button #5
    } else if (label === "Clear") {
      console.clear();
      alert("Konsole geleert!");

      // Button #6
    } else if (label === "VS Code") {
      window.open("https://vscode.dev", "_blank");

      // Button #7
    } else if (label === "Terminal") {
      alert("Terminal öffnen: Win + R > mt eingabe");

      // Button #8
    } else if (label === "Projekte") {
      alert("Hier könnten Projektverzeichnisse oder Links rein");

      // Button #9
    } else if (label === "Notizen") {
      window.open("https://keep.google.com", "_blank");

      // Button #10
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
    } 
    
      // Button # 11
    else if (label === "Lock") {
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
    } 
    
      // Button #12
    else if (label === "Dark" || label === "Light") {
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


      // Button #13
    else if (label === "YouTube") {
        window.open("https://youtube.com", "_blank");
        const audio = document.getElementById("youtube-sound");
        audio.currentTime = 0;
        audio.play();

        const overlay = document.getElementById("screenshot-overlay");
        const message = document.getElementById("screenshot-message");

        overlay.style.backgroundColor = "#000";
        overlay.classList.add("flash");

        message.textContent = "YouTube geöffnet 📺";
        message.classList.add("show");

        setTimeout(() => {
          overlay.classList.remove("flash");
          overlay.style.backgroundColor = "#fff";
          message.classList.remove("show");
        }, 1500);
    }
      
        // Button #14
      else if (label === "Rechner") {
        // Öffnet einen Online Rechner
        window.open("https://www.online-calculator.com/full-screen-calculator/", "_blank");
      }
  });
});

// Chat senden
document.getElementById("chat-send").addEventListener("click", () => {
  const input = document.getElementById("chat-input").value.trim();
  const responseBox = document.getElementById("chat-response");

  if (input === "") return;

  const fakeReply = `🤖 Ich habe verstanden: "${input}"`;
  responseBox.textContent = fakeReply;
  
});

// Escape-Taste zum Schließen des Chat-Overlays
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const chatOverlay = document.getElementById("chat-overlay");
    if (!chatOverlay.classList.contains("hidden")) {
      chatOverlay.classList.add("hidden");
      document.getElementById("chat-input").value = "";
      document.getElementById("chat-response").textContent = "";
    }
  }
});
