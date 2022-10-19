const Captcha = require("2captcha");
const fs = require("fs");

const solver = new Captcha.Solver("b3041d39892c00a99ad936e6ba36bbb2");

solver
  .imageCaptcha(fs.readFileSync("./captcha.png", "base64"))
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
