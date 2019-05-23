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
global.uPlayerID = read.settings(global.playerID);

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
global.rSelectCharData = { id: global.uPlayerID, world_id: "de40" };
global.rUpgradeClayData = {
  building: "clay_pit",
  village_id: 9571,
  location: "menu",
  premium: false
};
global.rUpgradeTimberData = {
  building: "timber_camp",
  location: "menu",
  premium: false,
  village_id: 9571
};

global.rVillageResourceData = {
  village_ids: [9571]
};
