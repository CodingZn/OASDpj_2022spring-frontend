import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {DetailBaseSrc, PicBaseSrc} from "./vars.js";
import {fillPaintingByInformation} from "./element.js";
import {loadLoginForm} from "./login.js";
import {loadRegisterForm} from "./register.js"

var showingPictureNo = 0;
var rolling5Pics;

window.onload = function (){
    loadNavigation();
    loadLoginForm();
    loadRegisterForm();

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

    getPaintingSrcs();



}

//改变轮播图
function changeShowingPic(newNo){
    mainshow.src = PicBaseSrc + rolling5Pics[newNo].ImageFileName;
    //跳转
    var centor = document.getElementById('centershow');
    var a = Array.from( centor.getElementsByClassName('image_jump')); console.log(rolling5Pics);
    a[0].href = DetailBaseSrc + '?PaintingID='+ rolling5Pics[showingPictureNo].PaintingID;
}

function getPaintingSrcs(){
    var url = "/index.php";

    Ajax.get(url, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        rolling5Pics = o.rolling5Pics;
        var newest3Paintings = o.newest3Paintings;
        var popular3Paintings = o.popular3Paintings;


        //填入最新艺术品
        var news3 = document.getElementById("NewestPaintingsBox");
        var newPaintingList = news3.getElementsByClassName("overview");
        newPaintingList = Array.from(newPaintingList);

        for (let i=0; i<3; i++) {
            fillPaintingByInformation(newPaintingList[i], newest3Paintings[i]);
        }

        //填入最热艺术品
        var hot3 = document.getElementById("MostPopularPaintingsBox");
        var hotPaintingList = hot3.getElementsByClassName("overview");
        hotPaintingList = Array.from(hotPaintingList);

        for (let i=0; i<3; i++) {
            fillPaintingByInformation(hotPaintingList[i], popular3Paintings[i]);

        }

        //加载最初轮播图
        changeShowingPic(0);

    }

}

