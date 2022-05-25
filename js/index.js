import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {checkUserCookie, getCookie, setCookie} from "./cookie.js";

window.onload = function (){
    loadNavigation();



    var mainImgEle = document.getElementById("mainImg"); console.log(mainImgEle);

}

function getPaintingSrcs(){
    var url = "/index.php";

    Ajax.get(url, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var rolling5Pics = o.rolling5Pics;
        var newest3Paintings = o.newest3Paintings;
        var popular3Paintings = o.popular3Paintings;



    }
}
