import {Ajax} from "./ajax.js";
import {formCheck, formToJson, formToObj, checkOneForm} from "./form.js";

export function loadRegisterForm(){

    var username = document.getElementById("register_username");
    username.addEventListener("keyup", checkUsername);
    username.addEventListener("click", checkUsername);

    var phone = document.getElementById("register_phone");
    phone.addEventListener("keyup", checkPhone);
    phone.addEventListener("click", checkPhone);

    var address = document.getElementById("register_address");
    address.addEventListener("keyup", checkAddress);
    address.addEventListener("click", checkAddress);

    var email = document.getElementById("register_email");
    email.addEventListener("keyup", checkEmail);
    email.addEventListener("click", checkEmail);

    var password = document.getElementById("register_password");
    password.addEventListener("keyup", checkPassword);
    password.addEventListener("click", checkPassword);

    var password2 = document.getElementById("register_password2");
    password2.addEventListener("keyup", checkPassword2);
    password2.addEventListener("click", checkPassword2);


    var button = document.getElementById("RegisterButton");
    button.addEventListener("click", getRegisterForm, false);


    function getRegisterForm(){
        if (!checkDataFormats()){
            alert("信息格式有误！请改正后提交！");
            return ;
        }
        let data = formToJson("RegisterForm");
        register(data);

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
                window.location.reload();
                document.getElementById('LoginForm').style.display = "block";
            }
            else {
                alert(msg);
            }
        }
    }

    function checkDataFormats(){
        let a = checkAddress();
        let b = checkEmail();
        let c = checkPassword();
        let d = checkPhone();
        let e = checkUsername();
        let f = checkPassword2();
        return (a && b && c && d && e && f);
    }

    function checkUsername(){
        let element = document.getElementById("register_username");
        if (element.value == null || element.value === "")
            document.getElementById("register_username_blank").style.display = "inline";
        else if (element.value.match("[^(0-9A-Za-z-_)]+")){
            document.getElementById("register_username_blank").style.display = "none";
            document.getElementById("register_username_error").style.display = "inline";
        }
        else{
            document.getElementById("register_username_blank").style.display = "none";
            document.getElementById("register_username_error").style.display = "none";
            return true;
        }
        return false;
    }

    function checkPhone(){
        let element = document.getElementById("register_phone");
        if (element.value == null || element.value === "")
            document.getElementById("register_phone_blank").style.display = "inline";
        else if (!element.value.match("[0-9]+")){
            document.getElementById("register_phone_blank").style.display = "none";
            document.getElementById("register_phone_error").style.display = "inline";
        }
        else{
            document.getElementById("register_phone_blank").style.display = "none";
            document.getElementById("register_phone_error").style.display = "none";
            return true;
        }
        return false;
    }

    function checkAddress(){
        let element = document.getElementById("register_address");
        if (element.value == null || element.value === "")
            document.getElementById("register_address_blank").style.display = "inline";
        else{
            document.getElementById("register_address_blank").style.display = "none";
            return true;
        }
        return false;
    }

    function checkEmail(){
        let element = document.getElementById("register_email");
        if (element.value == null || element.value === "")
            document.getElementById("register_email_blank").style.display = "inline";
        else if (!element.value.match("^\\s*\\w+(?:\\.{0,1}[\\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\\.[a-zA-Z]+\\s*$")){
            document.getElementById("register_email_blank").style.display = "none";
            document.getElementById("register_email_error").style.display = "inline";
        }
        else{
            document.getElementById("register_email_blank").style.display = "none";
            document.getElementById("register_email_error").style.display = "none";
            return true;
        }
        return false;
    }

    function checkPassword(){
        let element = document.getElementById("register_password");
        if (element.value == null || element.value === "")
            document.getElementById("register_password_blank").style.display = "inline";
        else if (!checkpasswordformat(element.value)){
            document.getElementById("register_password_blank").style.display = "none";
            document.getElementById("register_password_error").style.display = "inline";
            document.getElementById("passwordstrong").style.display = "none";
        }
        else{
            document.getElementById("register_password_blank").style.display = "none";
            document.getElementById("register_password_error").style.display = "none";
            document.getElementById("passwordstrong").style.display = "inline";
            var level = document.getElementById("passwordstrong");

            if (element.value.length>=6 && element.value.length<=10){
                level.setAttribute("src", "../weak.png");
            }
            else if (element.value.length>=11 && element.value.length<=16){
                level.setAttribute("src", "../medium.png");
            }
            else if (element.value.length>=17 && element.value.length<=32){
                level.setAttribute("src", "../strong.png");
            }
            return true;
        }
        return false;
    }

    function checkPassword2(){
        let element = document.getElementById("register_password2");
        if (element.value == null || element.value === "")
            document.getElementById("register_password2_blank").style.display = "inline";
        else{
            let value1 = document.getElementById("register_password").value;
            if (value1 !== element.value){
                document.getElementById("register_password2_error").style.display = "inline";
                document.getElementById("register_password2_blank").style.display = "none";
            }
            else{
                document.getElementById("register_password2_blank").style.display = "none";
                document.getElementById("register_password2_error").style.display = "none";
                return true;
            }
        }
        return false;
    }

    function checkpasswordformat(value){
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

}
