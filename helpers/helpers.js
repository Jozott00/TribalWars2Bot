const fs = require("fs");

const write = require("./writefile");
const read = require("./readfile");
const keys = require("./keywords");
const request = require("../models/request");

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

//get the resource infos
const getVillageInfo = dataObj => {
  const villageID = global.uVillageID;
  const villageInfo = dataObj[villageID]["Village/village"];
  const villageQueue = dataObj[villageID]["Building/queue"].queue;
  const storage = villageInfo.storage;
  const resources = {
    wood: villageInfo.resources.wood,
    clay: villageInfo.resources.clay,
    iron: villageInfo.resources.iron,
    food: villageInfo.resources.food
  };
  const farmBuildingLevel = {
    timber_camp: villageInfo.buildings.timber_camp.level,
    clay_pit: villageInfo.buildings.clay_pit.level,
    iron_mine: villageInfo.buildings.iron_mine.level
    //farm: villageInfo.buildings.farm.level
  };
  const queueBuildings = [];
  let c = 0;
  for (key in villageQueue) {
    queueBuildings.push(villageQueue[c].building);
  }
  return { storage, resources, farmBuildingLevel, queueBuildings };
};

module.exports = {
  setup,
  getVillageInfo,
  keyExCheck,
  fileExCheck
};
