import {Ajax} from "./ajax.js";
import {formToJson} from "./form.js";
import {setCookie, checkUserCookie} from "./cookie.js";

export function loadLoginForm(){

    if(checkUserCookie()!= false){
        alert("您已登录！");
        window.location.href = "../html/index.html";
    }

    //检查填写是否正确
    function checkLoginForm(){
        return checkLoginUsername()&&checkLoginPassword();
    }

    function checkLoginUsername(){
        if (document.getElementById('login_username').value == ""){
            document.getElementById('login_username_blank').style.display = "inline";
            return false;
        }
        document.getElementById('login_username_blank').style.display = "none";
        return true;
    }

    function checkLoginPassword(){
        if (document.getElementById('login_password').value == ""){
            document.getElementById('login_password_blank').style.display = "inline";
            return false;
        }
        document.getElementById('login_password_blank').style.display = "none";
        return true;
    }

    //输入实时检查
    document.getElementById('login_username').addEventListener("keyup", checkLoginUsername);
    document.getElementById('login_username').addEventListener("click", checkLoginUsername);

    document.getElementById('login_password').addEventListener("keyup", checkLoginPassword);
    document.getElementById('login_password').addEventListener("click", checkLoginPassword);


    //登录按钮事件
    var loginButtonEle = document.getElementById("LoginButton");
    loginButtonEle.addEventListener("click", getLoginForm, false);

    function getLoginForm() {
        if (!checkLoginForm()) return;

        let data = formToJson("LoginForm");
        login(data);
    }

    //发送请求
    function login(data){
        var url = "/login.php";

        Ajax.post(url, data, callback);

        function callback(xhr) {
            var jsontext = xhr.responseText;
            var o = JSON.parse(jsontext);

            var msg = o.message;
            var token = o.token;
            var username = o.username;
            var CustomerID = o.CustomerID;

            if (xhr.status === 200){
                setCookie("token", token, 1);
                setCookie("CustomerID", CustomerID, 1);
                setCookie("username", username, 1);
                alert(msg);
                window.location.href = "../html/index.html";
            }
            else {
                alert(msg);
                window.location.reload();
            }
        }
    }

}

