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

        var user_manu_listEle = document.getElementById('user_manu_list');
        user_manu_listEle.addEventListener("mouseover", function (){
            let divs = user_manu_listEle.getElementsByTagName("div");
            for (let div of divs){console.log(div);
                div.style.display = "block";
            }
        })
        user_manu_listEle.addEventListener("mouseleave", function (){
            let divs = user_manu_listEle.getElementsByTagName("div");
            for (let div of divs){console.log(div);
                div.style.display = "none";
            }
            document.getElementById('user_manu').style.display = 'block';
        })
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
    document.getElementById("jump_login").addEventListener("click", into_login);
    document.getElementById("into_login").addEventListener("click", into_login);
    document.getElementById("exit_login").addEventListener("click", exit_subWindow);
    document.getElementById("exit_register").addEventListener("click", exit_subWindow);
    document.getElementById("jump_register").addEventListener("click", into_register);
    document.getElementById("into_register").addEventListener("click", into_register);
    document.getElementById("jump_user").addEventListener("click", jump_user);
    document.getElementById("jump_cart").addEventListener("click", jump_cart);
    document.getElementById("jump_release").addEventListener("click", jump_release);

    function jump_index(){window.location.href="../html/index.html"}
    function jump_search(){window.location.href="../html/search.html"}
    function jump_detail(){window.location.href="../html/detail.html"}
    function into_login(){
        document.getElementById('LoginWindow').style.display = 'block';
        document.getElementById('RegisterWindow').style.display = 'none';
    }
    function into_register(){
        document.getElementById('LoginWindow').style.display = 'none';
        document.getElementById('RegisterWindow').style.display = 'block';
    }
    function exit_subWindow(){
        window.location.href="../html/index.html";
        document.getElementById('LoginWindow').style.display = 'none';
        document.getElementById('RegisterWindow').style.display = 'none';
    }
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