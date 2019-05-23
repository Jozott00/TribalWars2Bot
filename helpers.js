const fs = require("fs");

const write = require("./writefile");
const read = require("./readfile");
const keys = require("./keywords");

const username = "joza2017";
const password = "password";
const settingsPath = global.settingsPath;

function fileExCheck() {
  fs.stat(settingsPath, function(err, stat) {
    err == null && console.log(true);
  });
}

//keyword exist?
function keyExCheck(key) {
  if (read.settings(key) != 404) {
    return true;
  } else {
    return false;
  }
}

//setup settings
let setupArray = { username: username, password: password };
function setup() {
  write.settings(setupArray);
}

exports.fileExCheck = fileExCheck;
exports.keyExCheck = keyExCheck;
exports.setup = setup;
