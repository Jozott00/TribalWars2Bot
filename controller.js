const helpers = require("./helpers");
const keys = require("./keywords");

const shouldUpgradeFarms = true;

const controller = dataObj => {
  shouldUpgradeFarms && upgradeFarms(dataObj);
};

const upgradeFarms = dataObj => {
  const vInfo = helpers.getVillageInfo(dataObj);
  const storage = vInfo.storage;
  const resources = vInfo.resources;
  const buildingLevel = vInfo.farmBuildingLevel;
  let lowest = Number.POSITIVE_INFINITY;
  let highest = Number.NEGATIVE_INFINITY;

  for (key in buildingLevel) {
    let level = buildingLevel[key];
    if (level < lowest) {
      lowest = level;
    }
    if (level > highest) {
      highest = level;
    }
  }

  switch (lowest) {
    case buildingLevel.timberCamp:
      helpers.timberCampUpgrade();
      break;
    case buildingLevel.clayPit:
      helpers.clayPitUpgrade();
      break;
    case buildingLevel.ironMine:
      helpers.ironMineUpgrade();
      break;
    case buildingLevel.farm:
      helpers.farmUpgrade();
      break;
    default:
      break;
  }
};

exports.controller = controller;
