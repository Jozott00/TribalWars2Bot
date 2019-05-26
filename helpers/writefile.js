const fs = require("fs");

const keys = require("./keywords");

let obj = {};
let json;

function deepFind(obj, path) {
  var paths = path.split("."),
    current = obj,
    i;
  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
}

function overrideSettings(inputArray, filename) {
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
      if (false) {
        console.log(deepFind(obj, path));
      } else {
        for (let key in inputArray) {
          obj[key] = inputArray[key];
        }
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
