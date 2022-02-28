$( document ).ready(function() {
    $("#currentDay").text(moment().format('dddd, MMMM Do'));
});

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
        var innerDiv = $("#" + i);
        var timeDiv = document.createElement("div");
        timeDiv.className = "col-1 hour";
        timeDiv.id = i;
        timeDiv.textContent = moment(i, ["HH.mm"]).format("h A");
    
        var taskDiv = document.createElement("div");
        taskDiv.id = i;
        if (currHr>i) {
            taskDiv.className = "col-10 past";
        }
        else if (currHr === i) {
            taskDiv.className = "col-10 present";
        }
        else { 
            taskDiv.className = "col-10 future";
        }
        
        var saveDiv = document.createElement("div");
        saveDiv.className = "col-1 saveBtn fa fa-save"
        saveDiv.id = i;
        innerDiv.append(timeDiv);
        innerDiv.append(taskDiv);
        innerDiv.append(saveDiv);

    }

}

createDiv()