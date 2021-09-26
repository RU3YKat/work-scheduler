var localStorageId = "scheduleData";
var assignHour="";

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
var hours = today.getHours();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = todaysDate + ' ' + time;

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
var assignHour = $('.time-block');

var foundPresent = false;

var data = getStorage(localStorageId);

// dynamically assignHour to each hour.id
// and then to use comparisons to addClass(), past/present/future to each hour

$.each(assignHour, function (i, hour) {
    // iterate through each hour
    // if the hour id contains the current hour, then set its class to "present"
    if(hour.id === "hour" + hours) {
        // if hours is 13, then "hour" + hours becomes "hour13"
        $(hour).addClass("present");
        foundPresent = true;
        // if it's not
    } else { 
        // if we haven't yet gotten to current hour, then set its class to "past"
        if (!foundPresent) {
            $(hour).addClass("past");
        } else {
        // else set its class to "future"
        $(hour).addClass("future");
        }
    };

    // add data persistence via localStorage for each hour block
    if (data[hour.id]) {
        $(hour).find("textarea").val(data[hour.id]);
    };
    // store appt data from textarea on button click
    $(hour).find("button").on("click", function() {
        var appt = $(hour).find("textarea").val();
        data[hour.id] = appt;
        setStorage(localStorageId, data);
    });
});

// how to store data in localStorage
function setStorage(id, data){
	localStorage.setItem(id, JSON.stringify(data));
};

// how to retrieve stored data from localStorage
function getStorage(id) {
    let data = localStorage.getItem(id);
    // if no data have been stored yet, then data will be undefined
    // change undefined to an empty object instead
    if (!data) return {};
    // localStorage stores strings, not objects
    return JSON.parse(data);
};
