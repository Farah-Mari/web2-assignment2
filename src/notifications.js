export function playNotification() {
  const audio = new Audio(require("../assets/sounds/notification.wav"));
  audio.play();
}
