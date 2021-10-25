
var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
     // Saturday, June 9th, 2007, 5:46:21 PM
$('#currentDay').append(now);

$(".saveBtn").on("click", function(){
     var time = $(this).parent().attr('id')
     var task = $(this).siblings('.description').val()
     localStorage.setItem(time,task)
})


var saveTasks = function() {
     localStorage.setItem("tasks", JSON.stringify(tasks));
};

$('#9am .description').val(localStorage.getItem('9am'));
$('#10am .description').val(localStorage.getItem('10am'));
$('#11am .description').val(localStorage.getItem('11am'));
$('#12pm .description').val(localStorage.getItem('12pm'));
$('#1pm .description').val(localStorage.getItem('1pm'));
$('#2pm .description').val(localStorage.getItem('2pm'));
$('#3pm .description').val(localStorage.getItem('3pm'));
$('#4pm .description').val(localStorage.getItem('4pm'));
$('#5pm .description').val(localStorage.getItem('5pm'));
$('#6pm .description').val(localStorage.getItem('6pm'));
