const read = require("./readfile");

//settingsKey
global.username = "username";
global.password = "password";
global.userToken = "userToken";
global.playerID = "player_id";
global.characterID = "characterId";
global.worldID = "worldId";
global.worldName = "worldName";

//settingsPath
global.settingsPath = "settings.json";

//user data
global.uUsername = read.settings(global.username);
global.uPassword = read.settings(global.password);
global.uToken = read.settings(global.userToken);
//global.uPlayerID = read.settings(global.playerID);
//global.uVillageID = read.settings("villageId");
global.uPlayerID = "613926";
global.uVillageID = "22258";
global.uWorldID = "de36";

//requestTypes
global.rLoginType = "Authentication/login";
global.rSelectCharType = "Authentication/selectCharacter";

global.rGetInfoCharType = "Character/getInfo";

global.rBuildingUpgradeType = "Building/upgrade";

//global.rVillageResourceType = "ResourceDeposit/getInfo";
global.rVillageResourceType = "VillageBatch/getVillageData";

//requestDataArrays
global.rPasswordLoginData = {
  name: global.uUsername,
  pass: global.uPassword
};
global.rTokenLoginData = { name: global.uUsername, token: global.uToken };
global.rSelectCharData = { id: global.uPlayerID, world_id: global.uWorldID };
global.rUpgradeClayData = {
  building: "clay_pit",
  village_id: global.uVillageID,
  location: "menu",
  premium: false
};
global.rUpgradeTimberData = {
  building: "timber_camp",
  location: "menu",
  premium: false,
  village_id: global.uVillageID
};
global.rUpgradeIronData = {
  building: "iron_mine",
  location: "menu",
  premium: false,
  village_id: global.uVillageID
};
global.rUpgradeFarmData = {
  building: "farm",
  location: "menu",
  premium: false,
  village_id: global.uVillageID
};

global.rVillageResourceData = {
  village_ids: [global.uVillageID]
};
