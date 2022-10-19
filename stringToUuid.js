const stringToUuid = (str) => {
  str = str.replace("-", "");
  return "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx".replace(
    /[x]/g,
    function (c, p) {
      return str[p % str.length];
    }
  );
};

var input = "813538-359512";
var output = stringToUuid(input);

console.log("Input: " + input);
console.log("Output: " + output);
