const express = require("express");
const helpers = require("./helpers/helpers");
const wsController = require("./controller/wsController");
///////////////////

const wsServerLocation =
  "wss://de.tribalwars2.com/socket.io/?platform=desktop&EIO=3&transport=websocket";

// const server = express();
// server.listen(3000);

const runApp = () => {
  console.log("----- APP IS RUNNING -----");
  helpers.fileExCheck();
  //helpers.setup();

  wsController.runConn(wsServerLocation);
  //wsController.getToken(wsServerLocation);
};

runApp();
