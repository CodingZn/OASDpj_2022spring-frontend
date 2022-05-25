import {Ajax} from "./ajax.js";
import {formCheck, formToJson, formToObj, checkOneForm} from "./form.js";

window.onload = function (){
    var button = document.getElementById("button");
    button.addEventListener("click", submit, false);

    var username = document.getElementById("username");
    username.addEventListener("keyup", checkUsername);
    username.addEventListener("click", checkUsername);

    var phone = document.getElementById("phone");
    phone.addEventListener("keyup", checkPhone);
    phone.addEventListener("click", checkPhone);

    var address = document.getElementById("address");
    address.addEventListener("keyup", checkAddress);
    address.addEventListener("click", checkAddress);

    var email = document.getElementById("email");
    email.addEventListener("keyup", checkEmail);
    email.addEventListener("click", checkEmail);

    var password = document.getElementById("password");
    password.addEventListener("keyup", checkPassword);
    password.addEventListener("click", checkPassword);

    var password2 = document.getElementById("password2");
    password2.addEventListener("keyup", checkPassword2);
    password2.addEventListener("click", checkPassword2);

}

function submit(){
    if (!checkDataFormats())
        alert("信息格式有误！请改正后提交！");
    else {
        let data = formToJson("registerForm");
        register(data);
    }
}

function register(data){
    var url = "/register.php";
    Ajax.post(url, data, callback);

    function callback(xhr) {
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var msg = o.message;

        if (xhr.status === 200){
            alert(msg);
            window.location.href = "../html/login.html";
        }
        else {
            alert(msg);
            window.location.reload();
        }
    }
}

function checkDataFormats(){
    return (checkAddress() && checkEmail() && checkPassword()
        && checkPhone() && checkUsername() && checkPassword2());
}

function checkUsername(){
    let element = document.getElementById("username");
    if (element.value == null || element.value === "")
        document.getElementById("usernameBlank").style.display = "inline";
    else if (element.value.match("[^(0-9A-Za-z-_)]+")){
        document.getElementById("usernameBlank").style.display = "none";
        document.getElementById("usernameErrForm").style.display = "inline";
    }
    else{
        document.getElementById("usernameBlank").style.display = "none";
        document.getElementById("usernameErrForm").style.display = "none";
        return true;
    }
    return false;
}

function checkPhone(){
    let element = document.getElementById("phone");
    if (element.value == null || element.value === "")
        document.getElementById("phoneBlank").style.display = "inline";
    else if (!element.value.match("[0-9]+")){
        document.getElementById("phoneBlank").style.display = "none";
        document.getElementById("phoneErrForm").style.display = "inline";
    }
    else{
        document.getElementById("phoneBlank").style.display = "none";
        document.getElementById("phoneErrForm").style.display = "none";
        return true;
    }
    return false;
}

function checkAddress(){
    let element = document.getElementById("address");
    if (element.value == null || element.value === "")
        document.getElementById("addressBlank").style.display = "inline";
    else{
        document.getElementById("addressBlank").style.display = "none";
        return true;
    }
    return false;
}

function checkEmail(){
    let element = document.getElementById("email");
    if (element.value == null || element.value === "")
        document.getElementById("emailBlank").style.display = "inline";
    else if (!element.value.match("^\\w+@[a-z0-9]+.[a-z]{2,4}$")){
        document.getElementById("emailBlank").style.display = "none";
        document.getElementById("emailErrForm").style.display = "inline";
    }
    else{
        document.getElementById("emailBlank").style.display = "none";
        document.getElementById("emailErrForm").style.display = "none";
        return true;
    }
    return false;
}

function checkPassword(){
    let element = document.getElementById("password");
    if (element.value == null || element.value === "")
        document.getElementById("passwordBlank").style.display = "inline";
    else if (!checkpasswordformat(element.value)){
        document.getElementById("passwordBlank").style.display = "none";
        document.getElementById("passwordErrForm").style.display = "inline";
    }
    else{
        document.getElementById("passwordBlank").style.display = "none";
        document.getElementById("passwordErrForm").style.display = "none";
        return true;
    }
    return false;
}

function checkPassword2(){
    let element = document.getElementById("password2");
    if (element.value == null || element.value === "")
        document.getElementById("password2Blank").style.display = "inline";
    else{
        let value1 = document.getElementById("password").value;
        if (value1 !== element.value){
            document.getElementById("password2ErrForm").style.display = "inline";
            document.getElementById("password2Blank").style.display = "none";
        }
        else{
            document.getElementById("password2Blank").style.display = "none";
            document.getElementById("password2ErrForm").style.display = "none";
            return true;
        }
    }
    return false;
}

function checkpasswordformat(value){console.log(value);
    if (value.length < 6) return false;
    let i=0, j=0;
    if (value.match("[0-9]+") != null) i++;
    if (value.match("[A-Za-z]+") != null){ i++; j++;}
    if (value.match("[\\+\\-\\*=\\.:;_]+") != null){ i++; j++;}
    if (value.match("[^0-9A-Za-z\\+\\-\\*=\\.:;_]+")) return false;
    if (i <= 1 && j === 0)
        return false;
    else return true;
}
