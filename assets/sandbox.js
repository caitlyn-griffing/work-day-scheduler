// current [day, date, time] displayed at the top of calendar
$("#currentDay").text(moment().format("llll"));

/* 
container
    timeblock row
        hour box
        description (text) box
        save button 
------------------------------------
timeblock div row == blockRow

hour div : hour of day | AM or PM

description div : textarea

save button : save icon
*/

// TODO 1.0 --- Present timeblocks for standard business hours
// business hours: 9-5

// TODO Create timeblock rows  ---  COMPLETED

// TODO: 1.B - Create hour box and input different hours of the day ( am & pm )
// created hour box div  but HAVE NOT created the inner text content
// 

// TODO 1.C --- COMPLETED - Create a textarea box and place inside a div.discription box
// created description box
// created textarea box

// TODO 1.D --- COMPLETED - Create Save button with Icon

// TODO extra (missed) --- COMPLETED - append save icon and button

// TODO 1.E --- COMPLETED - Append hour div, description div, and save button TO the timeblock row

// TODO 1.F --- COMPLETED - Append timeblockrow to .container in the HTML

// TODO extra (missed) --- COMPLETED - append textarea to description

// The attr({}) method also allows you to set multiple attributes at the same time.

// timeblock row div
var blockRowDiv = $("<div>").attr({
    "class": "row"
});

// append timeblock row div to the container class in HTML
$(".container").append(blockRowDiv);

// hour div box
var hourDiv = $("<div>").attr({
    "class": "col-md-1 hour"
});

// description div box  ---  make sure to delete the past class
var descriptionDiv = $("<div>").attr({
    "class": "col-md-10 past description p-0"
});

// text area - data
var textData = $("<textarea>");

descriptionDiv.append(textData);

// save icon
var saveIcon = $("<i class='far fa-save fa-lg'></i>");

// save button
var saveButton = $("<button>").attr({
    "class": "col-md-1 saveBtn"
})

// append save icon and button
saveButton.append(saveIcon);

blockRowDiv.append(hourDiv, descriptionDiv, saveButton);


// GIVEN I am using a daily planner to create a schedule

//* COMPLETED *//
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


// WHEN I click into a timeblock
// THEN I can enter an event


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist