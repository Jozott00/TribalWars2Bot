const WebSocket = require("ws");

const app = require("../app");
const write = require("../helpers/writefile");
const keys = require("../helpers/keywords");
const request = require("../models/request");
const requests = require("../helpers/requests");
const controller = require("./controller");
const helpers = require("../helpers/helpers");

//let wsocket;
let obj;
let json;

const getToken = wsServerLocation => {
  const ws = new WebSocket(wsServerLocation);
  request.updateWs(ws);
  ws.on("open", () => {
    requests.passwordLogin();
    console.log("Login ...");
  });

  ws.on("message", data => {
    if (data.substring(0, 2) === "42") {
      obj = JSON.parse(data.substring(2));

      const newToken = obj[1].data.token;
      const at = "securitySettings.token";

      switch (obj[1].type) {
        case "Login/success":
          write.specificSettings(newToken, "userSettings", at);
          console.log("Token stored in Settings");
          break;
        case "System/error":
          console.log("Error: " + obj[1].data.message);
          break;
        default:
          break;
      }
    }
  });
};

const runConn = wsServerLocation => {
  const ws = new WebSocket(wsServerLocation);

  const refreshConnection = setInterval(function() {
    ws.send(2);
    console.log(Date());
  }, 25000);

  request.updateWs(ws);
  ws.on("open", function open() {
    requests.passwordLogin();
    refreshConnection;
  });

  ws.on("message", function incoming(data) {
    console.log("INCOMING ... " + data);
    if (data.substring(0, 2) === "42") {
      json = data.substring(2);
      obj = JSON.parse(json);
      objData = obj[1].data;
      if (obj[1].type != "System/error") {
        console.log(" ------------- " + obj[1].type);
        console.log();
        if (obj[1].type === "Login/success") {
          //write.settings(objData);
          requests.characterLogin();
        } else if (obj[1].type === "Authentication/characterSelected") {
          write.settings(objData, "settings");
          request.createRequest(global.rGetInfoCharType, 13, {});
        } else if (obj[1].type === "Character/info") {
          write.settings(objData, "settings");
          requests.gameInfo();
        } else if (obj[1].type === "GameDataBatch/gameData") {
          //GAME DATA most of the time not changed
          //write.settings(objData, "gameData");

          requests.villageInfo();
        } else if (obj[1].type === "VillageBatch/villageData") {
          controller.controller(objData);
        } else if (obj[1].type === "Building/levelChanged") {
          const uB = obj[1].data.building;
          if (uB === "timber_camp" || uB === "clay_pit" || uB === "iron_mine") {
            requests.villageInfo();
          }
        } else {
        }
      } else {
        console.log("----------- " + obj[1].data.message);
        console.log();
      }
    } else if (data == 3) {
    } else {
    }
  });

  ws.onclose = () => {
    console.log("Connection is closed");
    clearInterval(refreshConnection);
    runConn(wsServerLocation);
  };
};

module.exports = {
  runConn,
  getToken
};
