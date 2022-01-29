// TODO: Create variable to hold all timeblock information in

// hour:am:pm -- time for text area -- 8 hour business day (id) -- memos
var blockInfo = [
    {
        hour: "09",
        meridiem: "am",
        time: "09",
        id: "0",
        memo: ""
    },
    {
        hour: "10",
        meridiem: "am",
        time: "10",
        id: "1",
        memo: ""
    },
    {
        hour: "11",
        meridiem: "am",
        time: "11",
        id: "2",
        memo: ""
    },
    {
        hour: "12",
        meridiem: "pm",
        time: "12",
        id: "3",
        memo: ""
    },
    {
        hour: "01",
        meridiem: "pm",
        time: "13",
        id: "4",
        memo: ""
    },
    {
        hour: "02",
        meridiem: "pm",
        time: "14",
        id: "5",
        memo: ""
    },
    {
        hour: "03",
        meridiem: "pm",
        time: "15",
        id: "6",
        memo: ""
    },
    {
        hour: "04",
        meridiem: "pm",
        time: "16",
        id: "7",
        memo: ""
    },
    {
        hour: "05",
        meridiem: "pm",
        time: "17",
        id: "8",
        memo: ""
    },
]


// current [day, date, time] displayed at the top of calendar
$("#currentDay").text(moment().format("llll"));

getStoredInfo();

// The attr({}) method also allows you to set multiple attributes at the same time.

blockInfo.forEach(function(blockItem) {
    // timeblock row div
    var blockDiv = $("<div>").attr({
        "class": "row time-block"
    });
    // hour div
    var hourDiv = $("<div>")
        .text(`${blockItem.hour}${blockItem.meridiem}`)
        .attr({
            "class": "col-md-1 hour"
    });

    // description div to hold text area
    var descriptionDiv = $("<div>").attr({
        "class": "col-md-10 description p-0"
    });

    // text area - (to write data in)
    var textData = $("<textarea>");
    textData.attr("id", blockItem.id);
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



function savePlans() {
    localStorage.setItem("blockInfo", JSON.stringify(blockInfo));
}

function displayPlans() {
    blockInfo.forEach(function(_blockItem) {
        $(`#${_blockItem.id}`).val(_blockItem.memo);
    })
}

function getStoredInfo() {
    var storeInfo = JSON.parse(localStorage.getItem("blockInfo"));
    if(storeInfo){
        blockInfo = storeInfo;
    }
    savePlans();
    displayPlans();
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveBlock = $(this).siblings(".description").children(".future").attr("id");
    blockInfo[saveBlock].memo = $(this).siblings(".description").children(".future").val();
    console.log(saveBlock);
    savePlans();
    displayPlans();
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


