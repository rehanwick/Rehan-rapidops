const fs = require("fs");
const path = require("path");

const downloadView = async (req, res) => {
  let filePath = path.join(__dirname, "../public/img");
  const Imgdata = await fs.promises.readdir(filePath);
  console.log(Imgdata);
  res.render("download", { data: Imgdata });
};

const downloadImg = (req, res) => {
  const { fileName } = req.body;
  const filePath = path.join(__dirname, `../public/img/${fileName}`);
  const head = {
    "Content-Length": fs.statSync(filePath),
    "Content-Type": "Image/png",
    "Content-Disposition": "attachment;filename=" + "img.png",
  };
  res.writeHead(200, head);
  let scourceFile = fs.createReadStream(filePath);
  scourceFile.pipe(res);
};

const viewImg = (req, res) => {
  const { fileName } = req.query;
  const filePath = path.join(__dirname, `../public/img/${fileName}`);
  const head = {
    "Content-Length": fs.statSync(filePath),
    "Content-Type": "Image/png",
    "Content-Disposition": "inline;filename=" + "img.png",
  };
  res.writeHead(200, head);
  let scourceFile = fs.createReadStream(filePath);
  scourceFile.pipe(res);
};

module.exports = {
  downloadImg,
  downloadView,
  viewImg,
};
