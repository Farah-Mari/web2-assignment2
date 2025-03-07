export default class Timer {
  constructor(settings, ui, notificationCallback) {
    this.settings = settings;
    this.ui = ui;
    this.notificationCallback = notificationCallback;
    this.intervalId = null;
    this.isRunning = false;
    this.currentMode = "work";
    this.workSessions = 0;
    this.timeRemaining = this.settings.getDuration(this.currentMode);
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.intervalId = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        this.ui.updateTimerDisplay(this.getTimeRemaining());
      } else {
        clearInterval(this.intervalId);
        this.isRunning = false;
        this.notificationCallback();
        this.switchMode();
        this.start();
      }
    }, 1000);
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.intervalId);
  }

  reset() {
    this.pause();
    this.currentMode = "work";
    this.workSessions = 0;
    this.timeRemaining = this.settings.getDuration(this.currentMode);
    this.ui.updateTimerDisplay(this.getTimeRemaining());
  }

  switchMode() {
    if (this.currentMode === "work") {
      this.workSessions++;
      if (this.workSessions % 4 === 0) {
        this.currentMode = "longBreak";
      } else {
        this.currentMode = "break";
      }
    } else {
      this.currentMode = "work";
    }
    this.timeRemaining = this.settings.getDuration(this.currentMode);
    this.ui.updateModeDisplay(this.currentMode);
  }

  updateSettings(newSettings) {
    this.settings.update(newSettings);
    if (!this.isRunning) {
      this.timeRemaining = this.settings.getDuration(this.currentMode);
      this.ui.updateTimerDisplay(this.getTimeRemaining());
    }
  }

  getTimeRemaining() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    return { minutes, seconds };
  }
}
