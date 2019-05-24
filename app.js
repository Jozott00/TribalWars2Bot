const express = require("express");
const helpers = require("./helpers/helpers");
const wsController = require("./controller/wsController");
///////////////////

// const server = express();
// server.listen(3000);

const runApp = () => {
  helpers.fileExCheck();
  helpers.setup();

  wsController.startConn();
  wsController.listenConn();
};

runApp();

module.exports = {
  runApp
};
