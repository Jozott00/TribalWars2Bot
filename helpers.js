const fs = require("fs");

const write = require("./writefile");
const read = require("./readfile");
const keys = require("./keywords");
const request = require("./request");

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
  const storage = villageInfo.storage;
  const resources = {
    wood: villageInfo.resources.wood,
    clay: villageInfo.resources.clay,
    iron: villageInfo.resources.iron,
    food: villageInfo.resources.food
  };
  const farmBuildingLevel = {
    timberCamp: villageInfo.buildings.timber_camp.level,
    clayPit: villageInfo.buildings.clay_pit.level,
    ironMine: villageInfo.buildings.iron_mine.level,
    farm: villageInfo.buildings.farm.level
  };

  return { storage, resources, farmBuildingLevel };
};

//Farm Buildings Upgrade Call
const timberCampUpgrade = () => {
  request.createRequest(
    global.rBuildingUpgradeType,
    29,
    global.rUpgradeTimberData
  );
};
const clayPitUpgrade = () => {
  request.createRequest(
    global.rBuildingUpgradeType,
    30,
    global.rUpgradeClayData
  );
};
const ironMineUpgrade = () => {
  request.createRequest(
    global.rBuildingUpgradeType,
    31,
    global.rUpgradeIronData
  );
};
const farmUpgrade = () => {
  request.createRequest(
    global.rBuildingUpgradeType,
    32,
    global.global.rUpgradeFarmData
  );
};

module.exports = {
  setup,
  getVillageInfo,
  keyExCheck,
  fileExCheck,
  timberCampUpgrade,
  clayPitUpgrade,
  ironMineUpgrade,
  farmUpgrade
};
