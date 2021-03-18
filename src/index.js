const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const consola = require("consola");
// const morgan = require("morgan");
const volleyball = require("volleyball");
const CronJob = require("cron").CronJob;
const WebResponse = require("./utils/WebResponse");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(morgan("dev"));
app.use(volleyball);

app.use("/api/v1", require("./routes"));

function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found - " + req.originUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  return WebResponse(res, res.statusCode, err.message, err.stack);
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => consola.success(`SERVER READY IN PORT ${PORT}`));
