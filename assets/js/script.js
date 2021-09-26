var actHour="";
var assignHour="";
let currentHourIndex= 0;

// get current date in day, month date
var today = new Date();
var date =  today.getDate();

// get current day by name
var dayName = today.getDay();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday"];

// get current month by name
var monthName = today.getMonth();    
var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", 
"September", "October", "November", "December"];

// define current date
var todaysDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

// get current time, for past/present/future assignment ONLY
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = todaysDate + ' ' + time;

console.dir(actHour);
console.dir(dateTime);

// apply current date in "day, month date" format 
document.getElementById("currentDay").textContent = dayList[dayName] + ", " + monthList[monthName] + " " + date;

// set up array of static times for each hour in scheduler
var timeBlock = [
    { hour: 9, time: '09:00 AM', assign: '9'},
    { hour: 10, time: '10:00 AM', assign: '10'},
    { hour: 11, time: '11:00 AM', assign: '11'},
    { hour: 12, time: '12:00 PM', assign: '12'},
    { hour: 13, time: '01:00 PM', assign: '13'},
    { hour: 14, time: '02:00 PM', assign: '14'},
    { hour: 15, time: '03:00 PM', assign: '15'},
    { hour: 16, time: '04:00 PM', assign: '16'}
];

// dynamically create hour elements for each time-block
var assignHour = $('#hour[i]');


// need HELP here understanding syntax to associate timeBlock.assign value to #hour[i]
// and then to use comparisons to addClass(), past/present/future to each hour
$.each(timeBlock, function (i, value) {
    assignHour[value.id] = value.assign;
    if (assignHour > actHour) {
        $()
    }
});


// function setHour() {
//     document.getElementById("hour")
//     for()
// }


// function compareTime() {
//     let actHour = Math.floor(today.getHours());

//     for(i = 9; i <= 16; i++) {
//         let timeBlock = $("#hour{i}");
//     } if {
//         actHour
//     }
// }

// set scheduler ref-time for time comparison


// compareTime();
    // cycling through ref-time to compare and assign past/present/future classes

// need HELP saving to localStorage and fetching saved array
// save event text with save button (set each hour button to have unique id to store and retrieve)
    // save to local storage

    // fetch from local storage