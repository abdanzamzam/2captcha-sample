const cors = require("cors");
const express = require("express");
const app = express();

const port = 3400;

const corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get("/", cors(corsOptions), function (req, res, next) {
  console.log(req);
});

app.listen(port, () => {
  console.log("app runnig on http://localhost:" + port);
});
