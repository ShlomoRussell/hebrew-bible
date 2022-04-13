const checkcount = require('./bsearch');

checkcount.count("את", function (err, wordCount) {
  if (err) {
    return console.log(err);
  }
  console.log(wordCount);
});

