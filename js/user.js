import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param} from "./util.js";
import {checkUserCookie} from "./cookie.js";
import {fillOrderByInformation, fillPaintingByInformation, fillUserByInformation} from "./element.js";
import {order_table_head, order_table_entry, sold_table_head,
    sold_table_entry, released_table_head, released_table_entry} from "./vars.js";

window.onload = function (){
    loadNavigation();
    if (!checkUserCookie()){
        alert("请先登录！");
        window.location.href = "../html/index.html";
    }
    getUserInfo();
    getMyPaintingsReleased();
    getMyPaintingsSold();
    getOrders();

}

function getUserInfo(){
    var url = "/user/user.php";

    Ajax.get(url, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var user = o.user;

        var UserInfoTableEle = document.getElementById('UserInfoTable');
        fillUserByInformation(UserInfoTableEle, user);


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
        var order_num = orderList.length;

        var order_table = document.getElementById('order_table');
        order_table.innerHTML = order_table_head.innerHTML;
        for (let i=0; i<order_num; i++){
            var model = order_table_entry;
            fillOrderByInformation(model, orderList[i]);
            order_table.innerHTML = order_table.innerHTML + model.innerHTML;
        }

    }
}

function getMyPaintingsReleased(){
    var url = "/user/myPainting.php";
    var par = {type : 'released'};
    var query = Param.parseQueryString(par);
    Ajax.get(url+query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var paintings = o.paintings;
        var paintings_num = paintings.length; console.log(paintings);

        var released_table = document.getElementById('released_table');
        released_table.innerHTML = released_table_head.innerHTML; console.log(released_table)
        for (let i=0; i<paintings_num; i++){
            var model = released_table_entry;
            fillPaintingByInformation(model, paintings[i]);
            released_table.innerHTML = released_table.innerHTML + model.innerHTML; console.log(released_table)
        }

    }

}

function getMyPaintingsSold(){
    var url = "/user/myPainting.php";
    var par = {type : 'sold'};
    var query = Param.parseQueryString(par);
    Ajax.get(url+query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var orders_sold = o.orders;
        var orders_sold_num = orders_sold.length;

        var sold_table = document.getElementById('sold_table');
        sold_table.innerHTML = sold_table_head.innerHTML;
        for (let i=0; i<orders_sold_num; i++){
            var model = sold_table_entry;
            fillPaintingByInformation(model, orders_sold[i].Painting);
            fillUserByInformation(model, orders_sold[i].Customer)
            sold_table.innerHTML = sold_table.innerHTML + model.innerHTML;
        }

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