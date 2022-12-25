function validateForm() {
    var x = document.lform.profileName.value;
    var y = document.lform.password.value;

    if(x != "Nachiket"){
        alert("Please Enter your Profile Name");
        document.lform.profileName.focus();
        return false;
    }
    if(y != "Nachiket"){
        alert("Please Enter your Password");
        document.lform.password.focus();
        return false;
    }
}