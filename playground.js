const fs = require("fs");

const dataBuffer = fs.readFileSync("./data.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
const newdata = { ...data };
newdata.name = "Giiiiiiiang";
newdata.age = 29;
const newdataJSON = JSON.stringify(newdata);
fs.writeFileSync("data.json", newdataJSON);
