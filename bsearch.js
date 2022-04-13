const fs = require("fs");

const torah = fs.readFileSync("mini-bible.txt", "utf-8");

function count(word, cb) {
  const wordCount = torah.split(" ").filter((w) => w === word).length;
    if (wordCount === 0) {
      return cb('error word not found')
    }
    cb(null,wordCount)
}

module.exports = {
    count
}