
    //获取指定form中的所有的<input>对象 (button除外
    function getInputElements(formId) {
        var form = document.getElementById(formId);
        var elements = new Array();
        var inputElements = form.getElementsByTagName('input');
        for (var j = 0; j < inputElements.length; j++){
            if (inputElements[j].type !== 'submit')
                elements.push(inputElements[j]);

        }
        var TextElements = form.getElementsByTagName('textarea');console.log(TextElements)
        for (var k = 0; k < TextElements.length; k++){
            if (TextElements[k].type !== 'submit')
                elements.push(TextElements[k]);

        }
        console.log(elements)
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

    export function checkOneForm(label){
        var key = label.getElementsByTagName("input")[0].name; console.log(key);
        var value = label.getElementsByTagName("input")[0].value; console.log(value);
        if (value == null)
            label.getElementsByClassName("errorblank")[0].style.display = "inline";
        else if (!checkItem(key, value))
            label.getElementsByClassName("errorform")[0].style.display = "inline";
        else{
            label.getElementsByClassName("errorblank")[0].style.display = "none";
            label.getElementsByClassName("errorform")[0].style.display = "none";
        }

    }

    export function formCheck(formId){
        var form = document.getElementById(formId);
        var elements = form.getElementsByTagName("label")
        var obj = {};
        for (var i=0; i<elements.length; i++){
            let key = elements[i].getElementsByTagName("input")[0].name;
            let value = elements[i].getElementsByTagName("input")[0].value;
            if (!checkItem(key, value)){
                elements[i].getElementsByClassName("errorform")[0].style.display = "inline";
            }
        }
        return obj;
    }

    function checkItem(key, value){
        switch (key){
            case "username":
                return value.match("[0-9A-Za-z-_]+");
            case "password":
                if (value.length < 6) return false;
                let i=0;
                if (value.match("[0-9]+")) i++;
                if (value.match("[A-Za-z]+")) i=i+2;
                if (value.match("[+-*=.:;]+")) i=i+4;
                return (i>=2);
            case "email":
                return value.match("^\\w+@[a-z0-9]+.[a-z]{2,4}$");
            case "phone":
                return value.match("[0-9\(\)\s]+");
        }
        return true;
    }
