import {checkUserCookie, getCookie, setCookie} from "./cookie.js";

export function loadNavigation(){
    var nav = document.getElementById("nav");
    var menu_unauth = document.getElementById("menu_unauth");
    var menu_auth = document.getElementById("menu_auth");

    //通过cookie获取登录状态选择状态栏
    if (checkUserCookie()!=false){//user
        menu_unauth.style.display = "none";
        menu_auth.style.display = "inline-block";
        let usernameEle = document.getElementById("username_nav_display");
        usernameEle.innerText = getCookie("username");

    }
    else {//visitor
        menu_unauth.style.display = "inline-block";
        menu_auth.style.display = "none";
    }

    //登出
    var logoutEle = document.getElementById("quit");
    logoutEle.addEventListener("click", logout);

}

function logout(){
    alert("退出登录！");
    setCookie("user", null, -1);
    setCookie("username", null, -1);
    window.location.reload();
}