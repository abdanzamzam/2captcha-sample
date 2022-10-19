const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotallySecretKey");

const data = {
  message: "success",
  data: {
    menuAccess: [
      "home",
      "salesHistory",
      "ifsList",
      "ifsList",
      "setting",
      "ifsUpdate"
    ]
  }
};

const encryptedString = cryptr.encrypt(JSON.stringify(data));
const decryptedString = cryptr.decrypt(encryptedString);

console.log(encryptedString); // 2a3260f5ac4754b8ee3021ad413ddbc11f04138d01fe0c5889a0dd7b4a97e342a4f43bb43f3c83033626a76f7ace2479705ec7579e4c151f2e2196455be09b29bfc9055f82cdc92a1fe735825af1f75cfb9c94ad765c06a8abe9668fca5c42d45a7ec233f0
console.log(decryptedString); // bacon
console.log(JSON.parse(decryptedString)); // JSON
