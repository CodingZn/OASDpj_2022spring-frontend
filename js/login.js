import {Ajax} from "./ajax.js";
import {formToJson} from "./form.js";
import {cookie} from "./vars.js";
import {setCookie, getCookie, checkUserCookie} from "./cookie.js";

window.onload = function(){
    if(checkUserCookie()!= false){
        alert("您已登录！");
        window.location.href = "../html/index.html";
    }

    var button = document.getElementById("button");
    button.addEventListener("click", func1, false);

    function func1() {
        let data = formToJson("loginForm");

        login(data);
    }

}

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
