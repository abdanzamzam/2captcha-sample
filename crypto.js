const crypto = require("crypto");

const algorithm = "aes-256-ctr";
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
const iv = crypto.randomBytes(16);

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex")
  };
};

const decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(hash.iv, "hex")
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, "hex")),
    decipher.final()
  ]);

  return decrpyted.toString();
};

// const resultEncrypt = encrypt("Password");

console.log(encrypt("Password"));
console.log(
  decrypt({
    iv: "37722b3629f9290477619e1ca330fe48",
    content: "346503c359b3a6df"
  })
);

// module.exports = {
//   encrypt,
//   decrypt
// };
