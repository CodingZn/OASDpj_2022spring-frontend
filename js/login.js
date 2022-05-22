import {Ajax} from "./ajax.js";
import {formToJson} from "./form.js";
import {cookie} from "./vars.js";
import {setCookie, getCookie, checkUserCookie} from "./cookie.js";

window.onload = function(){
    if(checkUserCookie()!= false){
        alert("您已登录！");
        window.location.href = "/web1.iml/index.html";
    }

    var button = document.getElementById("button");
    button.addEventListener("click", func1, false);

    function func1() {
        let data = formToJson("loginForm");

        login(data);
    }


    function login(data){

        Ajax.post("/php/login.php", data, callback);

        function callback(xhr) {
            var jsontext = xhr.responseText;
            var o = JSON.parse(jsontext);
            alert(o.message);
            if (xhr.status === 200){
                setCookie("user", o.user, 1);
                setCookie("username", "o.username", 1);
                window.location.href = "/web1.iml/index.html";
            }
            else {
                window.location.reload();
            }
        }
    }

}
