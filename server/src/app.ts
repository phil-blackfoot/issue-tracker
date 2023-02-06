const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../.env` });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./controllers/issues");
const history = require("connect-history-api-fallback");
import { connectDb } from "./models";

const app = express();
app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 5000;

connectDb().then(async () => {
  app.listen(port, () => {
    console.log("server running on port " + port);
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname));
}

app.use("/api", routes);
