import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param} from "./util.js";
import {checkUserCookie, getCookie, setCookie} from "./cookie.js";
import {overviewElementModal, painting_cart} from "./vars.js";
import {fillPaintingByInformation} from "./element.js";

window.onload = function (){
    loadNavigation();
    if (!checkUserCookie()){
        alert("请先登录！");
        window.location.href = "../html/index.html";
    }


    getAllinCart();
}

function getAllinCart(){
    var url = "/cart/cart.php";
    Ajax.get(url, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var paintings = o['paintings'];
        var nums = paintings.length;

        if (xhr.status === 200){
            var CartBoxEle = document.getElementById('CartBox');
            if (nums > 0) CartBoxEle.innerHTML = "";
            for (const painting of paintings) {
                var model = painting_cart;
                fillPaintingByInformation(model, painting);
                CartBoxEle.innerHTML = CartBoxEle.innerHTML + model.innerHTML;
            }
            document.getElementById('cart_total').innerText = nums;
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