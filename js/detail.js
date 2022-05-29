import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param, GetUrlParam} from "./util.js";
import {checkUserCookie, setCookie} from "./cookie.js";
import {fillPaintingByInformation, fillReviewByInformation} from "./element.js";
import {reviewElementModal} from "./vars.js";
import {loadLoginForm} from "./login.js";
import {loadRegisterForm} from "./register.js"
var userID;
window.onload = function (){
    loadNavigation();
    loadLoginForm();
    loadRegisterForm();
    userID = checkUserCookie();


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
            for (let i=0;i<review_nums;i++) {
                let review = reviews[i];
                let model = reviewElementModal;
                fillReviewByInformation(model, review);

                reviewBoxEle.innerHTML = reviewBoxEle.innerHTML + model.innerHTML;
            }

            var reviewButtons = document.getElementsByName('ReviewConduct');
            for (let i=0;i<review_nums;i++) {
                let reviewButton = reviewButtons[i];
                if (reviewButton.parentElement.parentElement.title === userID){
                    reviewButton.value = '0';
                    reviewButton.style.background="Yellow";
                    reviewButton.innerHTML="<span>DELETE MY REVIEW</span>";
                }
            }

            //对评论的操作
            for (let i=0; i< reviewButtons.length; i++){
                let reviewButton = reviewButtons[i];

                reviewButton.addEventListener("click", buttonClick);
                function buttonClick(){
                    if (reviewButton.value === '0'){//自己的评论，删除
                        if (confirm("确认删除？")){
                            let ratingID = reviewButton.parentElement.title;
                            deleteReview(ratingID);
                        }
                    }
                    else {//未点赞，点赞
                        let data =JSON.stringify({
                            RatingID: this.parentElement.title,
                            RatingOP: 1
                        });
                        liketheReview(data);
                        alert('已赞!');
                        reviewButton.value = '2';
                        reviewButton.innerHTML = "<span>ALREADY LIKE</span>";
                        reviewButton.removeEventListener("click", buttonClick);
                    }


                }

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
    Ajax.delete(url+query, callback);

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
