import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {checkUserCookie, getCookie, setCookie} from "./cookie.js";
import {PicBaseSrc} from "./vars.js";

var rolling5Pics;
var newest3Paintings;
var popular3Paintings;
getPaintingSrcs();

window.onload = function (){
    loadNavigation();

    var showingPictureNo = 0;

    //点击轮播图
    var mainshow = document.getElementById("mainshow");

    mainshow.addEventListener("click", function () {
        window.location.href = "../html/detail.html";
    });

    //上一幅
    document.getElementById("turnleft").addEventListener("click", function () {
        if (showingPictureNo === 0) showingPictureNo = 4;
        else showingPictureNo = showingPictureNo - 1;
        changeShowingPic(showingPictureNo);
    })

    //下一幅
    document.getElementById("turnright").addEventListener("click", function () {
        showingPictureNo = (showingPictureNo + 1) % 5;
        changeShowingPic(showingPictureNo);
    })

    //改变轮播图
    function changeShowingPic(newNo){
        mainshow.src = "../images/works/" + rolling5Pics[newNo].ImageFileName + ".jpg";

    }

    //填入最热艺术品
    var news3 = document.getElementById("NewestPaintingsBox");
    var newPaintingList = news3.getElementsByClassName("overview");
    for (let i=0; i<3; i++) {
        newPaintingList[i].getElementsByTagName("img")[0].src = PicBaseSrc + newest3Paintings[i].ImageFileName;

    }

    changeShowingPic(showingPictureNo);
}

function getPaintingSrcs(){
    var url = "/index.php";

    Ajax.get(url, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        rolling5Pics = o.rolling5Pics;
        newest3Paintings = o.newest3Paintings;
        popular3Paintings = o.popular3Paintings;



    }
}
