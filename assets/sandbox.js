// TODO: Create variable to hold all timeblock information in


var blockInfo = [
    {
        hour: "09",
        meridiem: "am",
        time: "09"
    },
    {
        hour: "10",
        meridiem: "am",
        time: "10"
    },
    {
        hour: "11",
        meridiem: "am",
        time: "11"
    },
    {
        hour: "12",
        meridiem: "pm",
        time: "12"
    },
    {
        hour: "01",
        meridiem: "pm",
        time: "13"
    },
    {
        hour: "02",
        meridiem: "pm",
        time: "14"
    },
    {
        hour: "03",
        meridiem: "pm",
        time: "15"
    },
    {
        hour: "04",
        meridiem: "pm",
        time: "16"
    },
    {
        hour: "05",
        meridiem: "pm",
        time: "17"
    },
]


// current [day, date, time] displayed at the top of calendar
$("#currentDay").text(moment().format("llll"));

// The attr({}) method also allows you to set multiple attributes at the same time.

blockInfo.forEach(function(blockItem) {
    // timeblock row div
    var blockDiv = $("<div>").attr({
        "class": "row"
    });
    // hour div
    var hourDiv = $("<div>")
        .text(`${blockItem.hour}${blockItem.meridiem}`)
        .attr({
            "class": "col-md-1 hour"
    });

    // description div to hold text area  
    // !!! make sure to delete the past class
    var descriptionDiv = $("<div>").attr({
        "class": "col-md-10 past description p-0"
    });

    // text area - (to write data in)
    var textData = $("<textarea>");
    // textData.attr("id", blockItem.id);
    var actualTime = moment().format("HH");
    if (blockItem.time < actualTime) {
        textData.attr({
            "class": "past"
        })
    }
    if (blockItem.time === actualTime) {
        textData.attr({
            "class": "present"
        })
    }
    if (blockItem.time > actualTime) {
        textData.attr({
            "class": "future"
        })
    }

    // save icon/button
    var saveIcon = $("<i class='far fa-save fa-lg'></i>");
    var saveButton = $("<button>").attr({
        "class": "col-md-1 saveBtn"
    });
    // append new elements
    saveButton.append(saveIcon);
    descriptionDiv.append(textData);
    blockDiv.append(hourDiv, descriptionDiv, saveButton);
    $(".container").append(blockDiv);
})












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