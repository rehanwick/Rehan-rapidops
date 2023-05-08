const express = require('express');
const app = express();
const body = require('body-parser');
const { urlencoded } = require('express');
app.use(urlencoded)
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile("/home/ad.rapidops.com/rehan.shaikh/Desktop/Rehan-Shaikh/node/form-submission-using-expres/templates/index.html")
})
app. post('/display' ,  (req,res) => {
  console.log(req.body);
    res.json(JSON.parse(req.body))
})
app.listen(3000, (req,res) => {
    console.log("http://localhost:3000");
}); 