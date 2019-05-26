const fs = require("fs");

const keys = require("./keywords");
const objPath = require("object-path");

let obj = {};
let json;

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

const overrideSpecificSettings = (input, filename, at) => {
  file = "./data/" + filename + ".json";
  fs.readFile(file, (err, data) => {
    if (err) console.log("ERROR: Datei konnte nicht gefunden werden ");
    else {
      obj = JSON.parse(data);
      objPath.set(obj, at, input);
      at != null && console.log(objPath.get(obj, at));
      json = JSON.stringify(obj);
      fs.writeFile(file, json, err => {
        err && console.log(err);
      });
    }
  });
};

exports.settings = overrideSettings;
exports.specificSettings = overrideSpecificSettings;
