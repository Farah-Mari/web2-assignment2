import Timer from "./timer.js";
import UI from "./ui.js";
import Settings from "./settings.js";
import { playNotification } from "./notifications.js";
import Tasks from "./tasks.js";
import ClickSound from "../assets/sounds/click.wav";
import "../styles.css";

const clickSound = new Audio(ClickSound);

document.addEventListener("DOMContentLoaded", () => {
  const settings = new Settings();
  const ui = new UI();
  const timer = new Timer(settings, ui, playNotification);
  let isRunning = false;
  const playPauseButton = document.getElementById("playPauseBtn");
  const resetButton = document.getElementById("resetBtn");

  playPauseButton.addEventListener("click", () => {
    clickSound.play();
    if (!isRunning) {
      playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
      isRunning = true;
      timer.start();
    } else {
      playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
      isRunning = false;
      timer.pause();
    }
  });

  resetButton.addEventListener("click", () => {
    clickSound.play();
    timer.reset();
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    isRunning = false;
  });

  ui.updateTimerDisplay(timer.getTimeRemaining());
  const taskListElement = document.getElementById("taskList");
  const taskForm = document.getElementById("taskForm");
  const tasks = new Tasks(taskListElement);
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      tasks.addTask(taskText);
      taskInput.value = "";
    }
  });
  const settingsBtn = document.getElementById("settingsBtn");
  const settingsForm = document.getElementById("settingsForm");

  settingsBtn.addEventListener("click", () => {
    settingsForm.classList.toggle("hidden");
  });

  settingsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const workDuration =
      parseInt(document.getElementById("workDuration").value, 10) * 60;
    const breakDuration =
      parseInt(document.getElementById("breakDuration").value, 10) * 60;
    const longBreakDuration =
      parseInt(document.getElementById("longBreakDuration").value, 10) * 60;
    settings.update({
      work: workDuration,
      break: breakDuration,
      longBreak: longBreakDuration,
    });
    timer.reset();
    settingsForm.classList.add("hidden");
  });
});
