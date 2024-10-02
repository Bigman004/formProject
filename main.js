var form = document.getElementById("form");
var button = document.getElementById("submit");
var input = document.getElementById("email");
var info = document.getElementById("email-error");
var success = document.getElementById("success");
var page = document.getElementById("form-page");
var email = document.getElementById("email-value");

function handleSubmit(e){
    e.preventDefault();
    var fields = e.target.querySelectorAll("input");
    var data = fields[0];
    var mail = data.value;
    if(validateMail(mail) == false){
        info.style.display = "inline";
        input.style.background = "red";
        input.style.opacity="0.5"
    }
    else{
        success.style.display = "block"
        page.style.display = "none"
        email.innerHTML =  "<b>"+mail+ "</b>";
    }
}

function validateMail(mail){
    var i = 0;
    while(i < mail.length){
        var ch = mail.charAt(i);
        if(ch == '@'){
            while(i < mail.length){
               if('.'== mail.charAt(i))
                return true;
                i = i + 1;  
            }
        }
        i = i + 1;   
    }
    return false;
}

form.addEventListener("submit", handleSubmit);