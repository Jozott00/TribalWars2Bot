const fs = require("fs");
let obj = {};
let result = "";

const settings = fs.readFileSync("settings.json", "utf8");

function readSettings(key) {
  obj = JSON.parse(settings);
  if (!(key in obj)) {
    return 404;
  } else {
    result = obj[key];
    return result;
  }
}

exports.settings = readSettings;

// OTHER SYNC READFILE //

// function readSettings2(key) {
//   function func() {
//     return new Promise((resolve, reject) => {
//       fs.readFile("settings.json", function(err, data) {
//         err ? reject(404) : resolve(data);
//       });
//     });
//   }

//   func()
//     .then(data => {
//       return data;
//     })
//     .catch(err => {
//       return err;
//     });
// }

// if (readSettings2("username") != 404) {
//   console.log("nice");
// } else {
//   console.log("bad");
// }
