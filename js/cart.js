import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param} from "./util.js";

window.onload = function (){

}

function getAllinCart(){
    var url = "/cart/cart.php";
    Ajax.get(url, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var paintings = o['paintings'];

        if (xhr.status === 200){
        }
        else {
        }
    }
}

export function deleteFromCart(PaintingID){
    var par = {PaintingID : PaintingID};
    var query = Param.parseQueryString(par);
    var url = "/cart/cart.php";
    Ajax.delete(url+query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var msg = o.message;

        alert(msg);

        window.location.reload();
    }
}

function checkout(all, data){
    var par = {all : all};
    var query = Param.parseQueryString(par);
    var url = "/cart/checkout.php";

    Ajax.post(url+query, data, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var msg = o.message;

        alert(msg);

        window.location.reload();
    }

}