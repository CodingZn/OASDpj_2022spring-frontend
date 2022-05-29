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

    document.getElementById('checkout').addEventListener("click", function () {
        var checkboxes = document.getElementById('CartBox').getElementsByTagName('input');
        var checkbox_num = checkboxes.length;
        var list = [];
        for (let i=0; i<checkbox_num; i++){
            if (checkboxes[i].checked){
                list.push(checkboxes[i].parentElement.title);
            }
        }
        if(list.length === 0){
            let a = confirm("是否购买所有购物车中的商品？");
            if (a){
                checkout(1);
            }
        }
        else {
            let a = confirm("是否购买所有选中的商品？");
            if (a){
                var data = JSON.stringify({
                    PaintingIDs: list
                })
                checkout(0, data);
            }
        }
    })

    document.getElementById('deletesome').addEventListener("click", function () {
        var checkboxes = document.getElementById('CartBox').getElementsByTagName('input');
        var checkbox_num = checkboxes.length;
        var list = [];
        for (let i=0; i<checkbox_num; i++){
            if (checkboxes[i].checked){
                list.push(checkboxes[i].parentElement.title);
            }
        }
        if(list.length === 0){
            alert("没有要删除的商品！");
        }
        else {
            let a = confirm("是否删除所有选中的商品？");
            if (a){
                var data = JSON.stringify({
                    PaintingIDs: list
                })
                deleteFromCart(data);
            }

        }

    })
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

export function deleteFromCart(data){
    var url = "/cart/cart.php";
    Ajax.delete(url, data, callback);

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