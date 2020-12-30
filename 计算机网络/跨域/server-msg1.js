let express = require("express");
app = express();
app.listen(1001, (_) => {//_相当于()占位
  console.log("OK!");
});
app.use(express.static("./"))