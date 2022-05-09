class DigitalClock {
  constructor(element) {
    this.element = element;
  }
  //function to Infinity call the update fuction to update the time on the clock every half a second.
  start() {
    //runs the update function as soon as the webpage loads to make sure there is no moment before the function is run.
    this.update();
    //runs the update function infinity every 500 miliseconds
    setInterval(() => {
      this.update();
    }, 500);
  }
  //function to update the clock and use the get time parts fuctions returned values to update the on screen cloc and decide if it is am or pm and what day of the week it is.
  update() {
    // bringing in the returned values from the get time parts function to format for updating the clock on the website.
    const parts = this.getTimeParts();
    // constant for correctly formatting the minutes so they can be displayed correctly later adding a 0 placeholder if the minutes are a single digit
    const MinuteFormatted = parts.minute.toString().padStart(2, "0");
    // constant for correctly formatting the seconds so they can be displayed correctly later adding a 0 placeholder if the seconds are a single digit
    const secondsFormatted = parts.seconds.toString().padStart(2, "0");
    // constant for storing each part of the time together and properly formated
    const timeFormatted = `${parts.hours}:${MinuteFormatted}:${secondsFormatted}`;
    // constant for deciding if the time is in the morning or afternoon and displaying the right text depending
    const amPm = parts.isAm ? "AM" : "PM";
    //constant to store what day it is to be used in switch below to highlight the correct day of the week
    const day = parts.day;
    //switch to highlight the current day of the week depending on the value of the constant day
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
    //actually changing the text value of the clocks time to the value of the constant time formated
    this.element.querySelector(".clock-time").textContent = timeFormatted;
    //changing the text value of the clocks am pm display to the value of the am pm constant
    this.element.querySelector(".clock-amPm").textContent = amPm;
  }
  // function to get each of the time parts required to then use in the update function to enable the actual clock functionality also gets the day of the week.
  getTimeParts() {
    const now = new Date();
    return {
      hours: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      seconds: now.getSeconds(),
      isAm: now.getHours() < 12,
      day: now.getDay(),
    };
  }
}
//creating a constant that holds the value of the clock div
const clockElement = document.querySelector(".clock");

const clockObject = new DigitalClock(clockElement);

clockObject.start();
