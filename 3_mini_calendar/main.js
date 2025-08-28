/**
 * name of month
 * name of day ==> toLocaleDateString("en-us", {weekday: "long",})
 * number of day ==> getDay()
 * number of Year  ==> getFullYear()
 */

const dateNow = new Date();

// add Day name in card
const dayName = dateNow.toLocaleDateString("en-us", {
  weekday: "long",
});
document.querySelector(".dayName").innerHTML = dayName;
// add Month name in card
const monthName = dateNow.toLocaleDateString("en-us", {
  month: "long",
});
document.querySelector(".monthName").innerHTML = monthName;
// add Day Number in card
const dayNumber = dateNow.getDate();

document.querySelector(".numberDay").innerHTML = dayNumber;

const yearNumber = dateNow.getFullYear();
document.querySelector(".numberYear").innerHTML = yearNumber;
