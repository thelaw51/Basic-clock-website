class DigitalClock {
  constructor(element) {
    this.element = element;
    console.log(this.element);
  }

  start() {
    this.update();
    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const parts = this.getTimeParts();
    const minuteFormatted = parts.minute.toString().padStart(2, "0");
    const secondsFormatted = parts.seconds.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}:${minuteFormatted}:${secondsFormatted}`;
    const amPm = parts.isAm ? "AM" : "PM";

    this.element.querySelector(".clock-time").textContent = timeFormatted;
    this.element.querySelector(".clock-amPm").textContent = amPm;
  }

  getTimeParts() {
    const now = new Date();
    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      seconds: now.getSeconds(),
      isAm: now.getHours() < 12,
    };
  }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();
