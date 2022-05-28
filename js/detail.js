import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param, GetUrlParam} from "./util.js";
import {setCookie} from "./cookie.js";
import {fillPaintingByInformation, fillReviewByInformation} from "./element.js";
import {reviewElementModal} from "./vars.js";
import {loadLoginForm} from "./login.js";
import {loadRegisterForm} from "./register.js"

window.onload = function (){
    loadNavigation();
    loadLoginForm();
    loadRegisterForm();


    var PaintingID = GetUrlParam('PaintingID');

    getPaintingDetail(PaintingID);
    getReviews(PaintingID);

    //加入购物车
    document.getElementById('add_to_cart').addEventListener("click", function () {
        var data = JSON.stringify({
            'PaintingID': PaintingID
        })
        addToCart(data);
    })

    //评论
    document.getElementById('releaseComment').addEventListener("click", function () {
        var comment = document.getElementById('commentText').value;
        var data = JSON.stringify({
            'PaintingID': PaintingID,
            'Comment': comment
        })
        createReview(data);
    })

    //点赞
    var reviewBoxEle = document.getElementById('reviewBox');
    var likebuttons = reviewBoxEle.getElementsByClassName('likeIt');


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
            //填充
            var DetailPaintingEle = document.getElementById('detail');
            fillPaintingByInformation(DetailPaintingEle, painting, 1);

        }
        else{
            var msg = o.message;
            alert(msg);
            window.location.href="../html/index.html";
        }
    }

}


function getReviews(PaintingID){
    var url = "/detail/paintingReview.php";
    var par = {PaintingID : PaintingID};
    var query = Param.parseQueryString(par);
    Ajax.get(url+query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var reviews = o.reviews;
        var review_nums = reviews.length;

        if (xhr.status === 200){
            //填充
            var reviewBoxEle = document.getElementById('reviewBox');
            if (review_nums > 0) reviewBoxEle.innerHTML = "";
            for (const review of reviews) {
                var model = reviewElementModal;
                fillReviewByInformation(model, review);
                reviewBoxEle.innerHTML = reviewBoxEle.innerHTML + model.innerHTML;
            }
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

        window.location.reload();
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

import {deleteFromCart} from "./cart.js";
