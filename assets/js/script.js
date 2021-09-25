// get current date in day, month date
var today = new Date();
var date =  today.getDate();

// get current day by name
var dayName = today.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday",
"Friday","Saturday"];

// get current month by name
var monthName = today.getMonth();    
var monthList = ["January","February","March","April","May","June","July","August",
"September","October","November","December"];

// define current date
var todaysDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

// get current time, for past/present/future assignment ONLY
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = todaysDate + ' ' + time;
var actHour = Math.floor(today.getHours());

console.dir(actHour);
console.dir(dateTime);

document.getElementById("currentDay").textContent = dayList[dayName] + ", " + monthList[monthName] + " " + date;

// set scheduler ref-time for time comparison

    // cycling through ref-time to compare and assign past/present/future classes


// save event text with save button (set each hour button to have unique id to store and retrieve)
    // save to local storage

    // fetch from local storage