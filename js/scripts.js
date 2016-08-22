//Back End
function Task(_description){
  this.description = _description;
}

//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    var taskToAdd = $("input#toDoInput").val();
    var newTask = new Task(taskToAdd);
    console.log(newTask.description);
    $("#output").append("<li>" + newTask.description + "</li>");
    $("ul#output li").last().click(function(){
      $(this).addClass("done");
      $(this).click(function(){
        $(this).hide();
      });
    });
    $("input#toDoInput").val("");
    event.preventDefault();
  });
});
