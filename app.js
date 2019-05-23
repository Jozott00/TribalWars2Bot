const WebSocket = require("ws");
const express = require("express");

const write = require("./writefile");
const read = require("./readfile");
const helpers = require("./helpers");
const keys = require("./keywords");
const request = require("./request");
const controller = require("./controller");
///////////////////

// const server = express();
// server.listen(3000);

helpers.fileExCheck();
helpers.setup();

const ws = new WebSocket(
  "wss://de.tribalwars2.com/socket.io/?platform=desktop&EIO=3&transport=websocket"
);
let obj;
let json;

ws.on("open", function open() {
  r = request.createRequest(global.rLoginType, 2, global.rPasswordLoginData);
  ws.send(r);
  console.log(r);
});

setInterval(function() {
  ws.send(2);
  console.log(Date());
}, 25000);

request.updateWs(ws);

ws.on("message", function incoming(data) {
  if (data.substring(0, 2) === "42") {
    json = data.substring(2);
    obj = JSON.parse(json);
    objData = obj[1].data;
    if (obj[1].type != "System/error") {
      console.log("Incoming Message:");
      console.log(json);
      console.log(" ------------- " + obj[1].type);
      if (obj[1].type === "Login/success") {
        write.settings(objData);
        request.createRequest(
          global.rSelectCharType,
          3,
          global.rSelectCharData
        );
        console.log(r);
      } else if (obj[1].type === "Authentication/characterSelected") {
        write.settings(objData);
        request.createRequest(global.rGetInfoCharType, 13, {});
      } else if (obj[1].type === "Character/info") {
        // request.createRequest(
        //   global.rBuildingUpgradeType,
        //   30,
        //   global.rUpgradeClayData
        // );
        // request.createRequest(
        //   global.rBuildingUpgradeType,
        //   29,
        //   global.rUpgradeTimberData
        // );
        // request.createRequest(
        //   global.rVillageResourceType,
        //   25,
        //   global.rVillageResourceData
        // );

        write.settings(objData);

        request.createRequest(
          global.rVillageResourceType,
          25,
          global.rVillageResourceData
        );
      } else if (obj[1].type === "VillageBatch/villageData") {
        controller.controller(objData);
      } else {
      }
    } else {
    }
  } else if (data == 3) {
    console.log(data);
  } else {
    console.log(data);
  }
});

setTimeout(function() {
  ws.on("close", function close() {
    console.log("connection should be closed");
  });
}, 40000);
