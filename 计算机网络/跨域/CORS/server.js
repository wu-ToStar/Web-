let express = require("express");
let CONFIG=require("./config")
const bodyParser = require("body-parser");
app = express();
app.listen(CONFIG.PORT, () => {
  console.log("OK!");
});


app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session(CONFIG.SESSION));
app.use((req, res, next) => {
  const { ALLOW_ORIGIN, CREDENTIALS, HEADERS, ALLOW_METHODS }=CONFIG.CORS;
  res.header("Access-Control-Allow-Origin", ALLOW_ORIGIN);
  res.header("Access-Control-Allow-Credentials", CREDENTIALS);
  res.header("Access-Control-Allow-Headers", HEADERS);
  res.header("Access-Control-Allow-Methods", ALLOW_METHODS);
  if (req.method === "OPTIONS") {
    res.send("OK!");
    return;
  }
  next();
});


app.get("/list", (req, res) => {
  let { callback = Function.prototype } = req.query; //Function.prototype是一个匿名空函数
  let data = {
    code: 0,
    message: "^(*￣(oo)￣)^",
  };
  res.send(`${callback}(${JSON.stringify(data)})`);
});
