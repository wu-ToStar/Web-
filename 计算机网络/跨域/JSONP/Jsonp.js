$.ajax({
  url: "http://127.0.0.1:8001/list",
  method: "get",
  dataType: "jsonp",
  success: (res) => {
    console.log(res);
  },
});
