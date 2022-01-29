// current day, date, time displayed at the top of calendar
$("#currentDay").text(moment().format("llll"));

// present timeblocks for standard business hours
let container = $(".container");


// .row : 80px height - prewrap (wrap text content inside)
// .timebock : 15px border radius
// textarea : transparent - font black

// WHAT IS INSIDE THE TIMEBLOCKS
// .time-block.row
// textarea.description
// (.past | .present | .future) colors for timeblock rows

// planner hour
// save button (imported from google fonts)

