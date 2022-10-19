const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  console.log(message.body);

  if (message.body === "RTXBOT") {
    message.reply("Silahkan pilih mode:\n");
  }

  if (message.body === "halo abdan") {
    message.reply("hai");
  }

  if (message.body === "gimana kabarnya?") {
    message.reply("alhamdulillah sehat, kamu?");
  }

  if (message.body === "lagi dimana?") {
    message.reply("bumi Allah nih, kamu?");
  }

  if (message.body === "lagi ngapain?") {
    message.reply("tugas negara");
  }
});

client.initialize();
