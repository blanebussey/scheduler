

var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
     // Saturday, June 9th, 2007, 5:46:21 PM
$('#currentDay').append(now);

var hours = moment().hours()



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

$(".time-block").each(function() {
     //this is just like how you grabbed the parent of the save button's id- but in this case we won't use the parent since we are already on the time-block - you will just grab the attribute with the name of data-value
        var divTime = $(this).attr('data-value')
        console.log("Time is:", divTime);
        var momma = parseInt(divTime);
        console.log(momma)
        if(divTime > hours) {
             $(this).addClass("past") .removeClass("present") .removeClass("future")
        }
        else if(divTime = hours) {
             $(this).addClass("present") .removeClass("future") .removeClass("past")
        }
        else if(divTime < hours) {
             $(this).addClass("future") .removeClass("present") .removeClass("past")

        }  
});
     