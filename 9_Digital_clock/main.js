// variables

let hours = document.querySelector("#hours"),
  minutes = document.querySelector("#minutes"),
  seconds = document.querySelector("#seconds"),
  ampm = document.querySelector("#ampm");

function updateClock() {
  // variables
  const dateNow = new Date();
  let hoursNow = dateNow.getHours(),
    minutesNow = dateNow.getMinutes(),
    secondsNow = dateNow.getSeconds(),
    amPm = "AM";

  if (hoursNow > 12) {
    hoursNow -= 12;
    amPm = "PM";
  }
  hoursNow = hoursNow < 10 ? "0" + hoursNow : hoursNow;
  minutesNow = minutesNow < 10 ? "0" + minutesNow : minutesNow;
  secondsNow = secondsNow < 10 ? "0" + secondsNow : secondsNow;
  hours.textContent = hoursNow;
  minutes.textContent = minutesNow;
  seconds.textContent = secondsNow;
  ampm.textContent = amPm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
