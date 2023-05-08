const express = require("express");
const app = express();
const config = require("./config");
const port = config.localhost.port;

const restServices = require("./rest-services");

app.use(express.json()) ; 
app.use(express.urlencoded({ extended: true }));

app.use("/", restServices);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});
