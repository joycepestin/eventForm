function display()
{
    var eventType = document.getElementById('event-input');
    var eventTitle = document.getElementById('input-event-title');
    var eventDate1 = document.getElementById('inp-date-from');
    var eventDate2 = document.getElementById('inp-date-to');
    var postingDate = document.getElementById('input-posting-date');

   
    alert("Your event was created!" + "\nEvent Type: " + eventType.value + "\nEvent Title: " + eventTitle.value
        + "\nEvent Date: " + eventDate1.value + " to " + eventDate2.value + "\nPosting Date: "
        + postingDate.value);

}

function cancelled()
{
    document.getElementById('event-input').value = "";
    document.getElementById('input-event-title').value = "";
    document.getElementById('inp-date-from').value = "";
    document.getElementById('inp-date-to').value = "";
    document.getElementById('input-posting-date').value = "";
}


function validation()
{
    var x = document.forms["form"]["inpEvent"].value;
    var select = document.forms["form"]["eventInp"].value;
    var date1 = document.forms["form"]["inp-date-from"].value;
    var date2 = document.forms["form"]["inp-date-to"].value;
    var date3 = document.forms["form"]["input-posting-date"].value;

    if (x == "")
    {
        alert("Please input the Event Title.");
        return false;
        
    }
    else if (select == "") 
    {
        alert("Please select an Event Type.");
        return false;
    }
    else if (date1 == "") {
        alert("Please select the starting date of the Event");
        return false;
    }
    else if (date2 == "") {
        alert("Please select the finishing date of the Event");
        return false;
    }
    else if (date3 == "") {
        alert("Please select the posting date of the Event");
        return false;
    }
    else 
    {
        display();
        return true;
    }
}