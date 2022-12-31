const [, , num] = process.argv;
const quote = "Live happy!!";
const fs = require("fs");
for (var i = 1; i <= parseInt(num); i++) {
    fs.writeFile(`./ExampleFolder/text-${i}.html`, quote, (err) => {
        console.log("File Created!!!");
    });
}