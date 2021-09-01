const childProc = require("child_process");
const fs = require("fs");
const path = require("path");

const startBuild = new Date();
childProc.spawnSync("npm", ["run", "build"], {
    stdio: ["ignore", "inherit", "inherit"],
    shell: true,
});
const endBuild = new Date();
childProc.spawnSync("npm", ["run", "copy"], {
    stdio: ["ignore", "inherit", "inherit"],
    shell: true,
});

console.info("Writing build time...");
const indexPATH = path.join(__dirname, "..", "public", "index.html");

let indexHTML = fs.readFileSync(indexPATH).toString()
indexHTML = indexHTML.replace("{{buildTime}}", ((endBuild - startBuild) / 1000).toString());
fs.writeFileSync(indexPATH, indexHTML);
console.info("Build done!");
