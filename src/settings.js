export default class Settings {
  constructor() {
    this.durations = {
      work: 25 * 60,
      break: 5 * 60,
      longBreak: 15 * 60,
    };
  }

  getDuration(mode) {
    return this.durations[mode] || this.durations.work;
  }

  update(newSettings) {
    if (
      newSettings.work > 0 &&
      newSettings.break > 0 &&
      newSettings.longBreak > 0
    ) {
      this.durations = {
        work: newSettings.work,
        break: newSettings.break,
        longBreak: newSettings.longBreak,
      };
    }
  }
}
