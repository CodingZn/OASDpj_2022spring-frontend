window.onload = function (){
    var nav = document.getElementById("nav");
    var menu_unauth = document.getElementById("menu_unauth");
    var menu_auth = document.getElementById("menu_auth");

    //通过cookie获取登录状态

    if (1){//user
        menu_unauth.style.display = "none";
        menu_auth.style.display = "inline-block";
        let username = document.getElementById("username_nav_display");
        username.innerText = "123";
        //用户名
    }
    else {//visitor
        menu_unauth.style.display = "inline-block";
        menu_auth.style.display = "none";
    }
}