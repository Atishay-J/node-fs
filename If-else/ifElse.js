const fs = require("fs");

function writeCases() {
  fs.writeFile(
    "cases.js",
    "if(i === 0) console.log('Equal to', 0)",
    function (err, data) {
      console.log("Wrote If", data);
    }
  );

  for (let i = 1; i <= 50; i++) {
    fs.appendFile(
      "cases.js",
      `\n else if(i === ${i}) console.log("Equal to", ${i})`,
      function (err, data) {
        console.log("Wrote ElseIf", data);
      }
    );
  }

  fs.appendFile(
    "cases.js",
    `\n else console.log("No match found")`,
    function (err, data) {
      console.log("Wrote ElseIf", data);
    }
  );
}

writeCases();
