import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param} from "./util.js";
import {setCookie} from "./cookie.js";
import {fillPaintingByInformation, fillReviewByInformation} from "./element.js";

window.onload = function (){
    loadNavigation();


    var PaintingID = '124';

    getPaintingDetail(PaintingID);
    getReviews(PaintingID);

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

//review
var reviewElementModal = document.createElement("div");

reviewElementModal.innerHTML =
    "                   <div class=\"review block Review\" > " +
    "                        <div class=\"box flexbox box61\">\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <span class=\"UserName_create\">Anonymous</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"textbox\">\n" +
    "                            </div>\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <span class=\"CreateDateTime\">There is no comment date</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <span class=\"Rating\">unknown</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"box flexbox box62\">\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <p><span class=\"Comment\">There is no content.</span></p>\n" +
    "                            </div>\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <p><span>Like The Review</span></p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n"


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
