//npm i axios -D
let axios = require("axios");
module.exports = {
  PORT: 3001,
  CORS: {
    ALLOW_ORIGIN: "http://127.0.0.1:5500",
    ALLOW_METHODS: "PUT,POST,GET,DELETE,HEAD,OPTIONS",
    HEADERS:
      "Content-Type,Content-Length,Authorization,Accept,X-Requested-With",
    CREDENTIALS: true,
  },
  SESSION: {
    secret: "ZFPX",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30,
    },
  },
};

/*
  要想通过客户端发送cookie给服务器端，必须有服务器端支持。

    Access-Control-Allow-Credentials必须为true且只能为true
    Access-Control-Allow-Origin必须指定且不能为'*'
    客户端需要指定xhr.withCredentials = true;
    
    需要注意的是，如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名。
    同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，且（跨源）原网页代码中的document.cookie也无法读取服务器域名下的Cookie。
*/

//默认配置
axios.defaults.baseURL = "http://127.0.0.1:8888";
axios.defaults.withCredentials = true;
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.transformRequest = function (data) {
  if (!data) return data;
  let result = "";
  for (let attr in data) {
    if (!data.hasOwnProperty(attr)) break;
    result += `&${attr}=${data[attr]}`;
  }
  return result.substring(1);
};
axios.interceptors.response.use(
  function onFulfilled(response) {
    return response.data;
  },
  function onRejected(reason) {
    return Promise.reject(reason);
  }
);
axios.defaults.validateStatus = function (status) {
  return /^(2|3)\d{2}$/.test(status);
};
