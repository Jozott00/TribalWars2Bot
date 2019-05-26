const helpers = require("../helpers/helpers");
const requests = require("../helpers/requests");

const shouldUpgradeFarms = true;
const timerRunning = false;

const controller = dataObj => {
  shouldUpgradeFarms && upgradeFarms(dataObj);
};

const upgradeFarms = dataObj => {
  const vInfo = helpers.getVillageInfo(dataObj);
  const storage = vInfo.storage;
  const resources = vInfo.resources;
  const buildingLevel = vInfo.farmBuildingLevel;
  const queueBuilding = vInfo.queueBuildings;
  let lowest = Number.POSITIVE_INFINITY;
  let highest = Number.NEGATIVE_INFINITY;

  if (queueBuilding.length < 2) {
    for (key in buildingLevel) {
      let level = buildingLevel[key];
      if (queueBuilding.includes(key)) {
        level += 1;
        buildingLevel[key] += 1;
      }

      if (level < lowest) {
        lowest = level;
      }
      if (level > highest) {
        highest = level;
      }
    }

    switch (lowest) {
      case buildingLevel.timber_camp:
        requests.timberCampUpgrade();
        break;
      case buildingLevel.clay_pit:
        requests.clayPitUpgrade();
        break;
      case buildingLevel.iron_mine:
        requests.ironMineUpgrade();
        break;
        // case buildingLevel.farm:
        //   requests.farmUpgrade();
        break;
      default:
        break;
    }
  } else console.log("----------- Bauschleife ist voll");

  !timerRunning &&
    setTimeout(() => {
      requests.villageInfo();
    }, 300000);
};

exports.controller = controller;
