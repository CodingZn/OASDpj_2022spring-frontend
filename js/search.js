import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param} from "./util.js";
import {overviewElementModal} from "./vars.js";
import {fillPaintingByInformation} from "./element.js";

window.onload = function (){
    loadNavigation();
    search('', '', '1', '10');
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


        }
    }


}