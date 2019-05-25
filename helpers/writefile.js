const fs = require("fs");

const keys = require("./keywords");

let obj = {};
let json;

function overrideSettings(inputArray, filename = "settings") {
  file = "./data/" + filename + ".json";
  fs.readFile(file, function(err, data) {
    if (err) {
      obj = inputArray;
      json = JSON.stringify(obj);
      fs.writeFile(file, json, function(err) {
        if (err) {
          console.log(err);
        }
      });
    } else {
      obj = JSON.parse(data);
      for (let key in inputArray) {
        obj[key] = inputArray[key];
      }
      json = JSON.stringify(obj);
      fs.writeFile(file, json, function(err) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

exports.settings = overrideSettings;
