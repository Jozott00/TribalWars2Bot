const fs = require("fs");

const keys = require("./keywords");

let obj = {};
let json;

const testArray = {
  username: "pasdssword2",
  password: "passwsd2",
  sadf: "asdfasf"
};

function test(array) {
  fs.readFile("settings.json", function(err, data) {
    if (err) {
      obj = testArray;
      json = JSON.stringify(obj);
      fs.writeFile("settings.json", json, function(err) {
        if (err) {
          console.log(err);
        }
      });
    } else {
      obj = JSON.parse(data);
      console.log(obj);
      for (let key in testArray) {
        obj[key] = testArray[key];
      }
      console.log(obj);
      json = JSON.stringify(obj);
      fs.writeFile("settings.json", json, function(err) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

//test(testArray);
