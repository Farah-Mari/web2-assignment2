export default class UI {
  constructor() {
    this.modeDisplay = document.getElementById("modeDisplay");
    this.hoursDisplay = document.getElementById("hoursDisplay");
    this.minutesDisplay = document.getElementById("minutesDisplay");
    this.secondsDisplay = document.getElementById("secondsDisplay");
    this.playPauseButton = document.getElementById("playPauseBtn");
    this.resetButton = document.getElementById("resetBtn");
  }

  updateTimerDisplay({ hours, minutes, seconds }) {
    if (this.hoursDisplay) {
      this.hoursDisplay.textContent = hours.toString().padStart(2, "0");
    }
    if (this.minutesDisplay) {
      this.minutesDisplay.textContent = minutes.toString().padStart(2, "0");
    }
    if (this.secondsDisplay) {
      this.secondsDisplay.textContent = seconds.toString().padStart(2, "0");
    }
    const timerDisplay = document.getElementById("timerDisplay");
    if (timerDisplay) {
      timerDisplay.textContent = `${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
  }

  updateModeDisplay(mode) {
    let modeText = "";
    switch (mode) {
      case "work":
        modeText = "It's Time To Focus";
        break;
      case "break":
        modeText = "Let's Take a Break";
        break;
      case "longBreak":
        modeText = "Long Break";
        break;
      default:
        modeText = mode;
    }
    this.modeDisplay.textContent = modeText;
  }

  onPlayPause(callback) {
    this.playPauseButton.addEventListener("click", callback);
  }

  onReset(callback) {
    this.resetButton.addEventListener("click", callback);
  }

  setPlayPauseButtonText(text) {
    this.playPauseButton.textContent = text;
  }
}
