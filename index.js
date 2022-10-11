const express = require("express");

const app = express();
var course = require("./api/models/courseModel"),
  bodyParser = require("body-parser");
const InitiateMongoServer = require("./db");

InitiateMongoServer().then(function () {
  const PORT = process.env.PORT || 3000;

  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use(express.json());

  var routes = require("./api/routes/courseRoutes");

  app.use("/courses", routes);

  app.listen(PORT);
});
