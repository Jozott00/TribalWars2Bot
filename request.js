const now = Date.now();
let ws;

const updateWs = w => (ws = w);

const request = new Array("msg", {
  type: "",
  data: {},
  headers: { traveltimes: [["browser_send", now]] },
  id: 0
});

function createRequest(type, id, data) {
  if (type != null) request[1].type = type;
  if (id != null) request[1].id = id;
  if (id != null) request[1].data = data;
  jsonRequest = 42 + JSON.stringify(request);

  ws.send(jsonRequest);
}


module.exports = {
  updateWs,
  createRequest
};
