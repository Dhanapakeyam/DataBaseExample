const fs = require("fs");

// const quote = "No Beauty shines brighter than that a good heart 💕💕";

// fs.writeFile("./newFile.html", quote, (err) => {
//     console.log("Completed Writing!!!");
// })

// //Reading files
// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// });

// //append to existing
// fs.appendFile("cool.txt", "\n" + quote, (err) => {
//     console.log("Completed!!");
// });

fs.unlink("./deleted.css", (err) => {
    console.log("Deleted Successfully!!!");
});