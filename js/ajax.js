export const Ajax = {
    get: function (url, callback) {
        // XMLHttpRequest对象用于在后台与服务器交换数据
        var xhr = new XMLHttpRequest();
        xhr.open('GET', baseurl + url, true);
        xhr.onreadystatechange = function () {
            // readyState == 4说明请求已完成
            if (xhr.readyState == 4) {
                console.log(xhr.responseText);
                callback(xhr);
            }
        }
        xhr.timeout = 2000;
        xhr.send();
    },

    post: function (url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', baseurl + url, true);
        // 添加http头，发送信息至服务器时内容编码类型
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                console.log(xhr.responseText);
                callback(xhr);
            }
        }
        xhr.timeout = 2000;
        xhr.send(data);

    },

    put: function (url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', baseurl + url, true);
        // 添加http头，发送信息至服务器时内容编码类型
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                console.log(xhr.responseText);
                callback(xhr);
            }
        }
        xhr.timeout = 2000;
        xhr.send(data);

    },

    patch: function (url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', baseurl + url, true);
        // 添加http头，发送信息至服务器时内容编码类型
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                console.log(xhr.responseText);
                callback(xhr);
            }
        }
        xhr.timeout = 2000;
        xhr.send(data);

    },

    delete: function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', baseurl + url, true);
        // 添加http头，发送信息至服务器时内容编码类型
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                console.log(xhr.responseText);
                callback(xhr);
            }
        }
        xhr.timeout = 2000;
        xhr.send(data);

    }



};

var baseurl= "http://localhost:80/php";
