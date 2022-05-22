import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {checkUserCookie, getCookie, setCookie} from "./cookie.js";

window.onload = function (){
    loadNavigation();


    getRollingShowPics();


    var mainImgEle = document.getElementById("mainImg"); console.log(mainImgEle);

}


function getRollingShowPics(){
    // Ajax.get();
}

function getNewestPaintings(){

}
