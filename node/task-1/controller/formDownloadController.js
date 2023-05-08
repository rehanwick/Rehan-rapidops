const { json2csv } = require("json-2-csv");
const path = require("path");
const fs = require("fs");
const http = require("http");

const download = (req, res) => {
  let filePath = path.join(__dirname, "../data/data.json");
  let jsonArr;
  try {
    jsonArr = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
  const csvPath = path.join(__dirname, "../public/data.csv");
  json2csv(jsonArr, (err, csv) => {
    if (csv) {
      fs.writeFileSync(csvPath, csv);
    } else {
      res.status(500).json({
        status: "error",
        msg: err,
      });
    }
  });
  const head = {
    "Content-Length": fs.statSync(csvPath),
    "Content-Type": "text/csv",
    "Content-Disposition": "attachment;filename=" + "data.csv",
  };
  res.writeHead(200, head);
  let scourceFile = fs.createReadStream(csvPath);
  scourceFile.pipe(res);
};

module.exports = {
  download,
};
