console.log("Hello from testFile.js!");

var currHour = new Date().getHours();
console.log("The current hour is " + currHour + " (24-hour time)");
if (currHour >= 6 && currHour < 12) {
  document.write("Good morning");
} else if (currHour >= 12 && currHour < 18) {
  document.write("Good afternoon");
} else if (currHour >= 18 && currHour < 20) {
  document.write("Good evening");
} else {
  document.write("Good night")
}