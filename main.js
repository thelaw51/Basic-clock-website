class DigitalClock {
  constructor(element) {
    this.element = element;
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
    const day = parts.day;
    switch (day) {
      case 0:
        const today0 = document.querySelector(".Sunday");
        today0.style.color = "#00FF97";
        break;
      case 1:
        const today1 = document.querySelector(".Monday");
        today1.style.color = "#00FF97";
        break;
      case 2:
        const today2 = document.querySelector(".Tuesday");
        today2.style.color = "#00FF97";
        break;
      case 3:
        const today3 = document.querySelector(".Wednesday");
        today3.style.color = "#00FF97";
        break;
      case 4:
        const today4 = document.querySelector(".Thursday");
        today4.style.color = "#00FF97";
        break;
      case 5:
        const today5 = document.querySelector(".Friday");
        today5.style.color = "#00FF97";
        break;
      case 6:
        const today6 = document.querySelector(".Saturday");
        today6.style.color = "#00FF97";
    }

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
      day: now.getDay(),
    };
  }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

console.log();
clockObject.start();
