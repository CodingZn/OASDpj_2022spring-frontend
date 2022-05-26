import {Ajax} from "./ajax.js";
import {loadNavigation} from "./navigation.js";
import {Param} from "./util.js";

window.onload = function (){
    search('on', 'title', '1', '10');
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

        var paintings = o.paintings;

        //分页？？？
    }


}