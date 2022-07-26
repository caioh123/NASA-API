const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

const launchesRouter = require("./routes/launches/launches.router");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));

app.use(express.json());

app.use(planetsRouter);
app.use(launchesRouter)
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/*", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "public", "index.html"));
});


module.exports = app;
