const fs = require("fs");
const text = "Live more, worry less 😊";
for (var i = 1; i <= 10; i++) {
    fs.writeFile(`./backupFolder/text-${i}.html`, text, (err) => {
        console.log("File Created!!!");
    });
}