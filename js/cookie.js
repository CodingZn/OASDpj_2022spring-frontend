export function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    var path = "path=/"
    document.cookie = cname + "=" + cvalue + "; " + expires + '; ' + path;
}

export function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

//检查是否登录，返回cookie中user的值或false
export function checkUserCookie(){
    var user = getCookie("CustomerID");
    if (user!=""){
        return user;
    }
    else {
        return false;
    }
}