import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";

window.onload = function (){

}

function createAPainting(data){
    var url = "/release/release.php";
    Ajax.post(url, data, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var msg = o.message;

        alert(msg);
    }

}