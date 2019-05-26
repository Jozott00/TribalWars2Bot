const read = require("./readfile");

const selectors = {
  username: "username",
  password: "password",
  userToken: "userToken",
  playerID: "player_id",
  characterID: "characterId",
  worldID: "worldId",
  worldName: "worldName",
  settingsPath: "settings.json"
};
const user = {
  username: read.settings(selectors.username),
  password: read.settings(selectors.password),
  token: read.settings(selectors.userToken),
  playerID: "613926",
  villageID: "22258",
  worldID: "de36"
};
const requestProps = {
  //requestTypes
  loginType: "Authentication/login",
  selectCharType: "Authentication/selectCharacter",
  getInfoCharType: "Character/getInfo",
  gameBatchType: "GameDataBatch/getGameData",
  buildingUpgradeType: "Building/upgrade",
  villageResourceType: "VillageBatch/getVillageData",
  //requestDataArrays
  passwordLoginData: {
    name: user.username,
    pass: user.password
  },
  tokenLoginData: {
    name: user.username,
    token: user.token
  },
  selectCharData: {
    id: user.playerID,
    world_id: user.worldID
  },
  upgradeClayData: {
    building: "clay_pit",
    village_id: user.villageID,
    location: "menu",
    premium: false
  },
  upgradeTimberData: {
    building: "timber_camp",
    location: "menu",
    premium: false,
    village_id: global.villageID
  },
  upgradeIronData: {
    building: "iron_mine",
    location: "menu",
    premium: false,
    village_id: user.villageID
  },
  upgradeFarmData: {
    building: "farm",
    location: "menu",
    premium: false,
    village_id: user.villageID
  },
  villageResourceData: {
    village_ids: [user.villageID]
  }
};

module.exports = { user, requestProps, selectors };
