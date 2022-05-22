import {Ajax} from "./ajax.js";

window.onload = function (){
    document.getElementById("menu_unauth").style.display="none";

    var quit = document.getElementById("quit");
    quit.addEventListener("click", quitLogin);

    getRollingShowPics();

}

function quitLogin(){
    alert("quit!");
}

function getRollingShowPics(){

}