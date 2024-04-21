function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value; 
    var errormessage = document.getElementById("errormessage");
    errormessage.innerHTML = "";


 if( name ==="" || email==="" || message ==="" || phone ===""){
        errormessage.innerHTML += "<p>ALL fields are required</p>";
        return false
}

if(validateEmail(email)){
    errormessage.innerHTML+="<p>please entera valid email address</p>";
    return false
}
return true

}

function validateEmail(email){
    var regex = /[^\s]*@[a-z0-9.-]*/i;
    return regex.test(email)
}



 
