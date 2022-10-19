const moment = require("moment");

moment.locale("id");
console.log(moment(1407247466820).format("YYYY-MM-DD HH:mm:ss")); // 14:04
// moment.locale("id")
// console.log(moment(1407247466820).format("YYYY-MM-DD HH:mm:ss")); // 14:04
// console.log(moment.locale("id"));

// moment.locale("en");
// console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
// moment.locale("id");
// console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
console.log(new Date(1407247466820).toISOString());
console.log(new Date(1407247466820).toISOString().substring(0, 10) + " " + new Date(1407247466820).toISOString().substring(11, 19));
