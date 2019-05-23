const fs = require("fs");

const _ = require("underscore");
const WebSocket = require("ws");

const write = require("./writefile");
const read = require("./readfile");
const key = require("./keywords");
////////////////////

const username = "joza2017";
const password = "password";
const userToken = "";
const gameworld = "en107";

if (read.settings(global.username) === 404) {
  write.settings(global.username, username);
}
if (read.settings(global.password) === 404) {
  write.settings(global.password, password);
}

//websockets send
const ws = new WebSocket(
  "wss://de.tribalwars2.com/socket.io/?platform=desktop&EIO=3&transport=websocket"
);
const now = Date.now();
let request;
let json;
let obj;

const data = new Array("msg", {
  type: "Authentication/login",
  data: { name: username, pass: password },
  headers: { traveltimes: [["browser_send", now]] },
  id: 2
});

const jsonConvert = JSON.stringify(data);

const wsCount = 42;
const getToken = 42 + jsonConvert;

ws.on("open", function open() {
  if (read.settings("userToken" === 404)) {
    request = getToken;
  }
  console.log(request);
  ws.send(request);
});

ws.on("message", function incoming(data) {
  if (data.substring(0, 2) === "42") {
    console.log("Incoming Message:");
    json = data.substring(2);
    obj = JSON.parse(json);
    console.log(json);
    console.log(" ------------- " + obj[1].type);
    if (obj[1].type === "Login/success") {
      objData = obj[1].data;
      write.settings(global.userToken, objData.token);
      write.settings(global.playerID, objData.player_id);
      write.settings(global.worldID, objData.characters[0].world_id);
      // write.settings(global.playerID, objData.player_id);
      // write.settings(global.playerID, objData.player_id);
      // write.settings(global.playerID, objData.player_id);
    }
  }
});
