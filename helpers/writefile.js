const fs = require("fs");

const keys = require("./keywords");

let obj = {};
let json;
const settings = "./data/settings.json";

function overrideSettings(inputArray) {
  fs.readFile(settings, function(err, data) {
    if (err) {
      obj = inputArray;
      json = JSON.stringify(obj);
      fs.writeFile(settings, json, function(err) {
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
      fs.writeFile(settings, json, function(err) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

exports.settings = overrideSettings;
