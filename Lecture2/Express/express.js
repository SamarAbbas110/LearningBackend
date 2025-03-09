import express from "express";
import { getAbout, getParams, getQueryParams } from "./controller.js";
const app = express();
const PORT = 8086;

app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.get("/about", getAbout);

//params
app.get("/v1/user/:name", getParams);

// ? - Query Params

app.get("/v1/name/getDetails", getQueryParams);

app.listen(
  (PORT,
  () => {
    console.log("Server is Listening on PORT....", PORT);
  })
);
