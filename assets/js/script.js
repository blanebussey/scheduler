
var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
     // Saturday, June 9th, 2007, 5:46:21 PM
$('#currentDay').append(now);

var tasks = {};

var createTask = function(taskText, taskTime, taskList) {
var taskLi = $("<li>").addClass("list-group-item");
var taskSpan = $("<span>").text(taskTime);
var taskP = $("<p>").addClass("m-1").text(taskText)
//appen span and p element to parent li 
taskLi.append(taskSpan, taskP );
//append to ul list on the page
$("list-" + taskList).append(taskLi);
};


var saveTasks = function() {
     localStorage.setItem("tasks", JSON.stringify(tasks));
};


//modal was triggered
$("#task-form-modal").on("show.bs.modal"), function() {
     //clear values
     $("#modalTaskDescription", "#modalDueDate").val("";)
};

