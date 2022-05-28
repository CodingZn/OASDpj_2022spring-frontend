import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {GetUrlParam, Param} from "./util.js";
import {checkUserCookie} from "./cookie.js";
import {formToJson} from "./form.js";
import {fillPaintingByInformation} from "./element.js";

var type;
window.onload = function (){
    loadNavigation();
    if (!checkUserCookie()){
        alert("请先登录！");
        window.location.href = "../html/index.html";
    }

    let input_upload = document.getElementById('uploadPic');
    let uploadPicShow = document.getElementById('uploadPicShow');


    var OldPainting_ID = GetUrlParam('PaintingID');
    if (OldPainting_ID){
        getAPainting(OldPainting_ID);
    }

    //上传预览
    input_upload.onchange = function() {
        let inpObj = input_upload.files[0]; // 拿到上传文件的属性

        if (inpObj.type !== "image/png" && inpObj.type !== "image/jpg"
            && inpObj.type !== "image/jpeg" && inpObj.type !== "image/gif") {
            alert('上传的不是png/jpg/jpeg/gif类型的图片')
        } else if (inpObj.size / 1024 > 200) {
            alert('上传的图片超过200kb');
        } else {
            let windowURL = window.URL || window.webkitURL;
            let img = document.getElementById('preview');
            if (input_upload && inpObj) {

                let filereader = new FileReader();
                filereader.readAsDataURL(inpObj);
                filereader.onload = function (){
                    console.log(this.result);
                    uploadPicShow.src = this.result;
                }
            }
        }
        type = inpObj.type;
    }

    //提交表单
    var create_button = document.getElementById("create_button");
    create_button.addEventListener("click", uploadForm);

    function uploadForm(){

        //上传表单
        var dataform = formToJson('info_form');
        createAPainting(dataform);

    }

}

function getAPainting(PaintingID) {
    var url = "/release/release.php";
    var par = {PaintingID : PaintingID};
    var query = Param.parseQueryString(par);
    Ajax.get(url + query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var painting = o.painting;

        var releaseEle = document.getElementById('release');
        fillPaintingByInformation(releaseEle, painting, 1);

    }
}

function createAPainting(data){
    var url = "/release/release.php";
    Ajax.post(url, data, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var ImageFileName = o.ImageFileName;
        var PaintingID = o.PaintingID;

        let input_upload = document.getElementById('uploadPic');
        var PicFile = input_upload.files[0];
        type = type.substring(6);
        uploadOnePicture(PicFile, ImageFileName, PaintingID);
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

function uploadOnePicture(file, ImageFileName, PaintingID){
    var url = "/release/upload.php";
    var par = {
        ImageFileName : ImageFileName,
        PaintingID : PaintingID
    };
    var query = Param.parseQueryString(par);
    Ajax.upload_post(url+query, 'uploadPic', file, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);
        var message = o.message;

        alert(message);
        if (xhr.status === 200){
            window.location.href = "../html/user.html";
        }

    }


}