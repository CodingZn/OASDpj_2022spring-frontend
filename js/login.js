import {Ajax} from "./ajax.js";
import {formToJson} from "./form.js";

window.onload = function(){


    var button = document.getElementById("button");
    button.addEventListener("click", func1, false);

    function func1() {
        let data = formToJson("loginForm");

        login(data);
    }


    function login(data){

        Ajax.post("http://localhost:80/php/login.php", data, callback);

        function callback(xhr) {
            var jsontext = xhr.responseText;
            var o = JSON.parse(jsontext);
            alert(o.message);
            if (xhr.status === 200){
                window.location.href = "../web1.iml/index.html";
            }
            else {
                window.location.reload();
            }
        }
    }

}
