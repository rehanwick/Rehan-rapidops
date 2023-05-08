const express = require("express");
const app = express();
const registrationRouter = require("./router/registrationRouter");
const creatFolderRouter = require("./router/creatFolderRouter");
const crudUserRouter = require("./router/crudUserRouter");

const cron = require('node-cron') ; 

let i = 1 ; 
cron.schedule('* * * * *' , ()=> {
  console.log(`crone is runnning... min ${i}`);
})

//middelwear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", registrationRouter);
app.use("/", creatFolderRouter);
app.use("/", crudUserRouter);

app.listen(3000);






























































//sequelizer
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("email_client", "root", "Hurairah", {
  host: "localhost",
  dialect: "mysql",
});
async function connectdb() {
  try {
    await sequelize.authenticate();
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
}
connectdb();