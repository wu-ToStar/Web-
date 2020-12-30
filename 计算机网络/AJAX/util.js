var util = {
  /*封装GET*/
  get: function (url, query, callback, isJson) {
    if (query) {
      url += "?";
      for (var key in query) {
        url += `${key}=${query[key]}&`;
      }
      url = url.slice(0, -1);
    }
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if ((xhr.readyState == 4) & (xhr.status == 200)) {
        var res = isJson ? JSON.parse(xhr.responseText) : xhr.responseText;
        callback(res);
      }
    };
  },

  /*封装POST*/

  post: function (url, query, callback, isJson) {
    //因为不需要url后拼接，创建一个变量赋值内容
    var str = "";
    if (query) {
      for (var key in query) {
        str += `${key}=${query[key]}&`;
      }
      str = str.slice(0, -1);
    }
    var xhr = new XMLHttpRequest();
    xhr.open("post", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(str);
    xhr.onreadystatechange = function () {
      if ((xhr.readyState == 4) & (xhr.status == 200)) {
        var res = isJson ? JSON.parse(xhr.responseText) : xhr.responseText;
        callback(res);
      }
    };
  },

  /*封装思想*/
  ajax: function (params) {
    var xhr = new XMLHttpRequest();
    if (params.method.toLowerCase() === "get") {
      if (params.query) {
        params.url += "?";
        for (var key in params.query) {
            params.url += `${key}=${params.query[key]}&`;
        }
        params.url = params.url.slice(0, -1);
      }
      var xhr = new XMLHttpRequest();
      xhr.open("get", params.url);
      xhr.send();
    } else {
      var str = "";
      if (params.query) {
        for (var key in params.query) {
          str += `${key}=${params.query[key]}&`;
        }
        str = str.slice(0, -1);
      }
      var xhr = new XMLHttpRequest();
      xhr.open("post", params.url);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(str);
    }
    xhr.onreadystatechange = function () {
      if ((xhr.readyState == 4) & (xhr.status == 200)) {
        var res = params.isJson
          ? JSON.parse(xhr.responseText)
          : xhr.responseText;
        params.callback(res);
      }
    };
  },

  //自己封装的fetch方法
  fetch: function (url, query, isJson) {
    if (query) {
      url += "?";
      for (var key in query) {
        url += `${key}=${query[key]}&`;
      }
      url = url.slice(0, -1);
    }
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("get", url);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            var res = isJson ? JSON.parse(xhr.responseText) : xhr.responseText;
            resolve(res);
          } else {
              reject()
          }
        }
      };
    });
    },
    ajax2: function (params) {
        var xhr = new XMLHttpRequest();
        if (params.method.toLowerCase() === "get") {
          if (params.query) {
            params.url += "?";
            for (var key in params.query) {
                params.url += `${key}=${params.query[key]}&`;
            }
            params.url = params.url.slice(0, -1);
          }
          var xhr = new XMLHttpRequest();
          xhr.open("get", params.url);
          xhr.send();
        } else {
          var str = "";
          if (params.query) {
            for (var key in params.query) {
              str += `${key}=${params.query[key]}&`;
            }
            str = str.slice(0, -1);
          }
          var xhr = new XMLHttpRequest();
          xhr.open("post", params.url);
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.send(str);
        }
        return new Promise(function (resolve, reject) {
            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  var res = params.isJson ? JSON.parse(xhr.responseText) : xhr.responseText;
                  resolve(res);
                } else {
                    reject()
                }
              }
            };
          });
      }
};
