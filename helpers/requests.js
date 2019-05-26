const request = require("../models/request");
const globalsHelpers = require("./globals.helper");

//´REQUESTS FOR THE API

//Login Requests
const passwordLogin = () => {
  request.createRequest(
    globalsHelpers.requestProps.loginType,
    2,
    globalsHelpers.requestProps.passwordLoginData
  );
};
const tokenLogin = () => {
  request.createRequest(
    globalsHelpers.requestProps.loginType,
    2,
    globalsHelpers.requestProps.tokenLoginData
  );
};
const characterLogin = () => {
  request.createRequest(
    globalsHelpers.requestProps.selectCharType,
    3,
    globalsHelpers.requestProps.selectCharData
  );
};

//Data Info Requests
const villageInfo = () => {
  request.createRequest(
    globalsHelpers.requestProps.villageResourceType,
    25,
    globalsHelpers.requestProps.villageResourceData
  );
};
const gameInfo = () => {
  request.createRequest(globalsHelpers.requestProps.gameBatchType, 4);
};

//Farm Buildings Upgrade Call
const timberCampUpgrade = () => {
  request.createRequest(
    globalsHelpers.requestProps.buildingUpgradeType,
    29,
    globalsHelpers.requestProps.upgradeTimberData
  );
};
const clayPitUpgrade = () => {
  request.createRequest(
    globalsHelpers.requestProps.buildingUpgradeType,
    30,
    globalsHelpers.requestProps.upgradeClayData
  );
};
const ironMineUpgrade = () => {
  request.createRequest(
    globalsHelpers.requestProps.buildingUpgradeType,
    31,
    globalsHelpers.requestProps.upgradeIronData
  );
};
const farmUpgrade = () => {
  request.createRequest(
    globalsHelpers.requestProps.buildingUpgradeType,
    32,
    globalsHelpers.requestProps.upgradeFarmData
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
  characterLogin,
  gameInfo
};
