//拼装为请求参数
export const Param = {
    parseQueryString : function (obj){
        if (Object.keys(obj).length === 0)
            return '';
        var query = '?';
        for (let key in obj){
            let value = obj[key];
            query = query + key + '=' + value + '&';
        }
        query = query.slice(0, -1);
        return query;
    }
}

//获取指定form中的所有的<input>对象 (button除外
function getInputElements(formId) {
    var form = document.getElementById(formId);
    var elements = new Array();
    var tagElements = form.getElementsByTagName('input');
    for (var j = 0; j < tagElements.length; j++){
        if (tagElements[j].type !== 'submit')
            elements.push(tagElements[j]);

    }
    return elements;
}

//将表单信息组合为json
export function formToJson(formId){
    var elements = getInputElements(formId);
    var obj = {};
    for (var i=0; i<elements.length; i++){
        let key = elements[i].name;
        let value = elements[i].value;
        obj[key] = value;
    }
    return JSON.stringify(obj);
}

export function formToObj(formId){
    var elements = getInputElements(formId);
    var obj = {};
    for (var i=0; i<elements.length; i++){
        let key = elements[i].name;
        let value = elements[i].value;
        obj[key] = value;
    }
    return obj;
}

