const request = require("../models/request");
const keys = require("./keywords");

//´REQUESTS FOR THE API

//Login Requests
const tokenLogin = () => {
  request.createRequest(global.rLoginType, 2, global.rTokenLoginData);
};
const passwordLogin = () => {
  request.createRequest(global.rLoginType, 2, global.rPasswordLoginData);
};
const characterLogin = () => {
  request.createRequest(global.rSelectCharType, 3, global.rSelectCharData);
};

const villageInfo = () => {
  request.createRequest(
    global.rVillageResourceType,
    25,
    global.rVillageResourceData
  );
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
  villageInfo,
  timberCampUpgrade,
  clayPitUpgrade,
  ironMineUpgrade,
  farmUpgrade,
  tokenLogin,
  passwordLogin,
  characterLogin
};
