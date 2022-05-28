import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param} from "./util.js";
import {overviewElementModal} from "./vars.js";
import {fillPaintingByInformation} from "./element.js";
import {loadLoginForm} from "./login.js";
import {loadRegisterForm} from "./register.js"

var totalpage_now = 1;
window.onload = function (){
    loadNavigation();
    loadLoginForm();
    loadRegisterForm();
    var now_page = 1;
    search('', '', '1', '10');

    //搜索
    document.getElementById('SearchButton').addEventListener("click", function () {
        now_page = 1;
        var text = document.getElementById('SearchText').value;
        var orderby = document.getElementById('SearchOrderBy').value;
        search(text, orderby, 1, 10);
    });

    //翻页
    document.getElementById('next_page').addEventListener("click", function (){
        if (now_page+1 < totalpage_now) {
            now_page = now_page + 1;
            var text = document.getElementById('SearchText').value;
            var orderby = document.getElementById('SearchOrderBy').value;
            search(text, orderby, now_page, 10);
        }
    })
    document.getElementById('before_page').addEventListener("click", function (){
        if (now_page>1) {
            now_page = now_page - 1;
            var text = document.getElementById('SearchText').value;
            var orderby = document.getElementById('SearchOrderBy').value;
            search(text, orderby, now_page, 10);
        }
    })

}



function search(text, orderby, page, pagesize){
    var url = "/search/search.php";
    var par = {
        text: text,
        orderby: orderby,
        page: page,
        pagesize: pagesize
    }
    var query = Param.parseQueryString(par);

    Ajax.get(url+query, callback);

    function callback(xhr){
        var jsontext = xhr.responseText;
        var o = JSON.parse(jsontext);

        var totalPages = o.totalPages;
        var paintings = o.paintings;
        var nums = paintings.length;

        if (xhr.status === 200){
            //填充搜索结果
            var searchResultBoxEle = document.getElementById('searchResultBox');
            if (nums > 0) searchResultBoxEle.innerHTML = "";
            for (const painting of paintings) {
                var model = overviewElementModal;
                fillPaintingByInformation(model, painting);
                searchResultBoxEle.innerHTML = searchResultBoxEle.innerHTML + model.innerHTML;
            }

            //显示搜索信息 第几页
            document.getElementById("search_pageNo").innerText = page;

            //显示一共几页
            document.getElementById('totalPages').innerText = totalPages;
            totalpage_now = totalPages;

        }
    }


}