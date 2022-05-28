import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param} from "./util.js";
import {checkUserCookie} from "./cookie.js";

window.onload = function (){
    loadNavigation();
    if (!checkUserCookie()){
        alert("请先登录！");
        window.location.href = "../html/index.html";
    }
    var input_upload = document.getElementById('uploadPic');
    var uploadPicShow = document.getElementById('uploadPicShow');

    //上传图片预览
    input_upload.addEventListener("change", function () {
        uploadPicShow.src = "";
        console.log(input_upload);
        alert(1);
    })

    var create_button = document.getElementById("create_button");
    create_button.addEventListener("click", uploadForm);

    function uploadForm(){

        var uploadPic = document.getElementById("uploadPic");
        var PicFile = uploadPic.files[0];


        uploadOnePicture(PicFile, "001702");
    }

}


function createAPainting(data){
    var url = "/release/release.php";
    Ajax.post(url, data, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var ImageFileName = o.ImageFileName;

    }

}

function changeAPainting(data, PaintingID){
    var url = "/release/release.php";
    var par = {PaintingID : PaintingID};
    var query = Param.parseQueryString(par);
    Ajax.post(url, data, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var ImageFileName = o.ImageFileName;

    }

}

function uploadOnePicture(file, ImageFileName){
    var url = "/release/upload.php";
    var par = {ImageFileName : ImageFileName};
    var query = Param.parseQueryString(par);
    Ajax.upload_post(url+query, 'uploadPic', file, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);
        var message = o.message;

        alert(message);

    }


}