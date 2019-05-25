const WebSocket = require("ws");

const app = require("../app");
const write = require("../helpers/writefile");
const keys = require("../helpers/keywords");
const request = require("../models/request");
const requests = require("../helpers/requests");
const controller = require("./controller");

//let wsocket;
let obj;
let json;

const runConn = wsServerLocation => {
  const ws = new WebSocket(wsServerLocation);
  request.updateWs(ws);
  ws.on("open", function open() {
    requests.passwordLogin();
    setInterval(function() {
      ws.send(2);
      console.log(Date());
    }, 25000);
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
          write.settings(objData);
          requests.characterLogin();
        } else if (obj[1].type === "Authentication/characterSelected") {
          write.settings(objData);
          request.createRequest(global.rGetInfoCharType, 13, {});
        } else if (obj[1].type === "Character/info") {
          write.settings(objData);
          requests.gameInfo();
        } else if (obj[1].type === "GameDataBatch/gameData") {
          requests.villageInfo();
        } else if (obj[1].type === "VillageBatch/villageData") {
          controller.controller(objData);
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
    runConn(wsServerLocation);
  };
};

module.exports = {
  runConn
};
