function required() {
    
    var userid = document.getElementById("user").value;
    var password= document.getElementById("pass").value;
    if (userid == "") {
        alert("Please Enter user name");
        return false;
    }
    else if(password ==""){
        alert("Please Enter password");
        return false;
    }
    return true;
}