import fetch from "node-fetch";

const key = "sb-na-0bbbebfe-56e1-4839-a68f-c45e171d0853";
const secret =
  "4UrzsyD4qA/9r2wb5Zi++5+0rxqRLChHjwE95mqva/iiEeyu/lyggkc2NdGc7FryVk7raYbvT45q\n+YaFVj3b4A==";

fetch("https://devhana.corp.ai.astra.co.id:33032/uaa-security/oauth/token", {
  method: "POST",
  body:
    "grant_type=client_credentials&client_id=" +
    key +
    "&client_secret=" +
    secret,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then(function (resp) {
    // Return the response as JSON
    return resp.json();
  })
  .then(function (data) {
    // Log the API data
    console.log("token", data);
  })
  .catch(function (err) {
    // Log any errors
    console.log("something went wrong", err);
  });
