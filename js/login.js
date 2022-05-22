import {Ajax} from "./generaljs/ajax.js";
import {formToJson} from "./form.js";
import {cookie} from "./vars.js";
import {setCookie, getCookie, checkCookie} from "./generaljs/cookie.js";

window.onload = function(){


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
                console.log(document.cookie);
            }
            else {
                window.location.reload();
            }
        }
    }

}
