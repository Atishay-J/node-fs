const fs = require("fs");

fs.readFile("something.js", "utf8", function (err, data) {
  console.log(data);
});

fs.writeFile(
  "storyBook.txt",
  "There was a king, he died.",
  function (err, data) {
    console.log("Write", data);
  }
);

fs.appendFile("storyBook.txt", "\n story finished", function (err, data) {
  console.log("data added", data);
});

fs.unlink("story.txt", function (err) {
  console.log("deleted", err);
});
