import {checkUserCookie, getCookie, setCookie} from "./cookie.js";

export function loadNavigation(){
    var nav = document.getElementById("nav");
    var menu_unauth = document.getElementById("menu_visitor");
    var menu_auth = document.getElementById("menu_user");

    //通过cookie获取登录状态选择状态栏
    if (checkUserCookie()!=false){//user
        menu_unauth.style.display = "none";
        menu_auth.style.display = "flex";
        let usernameEle = document.getElementById("username_nav_display");
        usernameEle.innerText = getCookie("username");

    }
    else {//visitor
        menu_unauth.style.display = "flex";
        menu_auth.style.display = "none";
    }
    //跳转
    document.getElementById("jump_index").addEventListener("click", jump_index);
    document.getElementById("jump_index2").addEventListener("click", jump_index);
    document.getElementById("jump_search").addEventListener("click", jump_search);
    document.getElementById("jump_search2").addEventListener("click", jump_search);
    document.getElementById("jump_detail").addEventListener("click", jump_detail);
    document.getElementById("jump_detail2").addEventListener("click", jump_detail);
    document.getElementById("jump_login").addEventListener("click", jump_login);
    document.getElementById("jump_register").addEventListener("click", jump_register);
    document.getElementById("jump_user").addEventListener("click", jump_user);
    document.getElementById("jump_cart").addEventListener("click", jump_cart);
    document.getElementById("jump_release").addEventListener("click", jump_release);

    function jump_index(){window.location.href="../html/index.html"}
    function jump_search(){window.location.href="../html/search.html"}
    function jump_detail(){window.location.href="../html/detail.html"}
    function jump_login(){window.location.href="../html/login.html"}
    function jump_register(){window.location.href="../html/register.html"}
    function jump_user(){window.location.href="../html/user.html"}
    function jump_cart(){window.location.href="../html/cart.html"}
    function jump_release(){window.location.href="../html/release.html"}
    //登出
    var logoutEle = document.getElementById("quit");
    logoutEle.addEventListener("click", logout);

}

function logout(){
    alert("退出登录！");
    setCookie("user", null, -1);alert(11);
    setCookie("username", null, -1);alert(22);
    // window.location.reload();
}