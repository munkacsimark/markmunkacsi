const fs = require("fs");
const JSON5 = require("json5");

module.exports = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error, data) => {
      if (error) reject(error);
      resolve(JSON5.parse(data));
    });
  });
