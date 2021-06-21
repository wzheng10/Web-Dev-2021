const figlet = require("figlet");
const colors = require("colors");

figlet("Hello Wei!", function(err, data) {
  if (err) {
    console.log("OH NO, THERE IS AN ERROR");
    console.dir(err);
    return;
  }
  console.log(data.green)
});