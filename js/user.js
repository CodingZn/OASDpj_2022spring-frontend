import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param} from "./util";

window.onload = function (){

}

function getUserInfo(){
    var url = "/user/user.php";

    Ajax.get(url, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var user = o.user;


    }
}

function rechargeMoney(data){
    var url = "/user/user.php";

    Ajax.post(url, data, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var msg = o.message;

        alert(msg);
    }

}

function getOrders(){
    var url = "/user/order.php";

    Ajax.get(url, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var orderList = o.orderList;


    }
}

function getMyPaintings(type){
    var url = "/user/myPainting.php";
    var par = {type : type};
    var query = Param.parseQueryString(par);
    Ajax.get(url+query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var paintings = o.paintings;


    }

}

function deleteMyPainting(PaintingID){
    var url = "/user/myPainting.php";
    var par = {PaintingID : PaintingID};
    var query = Param.parseQueryString(par);
    Ajax.delete(url+query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var msg = o.message;

        alert(msg);
    }

}