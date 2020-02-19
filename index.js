function validate()
{
    var pass = document.getElementById('pass_inp');
    var confirm_pass = document.getElementById('cpass_inp');
    var email = document.getElementById('email_inp');
    var username = document.getElementById('login_inp');

    if (login_name == "")
    {
        alert("Please your username.");
        return false; 
    }
    else if (email == "") 
    {
        alert("Please select an Event Type.");
        return false;
    }
    else 
    {
        validate()
        return true;
    }

}

