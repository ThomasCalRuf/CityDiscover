const express = require('express');
const mongoose = require('mongoose');

const connectionUrl= `mongodb+srv://Thomas:p1vKUXxoFyUlBAWd@citydiscover.ymdccvo.mongodb.net/CityDiscover?retryWrites=true&w=majority`;

const hostname = "0.0.0.0"
const PORT = 3000;

const server = express();

server.use(express.urlencoded());
server.use(express.json());


const userRoute = require("./app/routes/userRoute");
userRoute(server);

const planningRoute = require("./app/routes/planingRoute");
planningRoute(server);

const dataparisRoute = require("./app/routes/dataparisRoute");
dataparisRoute(server);

mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => server.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));