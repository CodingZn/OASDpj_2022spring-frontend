import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param} from "./util.js";
import {setCookie} from "./cookie.js";

window.onload = function (){
    // getPaintingDetail('8');
}

//detail

function getPaintingDetail(PaintingID){
    var par = {PaintingID : PaintingID};
    var query = Param.parseQueryString(par);
    var url = "/detail/paintingDetail.php";
    Ajax.get(url+query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var painting = o['painting'];

        if (xhr.status === 200){
        }
        else {
        }
    }

}

//review

function getReviews(PaintingID){
    var par = {PaintingID : PaintingID};
    var query = Param.parseQueryString(par);
    var url = "/detail/paintingReview.php";
    Ajax.get(url+query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var reviews = o['reviews'];

        if (xhr.status === 200){
        }
        else {
        }
    }
}

function createReview(data){
    var url = "/detail/paintingReview.php";
    Ajax.post(url, data, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var msg = o.message;

        alert(msg);
    }
}

function liketheReview(data){
    var url = "/detail/paintingReview.php";
    Ajax.patch(url, data, callback);

    function callback(xhr){
    }
}

function deleteReview(RatingID){
    var par = {RatingID : RatingID};
    var query = Param.parseQueryString(par);
    var url = "/detail/paintingReview.php";
    Ajax.get(url+query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var msg = o.message;

        alert(msg);
    }
}

//cart

function addToCart(data){
    var url = "/cart/cart.php";
    Ajax.post(url, data, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var msg = o.message;

        alert(msg);
    }
}

function deleteFromCart(PaintingID){
    var par = {PaintingID : PaintingID};
    var query = Param.parseQueryString(par);
    var url = "/cart/cart.php";
    Ajax.delete(url+query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var msg = o.message;

        alert(msg);
    }
}
