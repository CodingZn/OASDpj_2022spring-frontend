//拼装为请求参数
export const Param = {
    parseQueryString : function (obj){
        var query = '?';
        for (let key in obj){
            let value = obj[key];
            query = query + key + '=' + value + '&';
        }
        query = query.slice(0, -1);alert(query)
        return query;
    }
}