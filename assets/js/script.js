$("#currentDay").text(moment().format('dddd, MMMM Do'));
var dailyTasks = [];

function createDiv(){
    var mainDiv = $(".container");

    //populate the main div container
    for (var i=0; i<9; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "row";
        newDiv.id = i+9;
        mainDiv.append(newDiv);
    }

    //populate inner Divs
     for (var i=9; i<18; i++) {

        currHr = moment().format('HH')
        var spanEl = document.createElement("span");
       // var pEl = document.createElement("p");

        //spanEl.append(pEl);
        var innerDiv = $("#" + i);
        var timeDiv = document.createElement("div");
        timeDiv.className = "col-1 hour";
        timeDiv.id = i;
        timeDiv.textContent = moment(i, ["HH.mm"]).format("h A");
    
        // var taskDiv = document.createElement("div");
        // taskDiv.setAttribute("data-time-id", i.toString());
        spanEl.setAttribute("data-time-id", i.toString())
        //taskDiv.innerHTML = "<p>";

        if (currHr>i) {
          //  taskDiv.className = "col-10 past";
            spanEl.className = "col-10 past";
        }
        else if (currHr === i) {
           // taskDiv.className = "col-10 present";
            spanEl.className = "col-10 present";
        }
        else { 
          //  taskDiv.className = "col-10 future";
            spanEl.className = "col-10 future";
        }
       // taskDiv.className = taskDiv.className + " task"
        spanEl.className = spanEl.className + " task"

      // pEl.className = taskDiv.className;
      //  taskDiv.append(pEl);

        var saveDiv = document.createElement("div");
        saveDiv.className = "col-1 saveBtn fa fa-save"
        saveDiv.id = i;
        innerDiv.append(timeDiv);
        innerDiv.append(spanEl);
        innerDiv.append(saveDiv);

    }

}


$(".container").on("click", "span", function() {

    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>").addClass($(this).attr("class")).val(text);
    
    $(this).replaceWith(textInput)
    textInput.trigger("focus");
   
});

// editable field was un-focused
$(".container").on("blur", "textarea", function() {
    // get current value of textarea
    var text = $(this).val();

    // recreate <span> element
    var taskSpan = $("<span>")
    .addClass($(this).attr("class"))
    .text(text);
  
    // replace textarea with new content
    $(this).replaceWith(taskSpan);

});

function saveTasks() {
    var taskSpan = $(".task");
    
    for (var i=0; i<taskSpan.length; i++) {
        var thisTask = {};
        thisTask.time = taskSpan[i].getAttribute("data-time-id");
        thisTask.description = taskSpan[i].textContent;
        dailyTasks.push(thisTask);
    }

}

createDiv();
saveTasks();
