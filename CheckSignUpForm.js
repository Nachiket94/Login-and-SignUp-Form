function validateForm() {
    var x = document.sform.profileName.value;
    var y = document.sform.password.value;
    var z = document.sform.email.value;
    var w = document.sform.confirmPassword.value;

    if(x != "Nachiket"){
        alert("Please Enter your Profile Name");
        document.sform.profileName.focus();
        return false;
    }
    if(z != "nachi19229@gmail.com"){
        alert("Please Enter your E-Mail ID");
        document.sform.email.focus();
        return false;
    }
    if(y != "Nachiket"){
        alert("Please Enter your Password");
        document.sform.password.focus();
        return false;
    }
    if(w != "Nachiket"){
        alert("Please Re-enter your Password");
        document.sform.confirmPassword.focus();
        return false;
    }
}