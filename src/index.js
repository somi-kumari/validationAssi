const express = require("express");
const app = express();
const connect = require("./configs/db");
app.use(express.json());

const { body, validationResult } = require("express-validator");
const userController = require("./controllers/user.controler");
app.use("/users", userController);
app.listen("2345", async () => {
  try {
    await connect();
    console.log("listnening to port 2345");
  } catch (e) {
    console.log(e.message);
  }
});
