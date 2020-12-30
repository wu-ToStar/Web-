let express = require("express");
app = express();
app.listen(3001, (_) => {//_相当于()占位
  console.log("OK!");
});
app.get("/list", (req, res) => {
  let { callback = Function.prototype } = req.query;//Function.prototype是一个匿名空函数
  let data = {
    code: 0,
    message: "^(*￣(oo)￣)^",
  };
  res.send(`${callback}(${JSON.stringify(data)})`);
});