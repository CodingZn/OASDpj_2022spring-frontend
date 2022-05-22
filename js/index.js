import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";

window.onload = function (){
    loadNavigation();

    var quit = document.getElementById("quit");
    quit.addEventListener("click", quitLogin);

    getRollingShowPics();


    var mainImgEle = document.getElementById("mainImg"); console.log(mainImgEle);

}

function quitLogin(){
    alert("quit!");
}

function getRollingShowPics(){

}

function getNewestPaintings(){

}