const express = require("express");
const path = require("path");
const formRouter = require("./routes/formRoter");
const uploadrouter = require("./routes/uploadRouter");
const downloadRoute = require("./routes/downloadRoute");
const curdFormROute = require("./routes/curdFormRoutes");
const app = express();

//static
app.use("/static", express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ejs
app.use("/", formRouter);
app.use("/", uploadrouter);
app.use("/", downloadRoute);
app.use("/", curdFormROute);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000`);
});
